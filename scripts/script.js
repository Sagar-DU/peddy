console.log("Started working with API");

// Load all the pet categories
const loadPetCategories = () => {
    fetch ("https://openapi.programming-hero.com/api/peddy/categories")
    .then ((res) => res.json())
    .then ((dat) => displayPetCateogries(dat.categories))

    .catch((err) => console.log(err));
}

// Create a display pet categories function 
const displayPetCateogries = (categories) => {
    const petCateogryContainer = document.getElementById("pet-categories");
    // console.log(categories);
    categories.forEach((category) => {
        console.log(category);
        const button = document.createElement("button");
        button.classList = "btn btn-wide h-22 bg-white rounded-2xl lato-bold text-2xl";
        button.innerHTML = `<img src="${category.category_icon}" alt="category_icon"> ${category.category}`;
        petCateogryContainer.append(button);
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
loadPetCategories();