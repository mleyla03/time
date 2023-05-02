const currentTime = document.querySelector("h1");
const content = document.querySelector(".content");
 const selectMenu = document.querySelectorAll("select");
const setAlarmBtn = document.querySelector("button");
let alarmTime;
let  isAlarmSet;
ringtone = new Audio("./K44XEWK-alarm-fire-alarm-buzzer-01.mp3");

setInterval(() => {
    let date = new Date(),
    hour = date.getHours(),
    minute = date.getMinutes(),
    seconds = date.getSeconds(),
    ampm = "AM";
    if(hour >= 12) {
        hour = hour - 12;
        ampm = "PM";
    }
    hour = hour == 0 ? hour = 12 : hour;
    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    currentTime.innerText = `${hour}:${minute}:${seconds} ${ampm}`;
    if (alarmTime === `${hour}:${minute} ${ampm}`) {
        ringtone.play();
        ringtone.loop = true;
    }
   
});

function setAlarm() {
    if (isAlarmSet) {
        alarmTime = "";
        ringtone.pause();
        content.classList.remove("disable");
        setAlarmBtn.innerText = "Set Alarm";
        return isAlarmSet = false;
    }
    let time = `${selectMenu[0].value}:${selectMenu[1].value} ${selectMenu[2].value}`;
    if (time.includes("Hour") || time.includes("Minute") || time.includes("AM/PM")) {
        return alert("Input is empty! ");
    }
   
    
    alarmTime = time;
    isAlarmSet = true;
    content.classList.add("disable");
    setAlarmBtn.innerText = "Clear Alarm";
}
for (let i = 59; i >= 0; i--) {
  i = i < 10 ? `0${i}` : i;
  let option = `<option value="${i}">${i}</option>`;
  selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);
}


setAlarmBtn.addEventListener("click", setAlarm);
for (let i = 2; i > 0; i--) {
  let ampm = i == 1 ? "AM" : "PM";
  let option = `<option value="${ampm}">${ampm}</option>`;
  selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 12; i > 0; i--) {
  i = i < 10 ? `0${i}` : i;
  let option = `<option value="${i}">${i}</option>`;
  selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
}