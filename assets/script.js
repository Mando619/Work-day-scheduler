

$(document).ready(function () {



    // set up a function that shows the current time as its still going.
    var timeTracker = function () {
        $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

    }  // the interval tracks time live
    setInterval(timeTracker, 1000);



// used parsInt() to return an integer of NaN, since currentTime is a string 
    // changed var to military time and use parseInt()
    var dayHours = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];
    newClass();
    // function to add classes to the hour. each hour has a different color pending on time. 
    function newClass() {

        for (var i = 0; i < dayHours.length; i++) {
            var newHours = $("#" + dayHours[i]);
            let currentTime = moment().format('H');

            if (parseInt(dayHours[i]) > currentTime) {
                newHours.addClass("future");

            }

            else if (parseInt(dayHours[i]) < currentTime) {
                newHours.addClass("past");
            }

            else if (parseInt(dayHours[i]) == currentTime) {
                newHours.addClass("present");

            }
        }
    }
    // creating function for button to store in local storage
    $(".saveBtn").on("click", function () {
        var hours = $(this).parent().attr("id");
        var textInput = $(this).siblings(".description").val();
        
        localStorage.setItem(textInput, hours)
        
    }); 
    
       // console.log(textInput, hours);            
        // creating a localStorage getItem for all

        // creating a localStorage 
   

        var myLocalStorageArr = [];

        var getHours = $(".hour").val();
        $.each(getHours, function(index, element) {
            myLocalStorageArr.push(element);

        
        
        });
        
        localStorage.getItem('hours', myLocalStorageArr);
                


    

});
