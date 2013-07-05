$(function(){
  $(".notable input",this).bind("slider:changed", function (event, data) {
    $(this).next().html(data.value);
  });
});