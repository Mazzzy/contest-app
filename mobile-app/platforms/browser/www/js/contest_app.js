/**
 * Contest App - Main Behavioral Layer
 * features - 
 * show google maps using cordova map plugin
 * Displays markers based on the co-ordinates
 * On click of markers displays info - realtime votes count
 * On click of info displays feature to vote by swiping left /right
 */
var testLat = 21.1591857,
  testLng = 72.7522564;

var contestApp = {
    data: [],
    init: function() {
        // initialise map plugin
        plugin.google.maps.environment.setEnv({
            'API_KEY_FOR_BROWSER_RELEASE': '',
            'API_KEY_FOR_BROWSER_DEBUG': ''
        });

        // init and generate map
        this.initGoogleMaps();
    },
    initGoogleMaps: function(){
        var div = document.getElementById("gmap");

        var options = {
            camera: {
            target: {lat: testLat, lng: testLng},
            zoom: 10
            }
        };

        // Initialize the map view
        map = plugin.google.maps.Map.getMap(div, options);

        // Wait until the map is ready status.
        map.addEventListener(plugin.google.maps.event.MAP_READY, this.onMapReady.bind(this));
    },
    onMapReady: function(){
        var locationMarker = this.getCustomMapIcon();
        map.addMarker({
            position: {lat: testLat, lng: testLng},
            title: 'my location',
            icon: locationMarker
        })
    },
    getCustomMapIcon: function(){
        return {
            url: 'img/pin.png',
            anchor: new google.maps.Point(16, 0)
        };
    }
};