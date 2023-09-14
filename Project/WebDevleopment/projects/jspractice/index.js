const API_KEY = "8240a9c2c2504762b0537641297c408b";
const recipeListEl = document.getElementById("recipe-list");

function displayRecipies(dataRecipes) {
  console.log("called");
  recipeListEl.innerHTML = "";
  dataRecipes.forEach((recipe) => {
    const recipeItemEl = document.createElement("li");
    recipeItemEl.classList.add("recipe-item");
    console.log("working")

    const recipeImgEl = document.createElement("img");
    recipeImgEl.src = recipe.image;
    recipeImgEl.alt = "recipe image";
    console.log("working")

    const recipeTitle = document.createElement("h2");
    recipeTitle.innerText = recipe.title;
console.log("working")
    const recipeingredientsEl = document.createElement("p");
    recipeingredientsEl.innerHTML = `<strong>Ingredients:</strong> ${recipe.extendedIngredients
      .map((ingredient) => ingredient.original)
      .join(", ")}`;
      console.log("working")
    const recipeSrcAnchor = document.createElement("a");
    recipeSrcAnchor.href = recipe.sourceUrl;
    recipeSrcAnchor.innerText = "View Recipe";
    console.log("working")
    recipeItemEl.appendChild(recipeImgEl);
    recipeItemEl.appendChild(recipeTitle);
    recipeItemEl.appendChild(recipeingredientsEl);
    recipeItemEl.appendChild(recipeSrcAnchor);
    recipeListEl.appendChild(recipeItemEl);
  });
}
async function getRecipes() {
  const recipes = await fetch(
    `https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`
  );
  const data = await recipes.json();
  console.log(data.recipes);
  return data.recipes;
}
async function init() {
  const dataRecipes = await getRecipes();
  displayRecipies(dataRecipes);
}
init();
