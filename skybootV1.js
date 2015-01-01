$(document).ready(function(){
  $('#NAME , #EMAIL').hide();
  $('#NAME').show("slide", {direction:"down"}, 1000, function(){
    $('#EMAIL').show("slide", {direction:"down"}, 500);  
  });
  
});
