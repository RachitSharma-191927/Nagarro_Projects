function ChangeValue(val) {
  input.value = val;
}

var error = document.querySelector("#error");
error.style.display = "none";
var input = document.querySelector("#valueData");
var result = document.querySelector("#result");
result.addEventListener("click", () => {
  if (input.value == "") {
    return;
  }
  try {
    ChangeValue(eval(input.value));
    error.style.display = "none";
  } catch (e) {
    error.style.display = "block";
  }
});

function adds(obj) {
  ChangeValue(input.value + obj.value);
}

function dele() {
  ChangeValue(input.value.slice(0, -1));
}
function ac() {
  ChangeValue("");
}

function pow() {
  ChangeValue(input.value ** 2);
}
