$(".js-headerMenuBtn").on("click", function () {
  $(".js-headerMenuBlock").show();
  if ($(this).hasClass("js-active")) {
    $(this).removeClass("js-active");
    $(".js-headerMenuBlock").removeClass("js-active");
    $("body").css("overflow", "auto");
  } else {
    $(this).addClass("js-active");
    $(".js-headerMenuBlock").addClass("js-active");
    $("body").css("overflow", "visible");
  }
  return !1;
});
$(function () {
  $(".js-headerMenuBtn").on("click", function () {
    if ($(this).hasClass("is--open")) {
      $(this).removeClass("is--open");
      return !1;
    } else {
      $(this).addClass("is--open");
      return !1;
    }
  });
});
document.getElementById("black-bg").style.display = "none";
$(function () {
  $(".js-headerMenuBtn").on("click", function () {
    const drawbg = document.getElementById("black-bg");
    if (drawbg.style.display == "block") {
      drawbg.style.display = "none";
    } else {
      drawbg.style.display = "block";
    }
  });
});
$(function () {
  var state = !1;
  var pos;
  $(".js-headerMenuBtn").click(function () {
    if (state == !1) {
      pos = $(window).scrollTop();
      $("body").addClass("fixed").css({
        top: -pos,
      });
      state = !0;
    } else {
      $("body").removeClass("fixed").css({
        top: 0,
      });
      window.scrollTo(0, pos);
      state = !1;
    }
  });
});
