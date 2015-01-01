alert('Test');

$(document).ready(function(){
  $('#NAME', '#EMAIL').hide();
  $('#NAME').show("slide", {direction:"down"}, 1000);
  $('#EMAIL').show("slide", {direction:"down"}, 1000);
  
});
