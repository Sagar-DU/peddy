console.log("Started working with API");

// Load all the pet categories
const loadPetCategories = () => {
    fetch("https://openapi.programming-hero.com/api/peddy/categories")
        .then((res) => res.json())
        .then((dat) => displayPetCateogries(dat.categories))

        .catch((err) => console.log(err));
}

// Create a display pet categories function 
const displayPetCateogries = (categories) => {
    const petCateogryContainer = document.getElementById("pet-categories");
    // console.log(categories);
    categories.forEach((category) => {
        // console.log(category);
        const button = document.createElement("button");
        button.classList = "btn btn-wide h-22 bg-white rounded-2xl lato-bold text-2xl";
        button.innerHTML = `<img src="${category.category_icon}" alt="category_icon"> ${category.category}`;
        petCateogryContainer.append(button);
    });
}

// Load all the pets 
const loadPets = () => {
    fetch("https://openapi.programming-hero.com/api/peddy/pets")
        .then((res) => res.json())
        .then((dat) => displayPets(dat.pets))

        .catch((err) => console.log(err));
}

// Display pets 
const displayPets = (pets) => {
    const allPetData = document.getElementById("pet-cards");
    pets.forEach((pet) => {
        console.log(pet);
        const card = document.createElement("div");
        card.classList = "card bg-base-100 shadow-sm"
        card.innerHTML = `
        <figure>
    <img
      src=${pet.image}
      alt=${pet.cetagory} />
  </figure>
  <div class="card-body">
    <h2 class="card-title">
      Card Title
      <div class="badge badge-secondary">NEW</div>
    </h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="card-actions justify-end">
      <div class="badge badge-outline">Fashion</div>
      <div class="badge badge-outline">Products</div>
    </div>
  </div>
        `;
        allPetData.append(card);
    })

}
/*
Output
category
: 
"Cat"
category_icon
: 
"https://i.ibb.co.com/N7dM2K1/cat.png"
id
: 
1
*/
// Load Pet Categories 
loadPetCategories();

// Load All the pets 
loadPets();