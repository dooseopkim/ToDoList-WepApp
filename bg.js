const body = document.querySelector("body");
const IMG_DIR = "./images/";
const IMG_EXT = ".jpg";
const IMG_NUMBER = 5;
function randomNumber() {
  return Math.floor(Math.random() * IMG_NUMBER);
}
function loadingImage() {
  const image = new Image();
  image.src = `${IMG_DIR}${randomNumber() + 1}${IMG_EXT}`;
  image.classList.add("bg");
  body.appendChild(image);
}
function init() {
  loadingImage();
}
init();
