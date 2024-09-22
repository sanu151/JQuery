$("#btn1").click(() => {
  $("#para1").fadeOut(2000);
});

$("#btn2").click(() => {
  $("#para2").fadeIn(2000);
});

$("#btn3").click(() => {
  $("#para3").fadeToggle(2000);
});

$("#btn4").click(() => {
  $("#para4").fadeTo(2000, 0.4);
});
