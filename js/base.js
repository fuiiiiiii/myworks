$(document).ready(function(){
  $(".ham").click(function(){
    $(".menubor").animate({height:'400px'},"slow");
  });
  $(".closebor").click(function(){
    $(".menubor").animate({height:'0px'},"slow");
  })
});