// function currentTime(){
//     const date=new Date();
//     let hrs=date.getHours();
//     let meridiem=hrs>=12?"PM":"AM";
//     hrs=hrs%12 || 12;
//     hrs=hrs.toString().padStart(2,0)
//     let mins=date.getMinutes().toString().padStart(2,0);
//     let secs=date.getSeconds().toString().padStart(2,0);
//     let timeString=`${hrs}:${mins}:${secs} ${meridiem}`
//     document.getElementById("digi-clock").textContent=timeString
// }
// currentTime()
// setInterval(currentTime,1000)















function currentTime(){
const date=new Date();
let hrs=date.getHours();
let mins=date.getMinutes().toString().padStart(2,0);
let secs=date.getSeconds().toString().padStart(2,0);
let meridiem=hrs>=12?"PM":"AM";
hrs=hrs%12||12;
hrs=hrs.toString().padStart(2,0);
const timeString=`${hrs}:${mins}:${secs} ${meridiem}`;
document.getElementById("clock-display").textContent=timeString;
}

currentTime();
setInterval(currentTime, 1000);

















