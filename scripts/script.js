console.log("Started working with API");
// Tasks
// 1. Fetch All Pets 
/* 
Endpoint: https://openapi.programming-hero.com/api/peddy/pets
Description: Retrieves a list of all available pets for adoption. The data includes details like pet name, type, age, and adoption status.
*/

// Create a Load Pets
const loadPets = () => {
    fetch("https://openapi.programming-hero.com/api/peddy/pets")
    .then ((res) => res.json())
    .then ((dat) => displayPets(dat.pets))
    .catch((err) => console.log(err));
};

// Create a Display Pets Function 
const displayPets = (pets) => {
    const listOfAllPetsData = pets;
    console.log (listOfAllPetsData);

    // Showing all the individual data 
    // pets.forEach((pet) => {
    //     console.log(pet);
    // });
}

// Call Load Pet Fuction 
loadPets();

/*
Fetch Pet Details by ID

Endpoint:https://openapi.programming-hero.com/api/peddy/pet/pet-id

Example: https://openapi.programming-hero.com/api/peddy/pet/1

Description: Fetches detailed information for a specific pet based on its ID. This can be used to view additional information about the pet such as vacination history, description
*/
