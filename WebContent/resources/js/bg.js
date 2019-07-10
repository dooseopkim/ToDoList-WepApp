const body = document.querySelector("body");
const imgPhotographer = document.querySelector(".js-photographer");
const UNSPLASH_URL =
  "https://api.unsplash.com/photos/random?client_id=<Your API Access key>&query=nature&orientation=landscape";

// Check OK -> Drawing
// Check NO -> Get Image -> Save Image

// Image Check & loading
function loadImage() {
  const bgImg = localStorage.getItem("bgImg");

  if (!bgImg) {
    getImage();
    return;
  }
  const bgItem = JSON.parse(bgImg);
  const now = new Date().getTime();

  if (bgItem.expires < now) {
    getImage();
  } else {
    drawImage(bgItem);
  }
  return false;
}

// Image drawing
function drawImage(bgImg) {
  const { url, photographer, expires } = bgImg;
  body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${url})`;
  console.log(imgPhotographer);
  imgPhotographer.innerHTML = `Photo by # ${photographer}`;
  return false;
}

// Get image from api
function getImage() {
  fetch(UNSPLASH_URL)
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      const bgImg = {
        url: json.urls.full,
        photographer: json.user.username,
        expires: new Date().getTime() + 60 * 60 * 12 * 1000
      };
      saveImage(bgImg);
    })
    .catch(function(err) {
      console.error(err);
    });
}
// Image Save
function saveImage(bgImg) {
  const bg = localStorage.getItem("bgImg");
  if (bg) localStorage.clear("bgImg");

  localStorage.setItem("bgImg", JSON.stringify(bgImg));
  loadImage();
  return false;
}

function init() {
  loadImage();
}
init();
