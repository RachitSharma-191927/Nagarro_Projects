function myFunction() {
  var text1 = document.getElementById("inputtext");
  text1.select();
  text1.focus();
  navigator.clipboard.writeText(text1.value);
}

$(document).ready(function () {
  $("#btn").click(function () {
    $("#inputtext").select();
    document.execCommand("copy");
  });
});
