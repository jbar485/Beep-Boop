var start = 0;

var beepBoop = function(value) {
  var resultArray = [];
  for (var i = 0; i <= value; i++) {
    resultArray += i;
    resultArray
  };
  return resultArray;
  console.log(array);
};

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var value = parseInt($("input#number-input").val());
    $("#final-answer").text(beepBoop(value));
    console.log(value);
  });

});
