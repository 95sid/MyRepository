const buttonsEl = document.getElementById("buttons");
const timerEl = document.getElementById("timer");
const startEl = document.getElementById("start");
const stopEl = document.getElementById("stop")
const resetEl = document.getElementById("reset")
let startTime = 0;
let elapseTime = 0;
let timerInterval;
function startTimer(){
    // console.log("start")
    startTime = Date.now()-elapseTime;

    timerInterval = setInterval(()=>{
        elapseTime = Date.now()-startTime;
        timerEl.textContent = FormatTime(elapseTime);
    },10)
    startEl.disabled = true;
    stopEl.disabled = false;
}
function FormatTime(elapseTime){
    const miliseconds = Math.floor((elapseTime%1000)/10);
    const seconds = Math.floor((elapseTime%(1000*60))/1000);
    const minuts = Math.floor((elapseTime%(1000*60*60))/(1000*60));
    const hours = Math.floor(elapseTime/(1000*60*60));
    return (
        (hours?(hours>9?hours:"0"+hours):"00")
        +":"+
        (minuts?(minuts>9?minuts:"0"+minuts):"00")
        +":"+
        (seconds?(seconds>9?seconds:"0"+seconds):"00")
        +"."+
        (miliseconds>9 ? miliseconds:"0"+miliseconds));
}
startEl.addEventListener("click", startTimer)
function stopTimer(){
    // console.log("stop")
    clearInterval(timerInterval);
    startEl.disabled = false;
    stopEl.disabled = true;

}
stopEl.addEventListener("click", stopTimer)
function resetTimer(){
    clearInterval(timerInterval);
    elapseTime = 0;
    timerEl.textContent = "00:00:00"
    startEl.disabled = false;
    stopEl.disabled = true;
}
resetEl.addEventListener("click", resetTimer)