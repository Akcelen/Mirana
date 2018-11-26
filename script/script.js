
var uluru = {lat: 48.5264862, lng: 39.1499637};	    
function initMap() {
	var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10, 
      center: uluru
    });
    var marker = new google.maps.Marker({
    	position: uluru,
    	map: map
 	})
 }
 $(document).ready(function(){
 	$('.popup-btn').on('click',function(event) {
 		event.preventDefault();
 		$('.popup').fadeIn();
 	});
 	$('.popup-close').on('click',function(event) {
 		event.preventDefault();
 		$('.popup').fadeOut();
 	});
	$('.recent').slick({
	  	infinite: true,
			slidesToShow: 4,
			slidesToScroll: 1,
			responsive: [
			    {
			      breakpoint: 1024,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 1,
			        infinite: true,
			        prevArrow: '<button class="arrow prev"></button>',
			        nextArrow: '<button class="arrow next"></button>'
			      }
			    },
			    {
			    breakpoint: 640,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1,
			        infinite: true
			    }
			}
		]
	})
});