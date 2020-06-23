function WorkScheduler() {

    $(document).ready(function () {
      var currentDay = moment().format('MMMM Do YYYY, h:mm:ss a');
      var row;
      var timeCol;
  
      $("#currentDay").text(currentDay);

      var hours = ["9 AM.", "10 AM.", "11 AM.", "12 PM.", "1 PM.", "2 PM.", "3 PM.", "4 PM.",
        "5 PM."];
      
      for (i = 0; i < hours.length; i++) {
        var row = $("<div>").addClass("row");
        var hourCol = $("<textarea>").text(hours[i]).addClass("hour");
        var inputCol = $("<input>").attr("placeholder", "Enter Your Notes here").addClass("inputText time-block");
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