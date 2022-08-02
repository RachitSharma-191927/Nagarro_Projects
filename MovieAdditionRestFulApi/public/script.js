var gets = document.querySelector("#get");
var posts = document.querySelector("#post");
var mname = document.querySelector("#mName");
var mgenre = document.querySelector("#mGenre");
var myear = document.querySelector("#mYear");

gets.addEventListener("click", function () {
  if (mname.value === "" || mgenre.value === "" || myear.value === "") {
    alert("Empty Fields Present");
    return;
  }
  var gurl = `\data?name=${mname.value}&genre=${mgenre.value}&year=${myear.value}`;
  fetch(gurl, get).then(() => {
    alert("Added Through Get");
  });
});

posts.addEventListener("click", () => {
  if (mname.value === "" || mgenre.value === "" || myear.value === "") {
    alert("Empty Fields Present");
    return;
  }
  var data = {
    Name: mname.value,
    Genre: mgenre.value,
    Year: myear.value,
  };

  fetch(`\data`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(() => {
      alert("Added through post");
    })
    .catch((e) => {
      console.log(e);
      console.log("Error");
    });
});
