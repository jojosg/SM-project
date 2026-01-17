// .all-menu 를 클릭했을 때
// #nav-all 에게 .active 클래스를 추가한다.
$(".all-menu").click(function () {
  $("#nav-all").addClass("active");
});

// #nav-all .close 를 클릭했을 때
// #nav-all 에게 .active 클래스를 제거한다.
$("#nav-all .close").click(function () {
  $("#nav-all").removeClass("active");
});

$("#gnb").mouseenter(function () {
  $("#header").addClass("active");
});

$("#gnb").mouseleave(function () {
  $("#header").removeClass("active");
});

// 토글 기능 추가
$(".lang__btn").click(function () {
  $(".lang").toggleClass("active");
});

// lang__lst의 li를 클릭하면 닫기
$(".lang__lst li").click(function () {
  $(".lang").removeClass("active");
});

// 다른 곳 클릭시 lang 메뉴 닫기 (선택사항)
$(document).click(function (e) {
  if (!$(e.target).closest(".lang").length) {
    $(".lang").removeClass("active");
  }
});

window.addEventListener("scroll", function () {
  const header = document.getElementById("header");
  if (window.scrollY > 10) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
