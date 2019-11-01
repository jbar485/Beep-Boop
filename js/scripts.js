

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var value = $("input#number-input").val();
  });

});
