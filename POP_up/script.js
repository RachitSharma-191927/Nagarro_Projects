var btn = document.querySelector("#pop");

btn.addEventListener("click", function () {
  var data = document.querySelector("#data");
  if (data.style.display == "none") {
    data.style.display = "block";
  } else {
    data.style.display = "none";
  }
});

var cross = document.querySelector("#cross");

cross.addEventListener("click", function () {
  var data = document.querySelector("#data");
  data.style.display = "none";
});

var submit = document.querySelector("#submit");

submit.addEventListener("click", (event) => {
  var user = user_verification();
  var email = email_verification();
  if (user && email) {
    return true;
  }
  event.preventDefault();
  return false;
});

var username = document.querySelector("#username");
username.addEventListener("input", () => {
  user_verification();
});

var email = document.querySelector("#Email");
email.addEventListener("input", () => {
  email_verification();
});

function user_verification() {
  var username = document.querySelector("#username");
  if (username.value.length < 3) {
    document.querySelector("#user_invalid").innerHTML =
      "Input is Less Than 3 Characters";
    document.querySelector("#user_invalid").style.display = "Block";
    return false;
  }
  document.querySelector("#user_invalid").style.display = "none";
  return true;
}

function email_verification() {
  var reg = new RegExp("^([-.0-9a-zA-Z]+)@([-.0-9a-zA-Z]+).([a-zA-Z]){2,7}$");
  var email = document.querySelector("#Email").value;
  if (email.length == "") {
    document.querySelector("#email_invalid").innerHTML = "Please Enter Email";
    document.querySelector("#email_invalid").style.display = "Block";
    return false;
  }
  if (!reg.test(email)) {
    document.querySelector("#email_invalid").innerHTML = "Email is Invalid";
    document.querySelector("#email_invalid").style.display = "Block";
    return false;
  }
  document.querySelector("#email_invalid").style.display = "none";
  return true;
}
