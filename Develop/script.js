function WorkScheduler() {

    $(document).ready(function () {
      var currentDay = moment().format('MMMM Do YYYY, h:mm:ss a');
      var row;
      var timeCol;
  
      $("#currentDay").text(currentDay);

      var hours = ["9 AM.", "10 AM.", "11 AM.", "12 PM.", "1 PM.", "2 PM.", "3 PM.", "4 PM.",
        "5 PM."];
      var k=9;
      for (i = 0; i < hours.length; i++) {
      
        var hourCol = $("<textarea>").text(hours[i]).attr("data-value" , i).addClass("hour");
        var inputCol = $("<input>").attr("placeholder", "Enter Your Notes here").attr("data-value" , i).addClass("time-block");
   
        var hour = moment().hour();;
        console.log(hour);

        if(k!=null && k<18){
        if (k > hour) {
          inputCol.addClass("future");
        } else if (k < hour) {
          inputCol.addClass("past");
        } else {
          inputCol.addClass("present");
        }
        k++;

      }
            
      var row = $("<div>").addClass("row");
      // var row1 = $("#row");
      var saveBtn = $("<button>").addClass("btn btn-primary saveBtn").text("save");
      $(row).append(hourCol).append(inputCol).append(saveBtn);
      $(".container").append(row);

      }
    });
}

WorkScheduler();
     

// $(".saveBtn").on("click", function (event) {
//   event.preventDefault();
//   var toDoInput1 = $(this).val().trim();
//   localStorage.setItem("toDo1", (toDoInput1));
// });

$(".saveBtn").on("click", function (event) {
      var val = $(this).siblings(".inputText").val();
      var valIndex = $(this).siblings("label").attr("data-value");
      console.log("Val" + val);
      console.log("valIndex" + valIndex);
      saveDetails(val, valIndex);
})

function saveDetails(text, index) {

      if (localStorage.getItem("schedulerText") && localStorage.getItem("schedulerIndex")) {
        schedulerText = JSON.parse(localStorage.getItem("schedulerText"));
        schedulerIndex = JSON.parse(localStorage.getItem("schedulerIndex"));
      } else {
        schedulerText = [];
        schedulerIndex = [];
      }

      schedulerText.push(text);
      schedulerIndex.push(index);

      localStorage.setItem("schedulerText", JSON.stringify(schedulerText));
      localStorage.setItem("schedulerIndex", JSON.stringify(schedulerIndex));
      displayItem();
      }