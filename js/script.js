$(document).on("click", ".cookies_btn", function () {
  $.ajax({
    url: "cookies.php",

    type: "GET",

    success: function (code_html, statut) {
      $("#banner-cookies").fadeOut(800);
    },
  });
  $("#banner-cookies").fadeOut(800);
});
$(document).on("click", ".close-cookies", function () {
  $("#banner-cookies").fadeOut(800);
});
