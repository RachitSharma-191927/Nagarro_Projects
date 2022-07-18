var currentIndex = 0;
let images = document.querySelectorAll(".image");
let cursors = document.querySelectorAll(".img-pos");
images.forEach((e) => {
  e.style.display = "none";
});
images[0].style.display = "block";
cursors[0].style.backgroundColor = "black";
document.querySelector("#ra-button").addEventListener("click", () => {
  currentIndex += 1;
  if (currentIndex === images.length) {
    currentIndex = 0;
  }
  for (let i = 0; i < images.length; i++) {
    if (i === currentIndex) {
      continue;
    }
    images[i].style.display = "none";
    cursors[i].style.backgroundColor = "rgba(187, 173, 173, 0.692)";
  }
  images[currentIndex].style.display = "block";
  cursors[currentIndex].style.backgroundColor = "black";
});
document.querySelector("#la-button").addEventListener("click", () => {
  currentIndex -= 1;
  if (currentIndex === -1) {
    currentIndex = 3;
  }
  for (let i = 0; i < images.length; i++) {
    if (i === currentIndex) {
      continue;
    }
    images[i].style.display = "none";
    cursors[i].style.backgroundColor = "rgba(187, 173, 173, 0.692)";
  }
  images[currentIndex].style.display = "block";
  cursors[currentIndex].style.backgroundColor = "black";
});
