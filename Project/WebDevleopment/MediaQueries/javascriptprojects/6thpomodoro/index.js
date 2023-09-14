const startEl = document.getElementById("start");
const stopEl = document.getElementById("stop");
const resetEl = document.getElementById("reset");
const timerEl = document.getElementById("timer");
let interval;
let timeleft = 10;

function updateTime(){
    let minutes = Math.floor(timeleft/60);
    let seconds = timeleft%60;
    let formatTime = `${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`;
    timerEl.innerHTML = formatTime;
}
function startTimer(){
    interval = setInterval(()=>{
        timeleft--;
        startEl.disabled = true;
        stopEl.disabled = false;
        updateTime();
        if(timeleft === 0){
            clearInterval(interval);
            alert("Time is Up..")
            timeleft = 1500;
            updateTime();
            startEl.disabled = false;
            stopEl.disabled = true;  
        }
    },1000)
}
function stopTimer(){
    clearInterval(interval);
    startEl.disabled = false;
    stopEl.disabled = true;
}
function resetTimer(){
    clearInterval(interval);
    timeleft = 1500;
    updateTime(); 
    startEl.disabled = false;
    stopEl.disabled = true;  
}   
startEl.addEventListener("click",startTimer);
stopEl.addEventListener("click",stopTimer);
resetEl.addEventListener("click",resetTimer);