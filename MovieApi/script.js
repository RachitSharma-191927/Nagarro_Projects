var button = document.querySelector("#submit");
var input = document.querySelector("#MovieName");
var details = document.querySelector("#details");
var error = document.querySelector("#error");
error.style.display = "none";
var div = document.createElement("div");
button.addEventListener("click", async () => {
  if (input.value == "") {
    error.innerHTML = "Empty Movie Name";
    error.style.display = "block";
    div.innerHTML = " ";
    return;
  }
  await fetch(`https://www.omdbapi.com/?t=${input.value}&apikey=c45e03ec`)
    .then((e) => {
      error.style.display = "none";
      var data = e.json();
      return data;
    })
    .then((data) => {
      if (data.Error == "Movie not found!") {
        error.innerHTML = "Invalid Movie Name";
        error.style.display = "block";
        div.innerHTML = "";
        return;
      }
      div.innerHTML = `
      <img class="card-img-top" src="${data.Poster}" alt="Card image cap">  
    <div><b>Movie Name :</b>${data.Title}</div>
    <div><b>Year Released :</b>${data.Released}</div>
    <div><b>Genre :</b>${data.Genre}</div>
    <div><b>Actors :</b>${data.Actors}</div>
    <div><b>Writers :</b>${data.Writer}</div>
    <div><b>Language :</b>${data.Language}</div>`;
      details.append(div);
    })
    .catch((e) => {
      console.log(e);
    });
});
