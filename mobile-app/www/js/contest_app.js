/**
 * Contest App - Main Behavioral Layer
 * features - 
 * show google maps using cordova map plugin
 * Displays markers based on the co-ordinates
 * On click of markers displays info - realtime votes count
 * On click of info displays feature to vote by swiping left /right
 */
var contestApp = {
    map: null,
    data: [],
    init: function() {
        // initialise map plugin
        plugin.google.maps.environment.setEnv({
            'API_KEY_FOR_BROWSER_RELEASE': '',
            'API_KEY_FOR_BROWSER_DEBUG': ''
        });

        // init and generate map
        this.initGoogleMaps();

        // initialise modal
        appModal.init();

        // initialise sockets
        socketFlow.init();
    },
    initGoogleMaps: function(){
        var div = document.getElementById("gmap");
        // Initialize the map view
        this.map = plugin.google.maps.Map.getMap(div);
    },
    fetchMapData: function(data){
        // made data available in format for map
        this.processData(data);
    },
    processData: function(data){
        var contests = data.contests;
        var formattedData = [];
        var self = this;
        contests.map((elem)=>{
            // get entrants
            var entrants = elem.entrant.split(",");
            
            // cordinates (eg: "{lat: -122.1180187, lng: 37.3960513} + {lat: -122.1102408, lng: 37.3943847}" to object )
            var cords = elem.coordinates.split("+");

            cords.map((e, indx)=>{
                var obj = self.getCordsObj(eval('(' + e + ')'), entrants[indx], "img/logo.png");
                formattedData.push(obj);
            });
        });
        this.data = formattedData;
        // set markers
        this.setMarkers();
    },
    getCordsObj: function(position, title, img){
        var locationMarker = this.getCustomMapIcon();
        var cordObj = {
            position: !position ? { lng: 0, lat: 0} : position,
            title: !title? "" : title,
            icon: locationMarker,
            img: !img? "" : img
        }
        return cordObj;
    },
    getCustomMapIcon: function(){
        return {
            url: 'img/pin.png',
            anchor: new google.maps.Point(16, 0)
        };
    },
    setMarkers: function(){
        var self = this;
        var data = this.data;
        // Add markers
        var bounds = [];
        var markers = data.map(function(options) {
            bounds.push(options.position);
            return self.map.addMarker(options);
        });

        // Set a camera position that includes all markers.
        self.map.moveCamera({
            target: bounds
        });
        // attach events to marker title (info window)
        self.attachInfoWindows(markers);
    },
    attachInfoWindows: function(markersArr){
        var data = this.data;
        markersArr.map(function(ele, indx){
            ele.on(plugin.google.maps.event.INFO_CLICK, function() {
                // alert(ele.getTitle());
                var infoObj = {
                    img: data[indx]["img"],
                    title: ele.getTitle()
                }
                // set the modal content
                appModal.setModalContent(infoObj);

                // open the modal
                appModal.toggleModal();
            });
        });
    }
};