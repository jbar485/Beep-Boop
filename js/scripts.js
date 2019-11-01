var three = "3";
var two = "2";
var one = "1";

var beepBoop = function(value) {
  var resultArray = [];
  if (value < 0 || value > 100) {
    alert("Cmon Dave, enter a different number.")
  }else {
    for (var i = 0; i <= value; i++) {
      if (i.toString().includes(three)) {
        resultArray.push("I'm sorry, Dave. I'm afraid I can't do that.");
      }else if (i.toString().includes(two)) {
        resultArray.push("Boop");
      }else if (i.toString().includes(one)) {
        resultArray.push("Beep");
      }else {
        resultArray.push(i)
      }
    };
  }
  return resultArray.join(", ");
};

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var value = $("input#number-input").val();
    $("#final-answer").text(beepBoop(value));

  });

});
