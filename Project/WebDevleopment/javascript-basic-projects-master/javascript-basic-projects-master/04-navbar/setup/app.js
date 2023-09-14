// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class
const navToggleEl = document.querySelector(".nav-toggle");
const linksEl = document.querySelector(".links");

navToggleEl.addEventListener("click",function(){
    // console.log(linksEl .classList);
    // if(linksEl.classList.contains("show-links") === false){
    //     linksEl.classList.add("show-links");
    // }
    // else linksEl.classList.remove("show-links");
    linksEl.classList.toggle("show-links");
})