$("#btn-change-txt").on("click", () => {
  $(".chng-txt").text("You Changed the Text");
  setTimeout(() => {
    $(".chng-txt").text("Text From HTML");
  }, 2000);
});

$("#btn-toggle").click(() => {
  $(".heading-toggle").toggleClass("style1");
});

$(".my-btn").click(function () {
  let btnTxt = $(this).text();
  $(".my-text").text(btnTxt + " is Clicked");
});

$(".my-text1").mouseover(function () {
  $(this).text("Text Changed due to mouseover");
});
$(".my-text1").mouseout(function () {
  $(this).text("This is Text 1");
});
