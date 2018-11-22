var slideIndex = 1;
function slider() {
	if (document.documentElement.clientWidth <= 768 ) {
		showSlides(slideIndex);
	}
}
function pluseSlides(n) {
	showSlides(slideIndex += n);
}

function curentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("Slides");
	var dots = document.getElementsByClassName("dot");

	if ( n > slides.length) {
		slideIndex = 1
	}
	if ( n<1) {
		slideIndex=slides.length
	}
	for (var i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (var i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace("active","");
	}
	slides[slideIndex - 1].style.display = " block";
	dots[slideIndex - 1].className += " active";
}

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