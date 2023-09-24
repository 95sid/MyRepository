
const sidebar = document.querySelector(".sidebar");
const closebtn = document.querySelector(".close-btn");
const togglebtn = document.getElementById("right");

closebtn.addEventListener("click",function(){
  sidebar.classList.remove("show-sidebar")
})
togglebtn.addEventListener("click",function(){
  sidebar.classList.toggle("show-sidebar");
})
