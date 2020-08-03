$(document).ready(function() {


//$("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));


var timeTracker = function() {
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

}
setInterval(timeTracker, 1000);





//function timeTracker() {
   // var currentHour = moment().hour();
//}

























});