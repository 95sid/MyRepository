const diceEl = document.getElementById("dice");
const buttonEl = document.getElementById("submit-btn");
const historyEl = document.getElementById("history-result");
let historyList = [];
function updateRollhistroy(){
     historyEl.innerHTML = "";  
     for(let i = 0;i<historyList.length;i++){
        const listItem = document.createElement("li");
        listItem.innerHTML = `Roll ${i+1}: <span>${updateFace(historyList[i])}</span>`;
        historyEl.appendChild(listItem)
     }
}
function updateFace(rollresult){
    if(rollresult == 1){
        return "&#9856;";
    }
    else if(rollresult == 2){
        return "&#9857;";
    }
    else if(rollresult == 3){
        return "&#9858;";
    }
    else if(rollresult == 4){
        return "&#9859;";
    }
    else if(rollresult == 5){
        return "&#9860;";
    }
    else if(rollresult == 6){
        return "&#9861;";
    }
    else return "";
}
function rollDice(){
    let rollresult = Math.floor(Math.random()*6)+1;
    const Face = updateFace(rollresult);
    diceEl.innerHTML = Face;
    historyList.push(rollresult);
    updateRollhistroy();
}

buttonEl.addEventListener("click",()=>{
    diceEl.classList.add("roll-animation");
    setTimeout(()=>{
        diceEl.classList.remove("roll-animation");
    },1000);
    rollDice();  
})