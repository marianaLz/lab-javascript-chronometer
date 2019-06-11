class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId;
    this.currentMilis = 0;
  }

  startClick() {
    this.intervalId = setInterval(() => {
      this.currentMilis++;
      this.currentTime = Math.floor(this.currentMilis / 100);
      this.setTime();
    }, 10);
    btnLeft.innerText = "STOP";
    btnRight.innerText = "SPLIT";
  }
  getMinutes = () => Math.floor(this.currentTime / 60);

  getSeconds = () => this.currentTime;

  twoDigitsNumber = number => `${number}`.padStart(2, "0");

  setTime() {
    let minutes = this.twoDigitsNumber(this.getMinutes());
    let seconds = this.twoDigitsNumber(this.getSeconds() % 60);
    let milis = this.twoDigitsNumber(this.setMilliseconds());
    milUni.innerText = milis[1];
    milDec.innerText = milis[0];
    secUni.innerText = seconds[1];
    secDec.innerText = seconds[0];
    minUni.innerText = minutes[1];
    minDec.innerText = minutes[0];
    return `${minutes}:${seconds}:${milis}`;
  }
  setMilliseconds() {
    return this.currentMilis % 100;
  }
  stopClick() {
    clearInterval(this.intervalId);
    btnLeft.innerText = "START";
    btnRight.innerText = "RESET";
  }
  resetClick() {
    this.currentTime = 0;
    this.currentMilis = 0;
    this.setTime();
    splits.innerHTML = "";
  }

  splitClick() {
    let split = document.createElement("li");
    let splitText = document.createTextNode(chronometer.setTime());
    split.appendChild(splitText);
    splits.appendChild(split);
  }
}

const chronometer = new Chronometer();

btnLeft.onclick = () => {
  btnLeft.classList.toggle("start");
  btnLeft.classList.toggle("stop");
  btnRight.classList.toggle("reset");
  btnRight.classList.toggle("split");
  btnLeft.innerText === "START"
    ? chronometer.startClick()
    : chronometer.stopClick();
};

btnRight.onclick = () =>
  btnRight.innerText === "RESET"
    ? chronometer.resetClick()
    : chronometer.splitClick();
