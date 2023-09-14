const buttonsEl = document.querySelectorAll("button");
const inputFieldEl = document.getElementById("results");
for(let i = 0;i<buttonsEl.length;i++){
    buttonsEl[i].addEventListener("click",(event)=>{
        let buttonValue = buttonsEl[i].textContent;
        if(buttonValue === "C"){
            clearResult();
        }
        else if(buttonValue === "="){
            calculateResult();
        }
        else {
            appendValue(buttonValue);
        }
    })
}
function appendValue(buttonValue){
    inputFieldEl.value += buttonValue;
}
function calculateResult(){
    inputFieldEl.value = eval(inputFieldEl.value);
}
function clearResult(){
    inputFieldEl.value = "";
}