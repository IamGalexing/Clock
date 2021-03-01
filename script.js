const secondsRef = document.querySelector(".second-hand");
const minRef = document.querySelector(".min-hand");
const hourRef = document.querySelector(".hour-hand");

setInterval(clock, 1000);

function clock() {
  setSeconds();
  setMinutes();
  setHours();
}

function setSeconds() {
  const nowTime = new Date();
  const secTime = nowTime.getSeconds();
  const secArrow = (secTime / 60) * 360 + 90;
  secondsRef.style.transform = `rotate(${secArrow}deg)`;
}

function setMinutes() {
  const nowTime = new Date();
  const minTime = nowTime.getMinutes();
  const minArrow = (minTime / 60) * 360 + 90;
  minRef.style.transform = `rotate(${minArrow}deg)`;
}

function setHours() {
  const nowTime = new Date();
  const hourTime = nowTime.getHours();
  const hourArrow = (hourTime / 12) * 360 + 90;
  hourRef.style.transform = `rotate(${hourArrow}deg)`;
}
