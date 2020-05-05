$(document).ready(function () {
  $(".ham").click(function () {
    $(".menubor").animate({
      height: '500px'
    }, "slow");
  });
  $(".closebor").click(function () {
    $(".menubor").animate({
      height: '0px'
    }, "slow");
  })

  let href = location.href
  if (href.indexOf('home') >= 0) {
    typing()

    $('.bounce').click(function () {
      $('html,body').animate({
        scrollTop: $('.prodlist').offset().top
      }, 200);

    })
  }


  $('.toTop').click(function () {
    $('html,body').animate({
      scrollTop: 0
    }, 200);
  })


  if (!IsPC()) {
    if ($('.viewbor').length) {
      $('.viewbor').click( function(){
        $(this).FlyZommImg();
      })
    }
  }


});

let homeChar = 'Made In San Francisco'
var i = 0

function typing() {
  var divTyping = document.getElementsByClassName('addfont')[0]
  if (i <= homeChar.length) {
    divTyping.innerHTML = homeChar.slice(0, i++) + ""
    setTimeout("typing()", 150)
  } else {
    divTyping.innerHTML = homeChar
  }
}

function IsPC() {
  var userAgentInfo = navigator.userAgent;
  var Agents = ["Android", "iPhone",
    "SymbianOS", "Windows Phone",
    "iPad", "iPod"
  ];
  var flag = true;
  for (var v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false;
      break;
    }
  }
  return flag;
}