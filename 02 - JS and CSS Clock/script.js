const clockHands = {
  second: document.querySelector(".second-hand"),
  min: document.querySelector(".min-hand"),
  hour: document.querySelector(".hour-hand"),
};

const setDate = () => {
  const currentDate = new Date();

  const secondsRatio = currentDate.getSeconds() / 60;
  const minsRatio = (secondsRatio + currentDate.getMinutes()) / 60;
  const hoursRatio = (minsRatio + currentDate.getHours()) / 12;

  setRotation(clockHands.second, secondsRatio);
  setRotation(clockHands.min, minsRatio);
  setRotation(clockHands.hour, hoursRatio);
};

const setRotation = (element, rotateRatio) =>
  element.style.setProperty("--rotation", rotateRatio * 360);

setDate();

setInterval(setDate, 1000);
