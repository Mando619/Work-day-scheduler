

$(document).ready(function () {



    // set up a function that shows the current time as its still going.
    var timeTracker = function () {
        $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

    }  // the interval tracks time live
    setInterval(timeTracker, 1000);




    // creating function for button to store in local storage
    $(".saveBtn").on("click", function () {
        var textInput = $("textArea").val().trim();
      //  var textInput = $(this).siblings(".description").val();
        var hours = $(this).siblings().attr("id");

        localStorage.setItem(textInput, hours);
       // console.log(textInput, hours);
            console.log(textInput, hours);
     // creating a localStorage getItem for all 

    });
      

    var dayHours = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];
    newClass();
    
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
// used parsInt() to return an integer of NaN, since currentTime is a string 
    // change to military time and use parseInt()

                
   // var dayHours = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];
   // addClass();

          //  function addClass() {

  //  for (var i = 1; i < dayHours.length; i++) {
    //    var newHours = $("#" + dayHours[i]);
     //   let currentTime = moment().format('H');
           
      //  if (parseInt(dayHours[i]) > currentTime) {
          //  newHours.attr("style", "background-color: #77dd77");

      //  }

      //  else if (parseInt(dayHours[i]) < currentTime) {
          //  newHours.attr("style", "backgrund-color: #d3d3d3");
     //   }

        //else if (parseInt(dayHours[i]) == currentTime) {
      //      newHours.attr("style", "background-color: #ff6961");  
       //     console.log(newHours) 
       // }
  //  }
        //    }

    // used parsInt() to return an integer of NaN, since currentTime is a string 
    // change to military time and use parseInt()


});
