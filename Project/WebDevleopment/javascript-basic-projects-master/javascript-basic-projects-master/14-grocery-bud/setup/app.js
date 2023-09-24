// ****** SELECT ITEMS **********
const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const submitbtn = document.querySelector(".submit-btn");
const grocery = document.getElementById("grocery");
const editbtn = document.querySelector(".edit-btn");
const clearbtn = document.querySelector(".clear-btn");
const list = document.querySelector(".grocery-list");
const container = document.querySelector(".grocery-container");
// edit option
let editElement;
let editFlag = false;
let editId = "";
// ****** EVENT LISTENERS **********
form.addEventListener("submit", addItem);
clearbtn.addEventListener("click",clearItems);
// ****** FUNCTIONS **********
function addItem(e) {
  e.preventDefault();
  const value = grocery.value;
  const id = new Date().getTime().toString();
  // console.log(id);
  if (value && !editFlag) {
    // console.log("value is not Empty");
    const element = document.createElement("article");
    element.classList.add("grocery-item");
    //add id
    const attr = document.createAttribute("data-id");
    attr.value = id;
    element.setAttributeNode(attr);
    element.innerHTML = `<p class="title">${value}</p>
    <div class="btn-container">
      <button type="button" class="edit-btn">
        <i class="fas fa-edit"></i>
      </button>
      <button type="button" class="delete-btn">
        <i class="fas fa-trash"></i>
      </button>
    </div>`;
    const deletebtn = element.querySelector(".delete-btn");
    const editbtn = element.querySelector(".edit-btn");
    deletebtn.addEventListener("click",deleteItem);
    editbtn.addEventListener("click",editItem);
    list.appendChild(element);
    displayAlert("Item is added to list", "success");
    container.classList.add("show-container");
    //store in local storage
    addtolocalStorage(id,value);
    //set back to default
    setBacktoDefault();


  } else if (value && editFlag) {
        editElement = value;
        displayAlert("value changed","success");
        //edit local storage
        editLocalStorage(editId,value);
        setBacktoDefault();

  } else {
    // console.log("value is empty");
    displayAlert("Enter the Value", "danger");
  }
}
// ****** LOCAL STORAGE **********
function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);

  setTimeout(function () {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 500);
}
function clearItems(){
    const items = document.querySelectorAll(".grocery-item");
    if(items.length>0){
        items.forEach(function(item){
            list.removeChild(item);
        });
    }
    container.classList.remove("show-container")
    displayAlert("List is Empty","danger");
    setBacktoDefault();
    // localStorage.removeItem('list');
}
// ****** SETUP ITEMS **********

function deleteItem(e){
    // console.log("item deleted");
   const element = e.currentTarget.parentElement.parentElement;
   const id = element.dataset.id;
   list.removeChild(element);
   if(list.children.length == 0){
    container.classList.remove("show-container");
   }
   displayAlert("item remvoed","danger");
   setBacktoDefault();
   //remove from local storage
}
function editItem(e){
    const element = e.currentTarget.parentElement.parentElement;
    editElement = e.currentTarget.parentElement.previousElementSibling;
    editFlag = true;
    submitbtn.textContent = "Edit";
    editId = element.dataset.id;
}
function setBacktoDefault(){
    grocery.value = "";
    editFlag = false;
    editId = "";
    submitbtn.textContent = "submit";
}
function addtolocalStorage(id,value){
    const grocery = {id,value};
    console.log(grocery);
}
function removeFromLocalStorage(id){

}
function editLocalStorage(id,value){

}