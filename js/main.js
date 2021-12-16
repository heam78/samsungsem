/* main.js */
$(document).ready(function () {
  $("#header").load("header.html");
  $("#footer").load("footer.html");

  
  //주메뉴
  $(document).on("mouseover foucs", ".gnb > ul > li > a", function () {

    $(".gnb > ul > li").removeClass("on");
    $(this).parent().addClass("on");

    var ht = $(this).next().heigt();
    console.log(ht);

    //header_wrap 내려오기
    $(".header_wrap")
      .stop()
      .animate({ heigt: 70 + ht }, 500, "linear");
    //하위ul보이기
  });
  $(document).on("mouseleave blur", "nav.gnb", function () {
    $(".header_wrap").stop().animate({ heigt: "70px" }, 300, "linear");
    $(".gnb > ul > li").removeClass("on");
  });

  //검색박스
  $(document).on("click", "div.btn_srch", function () {
    $("div.srch_wrap").css("display", "block");
  });
  $(document).on("click", ".btn_srch_close", function () {
    $("div.srch_wrap").css("display", "none");
    //$("div.srch_wrap").css("display", "block");
  });

  //오토배너
  var $bnnNum = 0;
  var $lastNum = $(".slide_wrap>li").size() - 1;
  //console.log(lastNum)

  //naxt버튼
  $(document).on("click", "a.btn_next", function (e) {
    e.preventDefault();
    $bnnNum++;
    if ($bnnNum > $lastNum) {
      $bnnNum = 0;
    }

    $("li.slide").removeClass("active");
    $("li.slide").eq($bnnNum).addClass("active");

    $("div.slide_roll > ul > li").removeClass("on");
    $("div.slide_roll > ul > li").eq($bnnNum).addClass("on");
  });
  //prev버튼
  $(document).on("click", "a.btn_prev", function (e) {
    e.preventDefault();
    $bnnNum--;
    if ($bnnNum > $lastNum) {
      $bnnNum = 0;
    }

    $("li.slide").removeClass("active");
    $("li.slide").eq($bnnNum).addClass("active");

    $("div.slide_roll > ul > li").removeClass("on");
    $("div.slide_roll > ul > li").eq($bnnNum).addClass("on");
  });
  function autoBanner() {
    $bnnNum++;
    if ($bnnNum > $lastNum) {
      $bnnNum = 0;
    }

    $("li.slide").removeClass("active");
    $("li.slide").eq($bnnNum).addClass("active");

    $("div.slide_roll > ul > li").removeClass("on");
    $("div.slide_roll > ul > li").eq($bnnNum).addClass("on");
  }
  var $autoBnn = setInterval(autoBanner, 5000); //5초마다 실행해라

  //정지 재생 버튼
  var flag = true;
  $(document).on("click", "a.btn_play", function (e) {
    e.preventDefault();
    if (flag) {
      //배너정지 flag그가 true
      clearInterval($autoBnn);
      $(this).addClass("on");
      flag = false;
    } else {
      //오토배너 재생
      $autoBnn = setInterval(autoBanner, 5000);
      $(this).removeClass("on");
      flag = true;
    }
  });
  //롤링버튼 클릭
  $(document).on("click", ".slide_roll", function (e) {
    e.preventDefault();
    var $rollNum = $(this).parent().index();
    console.log($rollNum);

    $("li.slide").removeClass("active");
    $("li.slide").eq($rollNum).addClass("active");

    $("div.slide_roll > ul > li").removeClass("on");
    $("div.slide_roll > ul > li").eq($rollNum).addClass("on");
  });

  //퀵메뉴
  $(document).on("click", ".btn_top", function () {
    $("html,body").stop().animate({ scrollTop: 0 }, 1400, "swing");
  });
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 0 && scroll < 70) {
      $(".btn_top").fadeOut();
    } else if (scroll >= 70) {
      $(".btn_top").fadeIn();
    }
  });
});
