/** NOTE: uses jQuery for quick & easy DOM manipulation **/

function getLocation(){
  var msg;

	/**
 first, test for feature support
 **/
 if('geolocation' in navigator){
	 // geolocation is supported :)
	 requestLocation();
 }else{
	 // no geolocation :(
	 msg = "Sorry, looks like your browser doesn't support geolocation";
	 outputResult(msg); // output error message
	 $('.pure-button').removeClass('pure-button-primary').addClass('pure-button-success'); // change button style
 }

 /***
 requestLocation() returns a message, either the users coordinates, or an error message
 **/
 function requestLocation(){
	 /**
	 getCurrentPosition() below accepts 3 arguments:
	 a success callback (required), an error callback  (optional), and a set of options (optional)
	 **/

	 var options = {
	 // enableHighAccuracy = should the device take extra time or power to return a really accurate result, or should it give you the quick (but less accurate) answer?
	 enableHighAccuracy: false,
	 // timeout = how long does the device have, in milliseconds to return a result?
	 timeout: 5000,
	 // maximumAge = maximum age for a possible previously-cached position. 0 = must return the current position, not a prior cached position
	 maximumAge: 0
 };

 

var navigate = (function() {
	$('.dd').toggle();
	$('.dd_btn').click(function() {
		var dataName = $(this).attr('data-name');
		$('.dd').hide();
		$('.' + dataName).toggle();
	});
})();
