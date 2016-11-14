;(function(window, $) {


	var geo_code_app = {

	  	map_container : "#map-canvas",

	  	map_options : {
			zoom: 2,
			center: null
		},

	  	load_map : function(callback){

			google.maps.event.addDomListener(window, 'load', function(){
				
				geo_code_app.map_options.center = new google.maps.LatLng(0,0);

				geo_code_app.map = new google.maps.Map($(geo_code_app.map_container)[0], geo_code_app.map_options);

				if(typeof callback === 'function'){
					callback();
				}

			});

	  	},

	  	display_rsvp : function(rsvp){

	  		var self = geo_code_app;

	  		var map = self.map;

			var contentString = '<div id="content">';
			contentString += '<h3>' + rsvp.group.group_name + '</h3>';
			contentString += '<div id="bodyContent">';
			contentString += '<p>';			
			contentString += rsvp.member.member_name;
			contentString += ' will be attending on ';
			contentString += (rsvp.event.time ? new Date(rsvp.event.time).toDateString() : '');

			if(rsvp.venue){
				contentString += ' in ';
				contentString += rsvp.venue.venue_name;
			}

			contentString += '</p>';
			contentString += '</div>';
			contentString += '</div>';

			if(rsvp.venue && (rsvp.venue.lat && rsvp.venue.lon)){

				var marker = new google.maps.Marker({
					position: new google.maps.LatLng(rsvp.venue.lat,rsvp.venue.lon),
					map: map,
					title: ''
				});

				var infowindow = new google.maps.InfoWindow({
					content: contentString,
					maxWidth: 200
				});		

				infowindow.open(map,marker);

				infowindow.event_id = ("event_" + rsvp.event.event_id);//SET AN ATTRIBUTE TO ACCESS LATER TO REMOVE IT FROM MEMORY

				window[infowindow.event_id] = window.setTimeout(function () {//USED A POINTER TO CLEAR IT TO PREVENT MEMORY LEAKS...
					window.clearTimeout(infowindow.event_id);
					infowindow.close(map,marker);
					infowindow.setMap(null);
					marker.setVisible(false);
					marker.setMap(null);
				}, 1000);						

			}
	  	},

		init	: 	function(){


			geo_code_app.load_map(function(){
				var must = window.must;

				must.Stream({
					callback : geo_code_app.display_rsvp
				})

			})



		}


	}

	geo_code_app.init();

	window.geo_code_app = geo_code_app;//Making app global...


}(this, jQuery));


