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

	 

var navigate = (function() {
	$('.dd').toggle();
	$('.dd_btn').click(function() {
		var dataName = $(this).attr('data-name');
		$('.dd').hide();
		$('.' + dataName).toggle();
	});
})();
