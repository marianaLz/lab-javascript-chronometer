let btnLeft = document.getElementById("btnLeft");
let btnRight = document.getElementById("btnRight");
let minDec = document.getElementById("minDec");
let minUni = document.getElementById("minUni");
let secDec = document.getElementById("secDec");
let secUni = document.getElementById("secUni");
let milDec = document.getElementById("milDec");
let milUni = document.getElementById("milUni");
let splits = document.getElementById("splits");

let chronometer = new Chronometer();

function updateDOM() {
  let [minutes, seconds, milis] = chronometer.setTime();
  milUni.innerText = milis[1];
  milDec.innerText = milis[0];
  secUni.innerText = seconds[1];
  secDec.innerText = seconds[0];
  minUni.innerText = minutes[1];
  minDec.innerText = minutes[0];
}

window.onload = () => setInterval(updateDOM, 10);

btnLeft.onclick = () => {
  btnLeft.classList.toggle("start");
  btnLeft.classList.toggle("stop");
  btnRight.classList.toggle("reset");
  btnRight.classList.toggle("split");
  if (btnLeft.innerText === "START") {
    chronometer.startClick();
    btnLeft.innerText = "STOP";
    btnRight.innerText = "SPLIT";
  } else {
    chronometer.stopClick();
    btnLeft.innerText = "START";
    btnRight.innerText = "RESET";
  }
};

btnRight.onclick = () => {
  if (btnRight.innerText === "RESET") {
    chronometer.resetClick();
    splits.innerHTML = "";
  } else {
    let split = document.createElement("li");
    let splitText = document.createTextNode(chronometer.setTime().join`:`);
    split.appendChild(splitText);
    splits.appendChild(split);
  }
};
