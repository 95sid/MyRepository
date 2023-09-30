const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");
console.log(items);
let futureDate = new Date(2023, 8, 30, 23, 59);

giveaway.textContent = `Giveaway ends on ${
  weekdays[futureDate.getDay()]
}, ${futureDate.getDate()} ${
  months[futureDate.getMonth()]
} ${futureDate.getFullYear()} at ${futureDate.getHours()}:${futureDate.getMinutes()}`;

const futureTime = futureDate.getTime();

function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;
  // 1s = 1000ms
  //1m = 60*1000ms
  //1hr = 60*60*1000ms
  //1day = 24*60*60*1000
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHr = 60 * 60 * 1000;
  const oneMin = 60 * 1000;
  const oneSec = 1000;

  let days = Math.floor(t / oneDay);
  let hrs = Math.floor((t % oneDay) / oneHr);
  let min = Math.floor((t % oneHr) / oneMin);
  let sec = Math.floor((t % oneMin) / oneSec);
  const values = [days, hrs, min, sec];
  items.forEach(function (item,index) {
    item.innerHTML = format(values[index]);
    item.innerHTML = format(values[index]);
    item.innerHTML = format(values[index]);
    item.innerHTML = format(values[index]);
  });
  if(t<0){
    clearInterval(countDown)
    deadline.innerHTML = `<h4 class = "expired">Sorry, this giveaway is expired</h4>`

  }
}

function format(item){
  if(item<10) return item = `0${item}`;
  else return item;
}
let countDown = setInterval(getRemainingTime,1000);
getRemainingTime();
