// $("#btn").trigger('click');
// document.getElementById("btn").click();

$(document).ready(function() {
  $("#btn").click();
  $(".btn-check").click();
});

$("#btn").click(() => {
  $(".head-span").text("jQuery test clicked!");
  // $("#box").animate({ width: "300px" });
});

// $("#btn").click(() => {
//   $("#box").animate({ width: "300px" });
// });

// $("#btn-r").click(() => {
//   $(".head-span").text("Click for jQuery test");
//   $("#box").animate({ width: "100px" });
// });

$(".btn-check").click(() => {
  console.log(jQuery.now());
  $(".el-3").text(Date($.now()));
});
