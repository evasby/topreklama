$(document).ready(function(){
	console.log('+');


	var mobile;
  if ($(window).width() < 768){
    mobile = true;
  } else {
    mobile = false;
  }
  $(window).resize(function() {
    if ($(window).width() < 768){
      mobile = true;
    }else{
      mobile = false;
    }
  });


  if (!mobile) {

  	$('.example-animation').DrSlider({
  		//width: 1680,
      //height: 427,
      //userCSS: true
      progressColor: '#AB63C9',
      transition: 'fade',
      showNavigation: false,
      onReady: function(){
      	console.log('go');
      }
  	});

		$('.clients_item').each(function(){
			$(this).hover(
				function(){
					$(this).find('.clients_card').addClass('flip');
				}, function(){
					$(this).find('.clients_card').removeClass('flip');
				}
			);
		});
		if ($('#map').length > 0) {
			var map;
	    var myLatlng = new google.maps.LatLng(53.919398, 27.500385);
	    var myCenter = new google.maps.LatLng(53.919898, 27.496385);
	    function initialize() {
	      var styles = [
	        {
	          stylers: [
	            { hue: "#9530C0" },
	            { saturation: 60 }
	          ]
	        },{
	          featureType: "road",
	          elementType: "geometry",
	          stylers: [
	            { lightness: 100 },
	            { visibility: "simplified" }
	          ]
	        },{
	          featureType: "road",
	          elementType: "labels",
	          stylers: [
	            { visibility: "on" }
	          ]
	        }
	      ];
	      var styledMap = new google.maps.StyledMapType(styles,
	      {name: "Стиль сайта"});
	      var mapOptions = {
	        zoom: 17,
	        center: myCenter,
	        mapTypeControlOptions: {
	          mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
	        }
	      };
	      map = new google.maps.Map(document.getElementById('map'),
	          mapOptions);
	      var marker = new google.maps.Marker({
	          position: myLatlng,
	          //title:"Webformat"
	          //icon: '../images/footer-marker.png'
	      });
	      marker.setMap(map);
	      /*var contentString = '<section class="location"><h1>ООО “КАМФРИ”</h1><p>+375 (29) <b>574 93 20</b>; +375 (29) <b>574 93 20</b></p><p>г. Минск, ул. Байкальская, 58/1</p></section>';
	      var infowindow = new google.maps.InfoWindow({
	          content: contentString
	      });*/
	      //infowindow.open(map,marker);
	      map.mapTypes.set('map_style', styledMap);
	      map.setMapTypeId('map_style');
	    }
	    google.maps.event.addDomListener(window, 'load', initialize);
	    /************************************************************************/
		};

	}
});