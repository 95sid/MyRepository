const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btnEl = document.getElementById("btn");
const colorEl = document.querySelector(".color");

btnEl.addEventListener("click",function(){
    let hexcolor = "#";
    const color = getColor(hexcolor);
    console.log(color);
    document.body.style.backgroundColor = color;
    colorEl.textContent = color;
})

function getColor(hexcolor){
    for(let i = 0;i<6;i++){
        let randomNumber = Math.floor(Math.random() * hex.length);
        hexcolor += hex[randomNumber];
    }
    return hexcolor;
}