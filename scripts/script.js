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

/*
Pet Details
breed: "Golden Retriever"
category: "Dog"
date_of_birth: "2023-01-15"
gender: "Male"
image :"https://i.ibb.co.com/p0w744T/pet-1.jpg"
petId: 1
pet_details : "This friendly male Golden Retriever is energetic and loyal, making him a perfect companion for families. Born on January 15, 2023, he enjoys playing outdoors and is especially great with children. Fully vaccinated, he's ready to join your family and bring endless joy. Priced at $1200, he offers love, loyalty, and a lively spirit for those seeking a playful yet gentle dog."
pet_name: "Sunny"
price: 1200
vaccinated_status: "Fully"
*/

// Display pets 
const displayPets = (pets) => {
    const allPetData = document.getElementById("pet-cards");
    const petPhoto = document.getElementById("pet-photo-container")
    pets.forEach((pet) => {
        console.log(pet);
        const card = document.createElement("div");
        const pictureCard = document.createElement("div");
        card.classList = "card bg-base-100 p-6 shadow-sm"
        pictureCard.classList = "card bg-base-100 p-6 shadow-sm grid grid-cols-2"
        card.innerHTML = `
        <figure class ="h-[400px]">
    <img
      src=${pet.image}
      alt=${pet.cetagory}
      class ="h-full w-full object-cover" />
  </figure>
  <div class="card-body items-start">
    <h2 class="card-title">
      ${pet.pet_name}
    </h2>
    <p><i class="fa-brands fa-buromobelexperte fa-rotate-270 fa-xs"></i> Breed: ${pet.breed}</p>
    <p><i class="fa-regular fa-calendar"></i> Birth: ${pet.date_of_birth}</p>
    <p><i class="fa-solid fa-venus-mars fa-xs"></i> Gender: ${pet.gender}</p>
    <p><i class="fa-solid fa-dollar-sign fa-xs"></i> Price: $${pet.price}</p>
    <div class="divider m-0 pt-4"></div>
    </div>
    <div class="card-actions flex justify-evenly pb-4">
      <div class="btn custom-btn badge-outline"><i class="fa-regular fa-thumbs-up"></i></div>
      <div class="btn custom-btn badge-outline">Adopt</div>
      <div class="btn custom-btn badge-outline">Details</div>
  </div>
        `;
        pictureCard.innerHTML = `
        <figure class="h-[200px]>
        <img src=${pet.image}" />
        `;
        allPetData.append(card);
        petPhoto.append(pictureCard);
    });
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