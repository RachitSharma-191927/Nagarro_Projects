var weight = document.querySelector("#convert");
weight.addEventListener("click", () => {
  var res = document.querySelector("#weight").value;
  document.querySelector("#kgWeight").innerHTML = `${res / 1000}`;
});
