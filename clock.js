const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector(".js-title");
function check10(time) {
  return time < 10 ? `0${time}` : time;
}
function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  clockTitle.innerHTML = `${check10(hours)}:${check10(minutes)}:${check10(seconds)}`;
}
function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
