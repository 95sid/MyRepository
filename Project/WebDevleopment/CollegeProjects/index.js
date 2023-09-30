// sidebar
const sidebar = document.querySelector(".sidebar");
const closebtn = document.querySelector(".close-btn");
const togglebtn = document.getElementById("right");

closebtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});
togglebtn.addEventListener("click", function () {
  sidebar.classList.toggle("show-sidebar");
});

//about seciton
const tabcontents = document.querySelectorAll(".tab-content");
const tablinks = document.querySelectorAll(".tab-links");
const about = document.querySelector(".about-col2");

about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    tablinks.forEach(function (tablink) {
      tablink.classList.remove("active-link");
      e.target.classList.add("active-link");
    });
    tabcontents.forEach(function (tabcontent) {
      tabcontent.classList.remove("active-tab");
    });
    const element = document.getElementById(id);
    element.classList.add("active-tab");
  }
});

//general questions

const questions = document.querySelectorAll(".question");
questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");
  btn.addEventListener("click", function (e) {
    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });
    question.classList.toggle("show-text");
  });
});

//reviews

// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://www.course-api.com/images/people/person-1.jpeg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://www.course-api.com/images/people/person-2.jpeg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://www.course-api.com/images/people/person-4.jpeg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://www.course-api.com/images/people/person-3.jpeg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");
const personimg = document.getElementById("person-img");

let inc = 0;
let dec = 0;

const nextbtn = document.querySelector(".next-btn");
const prevbtn = document.querySelector(".prev-btn");
const randbtn = document.querySelector(".random-btn");
let currperson = 0;
function content(index) {
  const item = reviews[index];
  personimg.src = item.img;
  job.textContent = item.job;
  info.textContent = item.text;
  author.textContent = item.name;
}
window.addEventListener("reload", content(0));
nextbtn.addEventListener("click", function () {
  currperson++;
  if (currperson === 4) {
    currperson = 0;
  }
  content(currperson);
});
prevbtn.addEventListener("click", function () {
  currperson--;
  if (currperson === -1) {
    currperson = 3;
  }
  content(currperson);
});

randbtn.addEventListener("click", function () {
  const random = Math.floor(Math.random() * 4);
  content(random);
});

const scriptURL = "https://script.google.com/macros/s/AKfycbxohZbb-mq1dvNzIEhJmZHEyZCVEsO4IKpZQf3RnZ788Qp-ipBRKPWHHUi4HiNPu2a8ng/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg")
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then(response =>{
      msg.innerHTML = "Message Sent Successfull !! Thanks For feedback :)";
      setTimeout(function(){
        msg.innerHTML = "";
      },3000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
