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
  	function test(){
  		console.log('++');
  	}
  	/*$('.slider').fractionSlider({
  		'fullWidth': true,
  		'responsive': true,
  		//'autoChange': false,
  		'transitionIn': 'fade',
  		'transitionOut': 'fade',
  		'dimensions': 			"1680,427",
  		//'delay' : 0
  		'speedOut' : 0
  	});*/
  	$('.slider_content').fractionSlider({
  		'autoChange': false,
  		'fullWidth': true,
  		'responsive': true,
  		'dimensions': '1170,427',
  		'startCallback': function(el, currentSlide, lastSlide, step ){
  			console.log('++');
  			//$('.slider').fractionSlider('startNextSlide');
  			// your custom code
			  /* paramters:
			  el = the slider element
			  currentSlide = the current slide (in case of nextSlideCallback etc. its the new slide)
			  lastSlide = the last/previouse slide
			  step = the current step
			  */
			  	
  		},
  		/*'prevSlideCallback': function(el, currentSlide, lastSlide, step ){
  			console.log('--');
  			$('.slider').fractionSlider('startPrevSlide');		
  		},*/
  		'controls' : true,
			'pager' : true,
			//'pauseOnHover' : true
			//'delay' : 0
			'speedOut' : 0,
			'speedIn': 1300,
			//'slideTransitionSpeed': 0
  	});
  	function parallax(){
  		console.log('-');
  		$('.slider_bac').each(function(){
  			$(this).removeClass('mousemove');
  		});
  		setTimeout(function() {
  			$('.slider_bac').each(function(){
  				$(this).addClass('mousemove');
  			});	
	  		$('.slider_content').mousemove(function(e){

						/* Work out mouse position */
						var offset = $(this).offset();
						var xPos = e.pageX - offset.left;
						var yPos = e.pageY - offset.top;

						/* Get percentage positions */
						var mouseXPercent = Math.round(xPos / $(this).width() * 100);
						var mouseYPercent = Math.round(yPos / $(this).height() * 100);

						/* Position Each Layer */
						$(this).find('.mousemove').each(
							function(){
								var diffX = $('.slider_content').width() - $(this).width();
								var diffY = $('.slider_content').height() - $(this).height();

								var myX = diffX * (mouseXPercent / 100); //) / 100) / 2;

								var myY = diffY * (mouseYPercent / 100);

								var cssObj = {
									'left': myX + 'px',
									'top': myY + 'px'
								}
								//$(this).css(cssObj);
								$(this).animate({left: myX, top: myY},{duration: 50, queue: false, easing: 'linear'});
							}
						);
						
				});
			}, 3000)
  	}
  	parallax();
		$('.next').click(function(){
			parallax();
		});
		$('.prev').click(function(){
			parallax();
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