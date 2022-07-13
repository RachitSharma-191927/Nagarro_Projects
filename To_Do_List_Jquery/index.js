$(document).ready(function () {
  $("#addition").click(function () {
    value = $("#data").val();
    if (value == "") {
      $("#texts").show();
      $("#texts").html("Please Enter A Value");
      return true;
    }
    $("#texts").hide();
    $("#data").val("");
    $("#items").append(
      "<div id='delete'>" +
        value +
        " <i class='fa fa-check' aria-hidden='true'></i> " +
        "<i class='fa-solid fa-trash'></i></div>"
    );
  });
});

$(document).ready(function () {
  $("#items").on("click", ".fa-trash", function () {
    $(this).parent("div").fadeOut(200);
  });
  $("#items").on("click", ".fa-check", function () {
    $(this).parent("div").css("text-decoration", "line-through");
  });
});
