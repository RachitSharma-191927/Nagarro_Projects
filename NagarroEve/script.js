$(document).ready(function () {
  $("#blue").click(function () {
    $(".data").css("backgroundColor", "blue");
    $("#textData").css("color", "white");
    $("#textData").css("backgroundColor", "blue");
    $("#textData").css("borderColor", "black");
  });
  $("#black").click(function () {
    $(".data").css("backgroundColor", "black");
    $("#textData").css("color", "white");
    $("#textData").css("backgroundColor", "black");
    $("#textData").css("borderColor", "white");
  });
  $("#yellow").click(function () {
    $(".data").css("backgroundColor", "yellow");
    $("#textData").css("color", "black");
    $("#textData").css("backgroundColor", "yellow");
    $("#textData").css("borderColor", "black");
  });
  $("#green").click(function () {
    $(".data").css("backgroundColor", "green");
    $("#textData").css("color", "white");
    $("#textData").css("backgroundColor", "green");
    $("#textData").css("borderColor", "white");
  });
});
