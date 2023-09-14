const digitEl = document.getElementById("digit");
const increaseEl = document.querySelector(".increase");
const resetEl = document.querySelector(".reset");
const decreaseEl = document.querySelector(".decrease");
let count = 0;
increaseEl.addEventListener("click",function(){
    count++;
    digitEl.textContent = count;
    if(count>0) digitEl.style.color = "darkgreen";
    else if(count === 0) digitEl.style.color = "lightblue";
})
decreaseEl.addEventListener("click",function(){
    count--;
    digitEl.textContent = count;
    if(count<0) digitEl.style.color = "red";
    else if(count === 0) digitEl.style.color = "lightblue";
})
resetEl.addEventListener("click",function(){
    count = 0;
    digitEl.textContent = count;
    digitEl.style.color = "lightblue";
})