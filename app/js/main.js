$(document).ready(function(){
	$(".up").click(function() {
    $("html, body").animate({ scrollTop: 0 }, 200);
    return false;
  });
  if($("#up").length>0){
    var waypoint_main1_1 = new Waypoint({
      //element: $('#main'),
      element: document.getElementById('up'),
      handler: function(dir) {
        if (dir === 'down') {
          $('.up').addClass('up__on');
        } else{
          $('.up').removeClass('up__on');
        }
      },
      offset: 0
    })
	}

	var mobile;
	var mobile2;
  if ($(window).width() < 768){
    mobile = true;
  } else {
    mobile = false;
  }
  if ($(window).width() < 768){
    mobile2 = true;
  } else {
    mobile2 = false;
  }
  $(window).resize(function() {
    if ($(window).width() < 768){
      mobile = true;
    }else{
      mobile = false;
    }
    if ($(window).width() < 1024){
      mobile2 = true;
    }else{
      mobile2 = false;
    }
    //resizeColorBox();
  });

	$('.levelslider_pager').bxSlider({
		slideWidth: 244,
    minSlides: 3,
    maxSlides: 3,
    slideMargin: 24,
    pager: false,
    infiniteLoop: false,
    hideControlOnEnd: true,
    onSliderLoad: function(){
  		$('.levelslider_list').bxSlider({
  			pagerCustom: '.levelslider_pager',
  			controls: false,
			});
  	}
	});

  
	$('a.levelslider_link').colorbox({
		rel:'gal',
		maxWidth:'95%',
		maxHeight:'95%'
	});
	var resizeTimer;
	function resizeColorBox()
	{
    if (resizeTimer) clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      if ($('#cboxOverlay').is(':visible')) {
         $('a.levelslider_link').colorbox.resize({width:"95%"});
      }
    }, 300)
	}
	window.addEventListener("orientationchange", resizeColorBox, false);
	if (!mobile2) {
		$('.slider_content').fractionSlider({
  		'autoChange': true,
  		'timeout': 7000,
  		//'pauseOnHover': true,
  		'fullWidth': true,
  		'responsive': true,
  		'dimensions': '1170,427',
  		'startCallback': function(el, currentSlide, lastSlide, step ){
  		},
  		'controls': true,
			'pager': true,
			'speedOut': 0,
			'speedIn': 1300
  	});
  	var parallaxTimer;
  	function parallax(){
  		console.log('-');
  		$('.slider_bac').each(function(){
  			$(this).removeClass('mousemove');
  		});
  		if (parallaxTimer) clearTimeout(parallaxTimer);
  		parallaxTimer = setTimeout(function() {
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
		$('.fs-pager-wrapper a').click(function(){
			parallax();
		});
	}
  if (!mobile) {
  	$('.block-video_body').click(function(){
  		if (!$(this).find('.block-video_img').hasClass('block-video_img__off')) {
  			$(this).find('.block-video_img').addClass('block-video_img__off');
  			$(this).find('.block-video_iframe').removeClass('block-video_iframe__off');
  			$('#video')[0].src += "&autoplay=1";
  		};
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
		/************************************************************************/
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
	      map.mapTypes.set('map_style', styledMap);
	      map.setMapTypeId('map_style');
	    }
	    google.maps.event.addDomListener(window, 'load', initialize);   
		};
		/************************************************************************/

	} else{
		$('.menu-top_mobile').click(function(){
			if ($('.menu-top').hasClass('menu-top__on')) {
        $('.menu-top').removeClass('menu-top__on');
      } else{
        $('.menu-top').addClass('menu-top__on');
        $('.menu-left').removeClass('menu-left__on');
      }
		});
		$('.menu-left_mobile').click(function(){
			if ($('.menu-left').hasClass('menu-left__on')) {
        $('.menu-left').removeClass('menu-left__on');
      } else{
        $('.menu-left').addClass('menu-left__on');
        $('.menu-top').removeClass('menu-top__on');
      }
		});
	}
});