let hrs = document.querySelector(".hrs");
let min = document.querySelector(".min");
let sec = document.querySelector(".sec");
const day = document.querySelector("#day");
const date = document.querySelector("#date");
const year = document.querySelector("#year");
const month = document.querySelector("#month");
const btn = document.querySelector(".btn");
const clock = document.querySelector(".clock");
const calender = document.querySelector(".calender")
btn.addEventListener("click",()=>{
    const today = new Date();

    const weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    
    date.innerHTML  = today.getDate();
    day.innerHTML  = weekDays[today.getDay()];
    month.innerHTML  = months[today.getMonth()];
    year.innerHTML  = today.getFullYear();
      
    clock.classList.toggle("deactiveClock");
    calender.classList.toggle("active");
    
})

function inner(){
    if(btn.innerHTML =="View Calender"){
    btn.innerHTML = "Show Time";
    }
    else{
        btn.innerHTML = "View Calender";
    }

}

setInterval(()=>{
  
    let currTime = new Date();
    hrs.innerHTML = currTime.getHours();
    min.innerHTML = currTime.getMinutes();
    sec.innerHTML = currTime.getSeconds();
    
},1000);

