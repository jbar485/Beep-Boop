var three = ("3");
var two = ("2");
var one = ("1");

var beepBoop = function(value) {
  var resultArray = [];
  if (value < 0 || value > 100) {
    alert("Cmon Dave, enter a different number.")
  }else {
    for (var i = 0; i <= value; i++) {
      if (three.includes(i) === true) {
        a = ("I'm sorry, Dave. I'm afraid I can't do that. ");
        resultArray += a;
      }else if (two.includes(i) === true) {
        a = ("Boop ");
        resultArray += a;
      }else if (one.includes(i) === true) {
        a = ("Beep ");
        resultArray += a;
        console.log(i);
      }else {
        resultArray += i;
      }
    };
    console.log(resultArray);
  }
  return resultArray;
};

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var value = $("input#number-input").val();
    $("#final-answer").text(beepBoop(value));

  });

});
