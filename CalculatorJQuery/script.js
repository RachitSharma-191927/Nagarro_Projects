$(document).ready(function () {
  $("#error").hide();
  $("#result").click(function () {
    var val = $("#valueData").val();
    if (val == "") {
      $("#error").hide();
      return;
    }
    try {
      $("#error").hide();
      var value = eval($("#valueData").val());
      $("#valueData").val(value);
    } catch (e) {
      $("#error").show();
    }
  });
  $(".da").click(function () {
    var val = $("#valueData").val();
    var value = $(this).val();
    var res = val + value;
    $("#valueData").val(res);
  });
  $("#ac").click(function () {
    $("#valueData").val("");
  });

  $("#del").click(function () {
    if ($("#valueData").val() == "") {
      return;
    }
    var val = $("#valueData").val().slice(0, -1);
    $("#valueData").val(val);
  });
  $("#power").click(function () {
    if ($("#valueData").val() == "") {
      return;
    }
    var val = $("#valueData").val() ** 2;
    $("#valueData").val(val);
  });
});
