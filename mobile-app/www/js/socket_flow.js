/**
 * Socket Flow related - Behavioral layer
 * features - 
 * get/ send coords
 * get/ send votes 
 */
var socketFlow = {
    socket: null,
    userId: "",
    sentData: {},
    connects: {},
    contests: [],
    active: false,
    init: function(){
        this.userId = Math.random().toString(16).substring(2,15);
        this.getCurrentCords();
        
        this.socket = io.connect('http://localhost:3001');
        // connect to socket events
        this.connectToSocEvents();
    },
    getCurrentCords: function(){
        // check whether browser supports geolocation api
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.positionSuccess.bind(this), this.positionError.bind(this), { enableHighAccuracy: true });
        } else {
            console.log('Your browser is out of fashion, there\'s no geolocation!');
        }
    },
    positionSuccess: function(position){
        this.active = true;

        var lat = position.coords.latitude;
		var lng = position.coords.longitude;
        
        this.sentData = {
            id: this.userId,
            active: this.active,
            coords: {
                lat: lat.toString(),
                lng: lng.toString()
            }
        };

        this.emitCords();
    },
    positionError: function(error) {
        var errors = {
			1: 'Authorization fails', // permission denied
			2: 'Can\'t detect your location', //position unavailable
			3: 'Connection timeout' // timeout
        };
        console.log('Error ', errors[error.code]);
    },
    connectToSocEvents: function(){
        var self = this;
        // for realtime co-ords
        self.socket.on('load:coords', function(data) {
            if (!(data.id in self.connects)) {
                console.log("All connected Users Data: ", data)
            }
    
            self.connects[data.id] = data;
            self.connects[data.id].updated = Date.now();
        });
        // for channel and co-ords
        self.socket.on('load:contest', function(data) {
            if (data.success && data.contests) {
                // send data towards app
                contestApp.fetchMapData(data);
            }
            self.contests = data;
        });
    },
    emitCords: function(){
        console.log("Sent Data towards server: ", this.sentData);
        this.socket.emit('send:coords', this.sentData);
    },
    emitVote: function(obj){
        console.log("Emit Vote towards server: ", obj);
        this.socket.emit('send:vote', obj);
    }
}