// local reviews data
const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: 'https://www.course-api.com/images/people/person-1.jpeg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://www.course-api.com/images/people/person-2.jpeg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://www.course-api.com/images/people/person-4.jpeg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://www.course-api.com/images/people/person-3.jpeg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];
// select items
const authorEl = document.getElementById("author");
const jobEl = document.getElementById("job");
const infoEl = document.getElementById("info");
const personimgEl = document.getElementById("person-img");

const prevbtn = document.querySelector(".prev-btn");
const nextbtn = document.querySelector(".next-btn");
const randombtn = document.querySelector(".random-btn");

let currentItem = 0;
function content(currentItem){
  const item = reviews[currentItem];
  personimgEl.src = item.img;
  authorEl.textContent = item.name;
  jobEl.textContent = item.job;
  infoEl.textContent = item.text;
}

function randomfunction(){
  return Math.floor(Math.random()*reviews.length);
}
window.addEventListener("DOMContentLoaded",function(){
   content(0);
})

nextbtn.addEventListener("click",function(){
  if(currentItem<3) currentItem++;
  else currentItem = 0;
  content(currentItem);
})
prevbtn.addEventListener("click",function(){
  if(currentItem>0) currentItem--;
  else currentItem = reviews.length-1;
  content(currentItem);
})
randombtn.addEventListener("click",function(){
  currentItem = randomfunction();
  // console.log(currentItem);  
  content(currentItem);
})
