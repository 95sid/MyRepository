const sidebarEl = document.querySelector(".sidebar")
const closebtn = document.querySelector(".close-btn");
const toggleEl = document.querySelector(".sidebar-toggle");
toggleEl.addEventListener("click",function(){
    sidebarEl.classList.toggle("show-sidebar");
})
closebtn.addEventListener("click",function(){
    sidebarEl.classList.toggle("show-sidebar");
})