const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btnEl = document.getElementById("btn");
const colorEl = document.querySelector(".color");

btnEl.addEventListener('click',function(){
    const randomNumber = getRandomColor();
    console.log(randomNumber)
    document.body.style.backgroundColor = colors[randomNumber];
    colorEl.textContent = colors[randomNumber];
})
function getRandomColor(){
    return Math.floor(Math.random()*colors.length)
}