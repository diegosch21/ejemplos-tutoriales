define([
    'jquery',
    'underscore',
    'backbone',
    'gmap',
    'collections/collection',
    'text!templates/map.html'
], function($, _, Backbone, googleMap, mapCollection, mapTemplate){

    var MapView = Backbone.View.extend({
        el: '#map',
        template:_.template(mapTemplate),
        initialize: function(){
            var map;
        },
        updateMap:function(e){

            if (!e) {this.createMap();}
            else {map.setCenter( new google.maps.LatLng(e.get('lat'), e.get('lng') ));}
				 
        },
		createMap:function(){
            if (navigator && navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    function(position) {
                        var pos = new google.maps.LatLng(
                            position.coords.latitude,
                            position.coords.longitude
                        );
                        map.setCenter(pos);
                    }, function(e) {
                        switch(e){
                            case 1:
                                console.log('The user denied the request for location information.');
                                break;
                            case 2:
                                console.log('Your location information is unavailable.');
                                break;
                            case 3:
                                console.log('The request to get your location timed out.');
                                break;
                            default:
                                console.log('default');
                        }
                    });
            } 
		},
        render: function(){
			this.$el.html(this.template);
			
        	map = new google.maps.Map($('#map_canvas')[0], {
            	zoom: 12,
				position: new google.maps.LatLng(null, null),
            	mapTypeId: google.maps.MapTypeId.ROADMAP
        	});
        }


    });
    return MapView;
});
