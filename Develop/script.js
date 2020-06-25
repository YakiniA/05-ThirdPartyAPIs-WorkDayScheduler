function WorkScheduler() {

    $(document).ready(function () {
      var currentDay = moment().format('MMMM Do YYYY, h:mm:ss a');
      var row;
      var timeCol;
  
     //  Setting Todays date
      $("#currentDay").text(currentDay);

      var hours = ["9 AM.", "10 AM.", "11 AM.", "12 PM.", "1 PM.", "2 PM.", "3 PM.", "4 PM.",
        "5 PM."];
      var k=9;

     //  Loop through the hours to set the parameters
      for (i = 0; i < hours.length; i++) {
      
        var hourCol = $("<textarea>").text(hours[i]).attr("data-value" , i).addClass("hour");
        var inputCol = $("<input>").attr("placeholder", "Enter Your Notes here").attr("data-value" , i).addClass("time-block");
   
        var hour = moment().hour();;

     //    Setting past, present, future for the input tag
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
      var saveBtnVal = "saveBtn-"+i ;
      var saveButton = $("<button>").addClass("btn btn-primary saveBtn").text("save");
      saveButton.addClass(saveBtnVal);
      $(row).append(hourCol).append(inputCol).append(saveButton);
      $(".container").append(row);
      }

     //  On Clicking "Save Button" this function is called
       $(".saveBtn").on("click",function (event) {
      
        event.preventDefault();
        console.log("Inside Save");
        var val = $(this).siblings("input").val().trim();
        var valIndex = parseInt($(this).siblings("textarea").attr("data-value"));

        if(valIndex===0){
                var input0 =val;
                localStorage.setItem("Text0",input0);
           } else if(valIndex===1){
                var input1=val;
                localStorage.setItem("Text1",input1);
           } else if(valIndex===2){
                var input2=val;
                localStorage.setItem("Text2",input2);
           } else if(valIndex===3){
                var input3=val;
                localStorage.setItem("Text3",input3);
           }else if(valIndex===4){
                var input4=val;
                localStorage.setItem("Text4",input4);
           }else if(valIndex===5){
                var input5=val;
                localStorage.setItem("Text5",input5);
           }else if(valIndex===6){
                var input6=val;
                localStorage.setItem("Text6",input6);
           }else if(valIndex===7){
                var input7=val;
                localStorage.setItem("Text7",input7);
           }else if(valIndex===8){
                var input8=val;
                localStorage.setItem("Text8",input8);
           }
          
  });

  var value0 = localStorage.getItem("Text0");
  $(".inputVal-0").val(value0);

  var value1 = localStorage.getItem("Text1");
  $(".inputVal-1").val(value1);

  var value2 = localStorage.getItem("Text2");
  $(".inputVal-2").val(value2);

  var value3 = localStorage.getItem("Text3");
  $(".inputVal-3").val(value3);

  var value4= localStorage.getItem("Text4");
  $(".inputVal-4").val(value4);

  var value5 = localStorage.getItem("Text5");
  $(".inputVal-5").val(value5);

  var value6 = localStorage.getItem("Text6");
  $(".inputVal-6").val(value6);

  var value7 = localStorage.getItem("Text7");
  $(".inputVal-7").val(value7);

  var value8 = localStorage.getItem("Text8");
  $(".inputVal-8").val(value8);

});
}
        
WorkScheduler();


      
  


   