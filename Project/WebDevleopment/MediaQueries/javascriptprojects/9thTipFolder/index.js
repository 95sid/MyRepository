const calculateEl = document.getElementById("calculate-value");
const billamountEl = document.getElementById("actual-bill");
const tipEl = document.getElementById("tip-percentage");
const totalEl = document.getElementById("total");

function calculatetip(){
    const billvalue = billamountEl.value;
    const tipPercentage = tipEl.value;
    const total = billvalue*(1+tipPercentage/100);
    if(total != 0){
        totalEl.innerText = total.toFixed(2);
    }
}
calculateEl.addEventListener("click",calculatetip);
