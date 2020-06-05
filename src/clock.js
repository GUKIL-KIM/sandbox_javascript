const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");
const clockTime = clockContainer.querySelector("h2");

//clockTime.innerText = ``;
function getTime() {
  const christmas = new Date("2020-12-25T00:00:00");
  const today = new Date();
  const day = christmas.getDay() - today.getDay();
  const hour = christmas.getHours() - today.getHours();
  const Min = christmas.getMinutes() - today.getMinutes();
  const Sec = christmas.getSeconds() - today.getSeconds();

  clockTitle.innerText = "Time Until Christmas";
  clockTime.innerText = `${day}d ${hour}h ${Min}m ${Sec}s`;
}

function init() {
  setInterval(getTime, 1000);
}

init();

/*
function getTime() {
  const date = new Date();
  console.log(date);
  document.write(date);
}

getTime();
*/
//${seconds < 10 ? `0${seconds}` : seconds}
