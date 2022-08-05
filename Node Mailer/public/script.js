var data = document.querySelector("#data");
var email = document.querySelector("#email");
var buttons = document.querySelector("#submits");
buttons.addEventListener("click", (e) => {
  if (email.value == "" || data.value == "") {
    alert("Empty Input Fields");
    e.preventDefault();
    return;
  }
  alert("Mail Sent Succesfull");
});
