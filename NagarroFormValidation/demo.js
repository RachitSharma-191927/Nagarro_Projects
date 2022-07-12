$(document).ready(function () {
  $("#usernamevalidation").hide();
  $("#passwordvalidation").hide();
  $("#confirmpasswordvalidation").hide();
  $("#emailvalidation").hide();

  var user_Error = true;
  var password_error = true;
  var confirm_password_error = true;
  var email_validation_error = true;

  function username_validation() {
    var username_val = $("#username").val();
    if (username_val.length == "") {
      $("#usernamevalidation").html("Username Can be empty");
      $("#usernamevalidation").show();
      $("#usernamevalidation").css("color", "red");
      user_Error = false;
      return false;
    } else {
      $("#usernamevalidation").hide();
    }

    if (username_val.length < 3 || username_val.length > 10) {
      $("#usernamevalidation").show();
      $("#usernamevalidation").html("Username should be between 3 to 10");
      $("#usernamevalidation").css("color", "red");
      user_Error = false;
      return false;
    } else {
      $("#usernamevalidation").hide();
    }
  }

  function password_validation() {
    var password_val = $("#password").val();
    if (password_val.length == "") {
      $("#passwordvalidation").show();
      $("#passwordvalidation").html("Password Can be Empty");
      $("#passwordvalidation").css("color", "red");
      password_error = false;
      return false;
    } else {
      $("#passwordvalidation").hide();
    }

    if (password_val.length <= 8) {
      $("#passwordvalidation").show();
      $("#passwordvalidation").html("Password is less than 8 characters");
      $("#passwordvalidation").css("color", "red");
      password_error = false;
      return false;
    } else {
      $("#passwordvalidation").hide();
    }
  }

  function email_validation() {
    var reg = new RegExp("^([-.0-9a-zA-Z]+)@([-.0-9a-zA-Z]+).([a-zA-Z]){2,7}$");
    var email_value = $("#email").val();
    if (email_value == "") {
      $("#emailvalidation").show();
      $("#emailvalidation").html("You have to enter your email");
      email_validation_error = false;
      return false;
    }
    if (!reg.test(email_value)) {
      $("#emailvalidation").show();
      $("#emailvalidation").html("Email is not Correct");
      $("#emailvalidation").css("color", "red");
      email_validation_error = false;
      return false;
    } else {
      $("#emailvalidation").hide();
      email_validation_error = true;
      return true;
    }
  }

  function confirm_validation() {
    var confirm_password_val = $("#confirmpassword").val();
    var password_val = $("#password").val();
    if (password_val != confirm_password_val) {
      $("#confirmpasswordvalidation").show();
      $("#confirmpasswordvalidation").html("Password Did not Match");
      $("#confirmpasswordvalidation").css("color", "red");
      confirm_password_error = false;
      return false;
    } else {
      $("#confirmpasswordvalidation").hide();
    }
  }

  $("#username").keyup(function () {
    username_validation();
  });

  $("#password").keyup(function () {
    password_validation();
  });

  $("#confirmpassword").keyup(function () {
    confirm_validation();
  });

  $("#email").keyup(function () {
    email_validation();
  });

  $("#submitvalidation").click(function () {
    username_validation();
    password_validation();
    confirm_validation();
    email_validation();

    if (
      user_Error == true &&
      password_error == true &&
      confirm_password_error == true &&
      email_validation_error == true
    ) {
      return true;
    } else {
      return false;
    }
  });
});
