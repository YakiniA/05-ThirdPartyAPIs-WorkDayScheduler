var schedulerText;
var schedulerIndex;
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

     
      inputCol.addClass("inputVal-"+i);
      var row = $("<div>").addClass("row");
      // var row1 = $("#row");
      var saveBtnVal = "saveBtn-"+i ;
      var saveButton = $("<button>").addClass("saveBtn").text("save");
      saveButton.addClass(saveBtnVal);
      $(row).append(hourCol).append(inputCol).append(saveButton);
      $(".container").append(row);

      }

      var input0 = $(".inputVal-0");
      var input1 = $(".inputVal-1");
      var input2 = $(".inputVal-2");
      var input3 = $(".inputVal-3");
      var input4 = $(".inputVal-4");
      var input5 = $(".inputVal-5");
      var input6 = $(".inputVal-6");
      var input7 = $(".inputVal-7");
      var input8 = $(".inputVal-8");

      $(".saveBtn").on("click",function (event) {
      
        event.preventDefault();
        console.log("Inside Save");
        var val = $(this).siblings("input").val().trim();
        var valIndex = $(this).siblings("textarea").attr("data-value");
      
        console.log("Val" + val);
        console.log("valIndex" + valIndex);
        saveDetails(val, valIndex);
  });
});
}

WorkScheduler();
displayItem();

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
     
  }

   function displayItem() {
        console.log("I am inside dispalyitem");
        var finalSchedulerText = JSON.parse(localStorage.getItem("schedulerText"));
        var finalSchedulerIndex = JSON.parse(localStorage.getItem("schedulerIndex"));
        console.log(finalSchedulerText);
        console.log(finalSchedulerIndex);
        if (finalSchedulerIndex != null) {
          for (var i = 0; i < finalSchedulerIndex.length; i++) {
            debugger
            console.log("FinalSchedulerIndexValue" + finalSchedulerIndex[i]);
            // var booleanResp = $(".inputVal").attr("data-value") === parseInt(finalSchedulerIndex[i]);
            // if(booleanResp){
                // var inputFinal =  $(".inputVal-"+finalSchedulerIndex[i]).val(finalSchedulerText[i]);
                // var inputFinal = finalSchedulerText[i];
                schedulerIndex[i] = finalSchedulerIndex[i];
                schedulerText[i] = finalSchedulerText[i];        }
        }
      }
  


   