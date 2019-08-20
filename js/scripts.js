$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    var number1= parseInt($("#number1").val());
    var number2= parseInt($("#number2").val());
    var findFinal = number2/number1;
    for (var index = 0; index<= number2; index += findFinal) {
    console.log(index);
  }

    // var Condition =     /number
    // findCondition = number/
  });
  });






    // for (var index = 0; index <= 30; index +=5) {
    //   console.log(index);
    //
