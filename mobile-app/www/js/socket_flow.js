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
    active: false,
    init: function(){
        this.userId = Math.random().toString(16).substring(2,15);
        this.getCurrentCords();
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
                lat: lat,
                lng: lng
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
    emitCords: function(){
        console.log(this.sentData);
    }
}