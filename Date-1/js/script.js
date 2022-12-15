const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

function updateTime(){

const currentYear =new Date().getFullYear();
// current Year

const newYear = new Date(`January 1 ${currentYear+1} 00:00:00`);
// New Year 

const currentDate = new Date();
const difference = newYear -currentDate;
// finding the difference from current date to new year

const d=Math.floor(difference/1000/60/60/24);
const h=Math.floor((difference/1000/60/60)%24);
const m=Math.floor((difference/1000/60)%60);
const s=Math.floor((difference/1000)%60);
// finally finded days, hours, minutes, seconds

days.innerHTML = d<10?"0"+d:d;
hours.innerHTML =  h<10?"0"+h:h;
minutes.innerHTML =  m<10?"0"+m:m;
seconds.innerHTML =  s<10?"0"+s:s;
// here u can use conditional operator for 0 befor a number
}
setInterval(updateTime,1000);
// setInterval is used to display the function every 1000 milli-seconds

