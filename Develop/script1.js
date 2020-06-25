var schedulerText;
      var schedulerIndex;
      var val = "";
      var valIndex = "";
      var  inputCol ="";
      var input0;
      var input1;
      var input2;
      var input3;
      var input4;
      var input5;
      var input6;
      var input7;
      var input8;

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
        inputCol = $("<input>").attr("placeholder", "Enter Your Notes here").attr("data-value" , i).addClass("time-block");
   
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
        val = $(this).siblings("input").val().trim();
        valIndex = parseInt($(this).siblings("textarea").attr("data-value"));
       
        
        console.log("Val" + val);
        console.log("valIndex" + valIndex);
        saveDetails(val, valIndex);
  });
});
}


function saveDetails(text, index) {

      if(index===0){
      {
      var input0 =text;
      localStorage.setItem("Text0",(input0));
      }
     
    }
      else if(index===1){
     {
      var input1=text;
      localStorage.setItem("Text1",(input1));

      }
    
    }
  
    var value0 = localStorage.getItem("Text0");
     input0 = $(".inputVal-0");
    input0.val(value0);

    var value1 = localStorage.getItem("Text1");
     input1 = $(".inputVal-1");
    input1.val(value1);

        console.log("I am inside dispalyitem");
        
              }

        
WorkScheduler();

saveDetails(val, valIndex);
      
  


   