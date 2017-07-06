$(function(){
  var age = parseInt(prompt("How Old are you?"));

  if (age >=18) {
    $("#locations").show();
  } else {
    $("#under18").show();
  }
});
