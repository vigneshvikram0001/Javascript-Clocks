let store= document.querySelector(".clock");

function runClock(){

    var currentTime=new Date();
    var hrs=15;
    var min=currentTime.getMinutes();
    var sec=currentTime.getSeconds();

    var text="AM";
    if(hrs>12){
        hrs=hrs-12;
        text = "PM";
    }
    else if(hrs==0){
        hrs =12;
        text = "AM";
    }
    hrs=hrs<10?"0"+ hrs:hrs;
    min=min<10?"0"+ min:min;
    sec=sec<10?"0"+ sec:sec;

    store.innerHTML=`${hrs} : ${min} : ${sec} ${text}`;

// And this one more digital watch is below
// **********************************

    const h = document.querySelectorAll(".h");
    const m = document.querySelectorAll(".m");
    const s = document.querySelectorAll(".s");

    hrs=hrs.toString();
    min=min.toString();
    sec=sec.toString();
    h[0].innerHTML = hrs[0];
    h[1].innerHTML = hrs[1];
    m[0].innerHTML = min[0];
    m[1].innerHTML = min[1];
    s[0].innerHTML = sec[0];
    s[1].innerHTML = sec[1];

// the above script is used to display time into every single string

}

setInterval(runClock,1000);

