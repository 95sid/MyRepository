const apiKey = "MziT3tvOR-7RlBHlGyDFwZ-vgjIJYH0yPcedGbjVbrM";
const formEl = document.querySelector("form");
const searchInputEl = document.getElementById("search-input");
const searchResultEl = document.querySelector(".search-results");
const showMoreEl = document.getElementById("show-more");

let page = 1;
let inputValue = "";
formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  page = 1;
  searchImages();
});
async function searchImages() {
  inputValue = searchInputEl.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputValue}&client_id=${apiKey}`;
  const response = await fetch(url);
  const data = await response.json();
  if (page === 1) searchResultEl.innerHTML = "";
  const results = data.results;

  results.map((result) => {
    //creating a div and giving class name search result
    const imageWrapper = document.createElement("div");
    imageWrapper.classList.add("search-result");

    //creating a img tag and giving src and alt
    const image = document.createElement("img");
    image.src = result.urls.small;
    image.alt = result.alt_description;

    // creating anchor tag and giving href,target and textContent to show
    const imagelink = document.createElement("a");
    imagelink.href = result.links.html;
    imagelink.target = "_blank";
    
    imagelink.textContent = result.alt_description;

    //Appending them inside div
    imageWrapper.appendChild(image);
    imageWrapper.appendChild(imagelink);
    searchResultEl.appendChild(imageWrapper);
  });
  page++;
  if (page > 1) {
    showMoreEl.style.display = "block";
  }
}

showMoreEl.addEventListener("click", () => {
  searchImages();
});
