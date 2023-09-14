// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay
const modalbtnEl = document.querySelector(".modal-btn");
const modaloverlayEl = document.querySelector(".modal-overlay");
const closebtnEl = document.querySelector(".close-btn");

modalbtnEl.addEventListener("click",function(){
    modaloverlayEl.classList.toggle("open-modal");
})
closebtnEl.addEventListener("click",function(){
    modaloverlayEl.classList.toggle("open-modal");
})