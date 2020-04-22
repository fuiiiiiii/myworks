$(document).ready(function(){
  $(".ham").click(function(){
    $(".menubor").animate({height:'500px'},"slow");
  });
  $(".closebor").click(function(){
    $(".menubor").animate({height:'0px'},"slow");
  })
});