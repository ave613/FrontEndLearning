/* Stopwatch */

const stopWatchTag = document.getElementsByClassName("stopWatch")[0];
//const milliWatchTag= document.getElementsByClassName("milliWatch")[0];
const startButtonTag = document.getElementsByClassName("startButton")[0];
const pauseButtonTag = document.getElementsByClassName("pauseButton")[0];
const continueButtonTag = document.getElementsByClassName("continueButton")[0];
const restartButtonTag = document.getElementsByClassName("restartButton")[0];

let seconds = 0,
  minutes = 0,
  hours = 0;
  //milliseconds=0;

const startTime = () => {
  //milliseconds+=1;
  seconds += 1;
  if (seconds === 60) {
    seconds = 0;
    minutes += 1;

    if (minutes === 60) {
      minutes = 0;
      hours += 1;
    }
  }
  
  const secondText = seconds < 10 ? "0" + seconds.toString() : seconds;
  const minuteText = minutes < 10 ? "0" + minutes.toString() : minutes;
  const hourText = hours < 10 ? "0" + hours.toString() : hours;
  //const millisecondsText= milliseconds;
  stopWatchTag.textContent = hourText + ":" + minuteText + ":" + secondText;
  //milliWatchTag.textContent= millisecondsText;
};

let intervalId; 
//let M_intervalId;
startButtonTag.addEventListener("click", () => {
  intervalId = setInterval(startTime, 1000);
  //M_intervalId = setInterval(startTime, 1);
});

pauseButtonTag.addEventListener("click", () => {
  clearInterval(intervalId);
  //clearInterval(M_intervalId);
});

continueButtonTag.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = setInterval(startTime, 1000);
  
  /*clearInterval(M_intervalId);
  M_intervalId = setInterval(startTime, 1);*/
});

restartButtonTag.addEventListener("click", () => {
  clearInterval(intervalId);
  (seconds = 0), (minutes = 0), (hours = 0);
  intervalId = setInterval(startTime, 1000);

  /*clearInterval(M_intervalId);
  milliseconds=0;
  M_intervalId = setInterval(startTime, 1);*/
});
