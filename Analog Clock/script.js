var  hours = document.querySelector(".hrs");
var  minutes = document.querySelector(".min");
var  seconds = document.querySelector(".sec");

function runClock(){
    const time = new Date();
    const sec= time.getSeconds()/60;
    const min= (sec+time.getMinutes())/60;
    const hrs= (min+time.getHours())/12;

    hours.style.setProperty(`--rotation`,hrs*360);
    minutes.style.setProperty(`--rotation`,min*360);
    seconds.style.setProperty(`--rotation`,sec*360);
}
runClock();
setInterval(runClock,1000);






