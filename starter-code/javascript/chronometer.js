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
  }
  getMinutes = () => Math.floor(this.currentTime / 60);

  getSeconds = () => this.currentTime % 60;

  twoDigitsNumber = number => `${number}`.padStart(2, "0");

  setTime() {
    let minutes = this.twoDigitsNumber(this.getMinutes());
    let seconds = this.twoDigitsNumber(this.getSeconds() % 60);
    let milis = this.twoDigitsNumber(this.setMilliseconds());
    return [minutes, seconds, milis];
  }
  setMilliseconds() {
    return this.currentMilis % 100;
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
    this.currentMilis = 0;
    this.setTime();
  }
}
