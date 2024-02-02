AOS.init();
AOS.init({ disable: "mobile" });

var btn = $("#button");

window.onscroll = function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
  showPosition();
};
btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});
function showPosition() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById("progress-bar").style.width = scrolled + "%";
}

// Offcanvas
document.addEventListener("DOMContentLoaded", function () {
  var myOffcanvas = document.getElementById("offcanvasExample");
  var bsOffcanvas = new bootstrap.Offcanvas(myOffcanvas);
  document.getElementById("opanMenu").addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    bsOffcanvas.toggle();
  });
});

$("#offcanvasExample a").click(function () {
  $(".offcanvas").offcanvas("hide");
});
