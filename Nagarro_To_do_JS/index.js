var btn = document.querySelector("#text-button");
btn.addEventListener("click", () => {
  var div = document.createElement("div");
  var values = document.querySelector("#text-input").value;
  if (values == "") {
    document.querySelector(".error").style.display = "block";
    // return true;
  } else {
    document.querySelector("#text-input").value = "";
    document.querySelector(".error").style.display = "none";
    div.innerHTML = `${values} <i class="fa-solid fa-trash" onclick="removeEle(this)"></i><i class="fa-solid fa-check" onclick="checkEle(this)"></i>`;
    div.classList.add("element");
    document.querySelector(".Todo").append(div);
  }
});

// var deletes = document.querySelector(".fa-trash");
// deletes.addEventListener("click", () => {
//   this.parent.remove();
// });
function removeEle(a) {
  a.parentElement.remove();
}

function checkEle(a) {
  a.parentElement.style.textDecoration = "line-through";
}
