// Crear mascotas (objetos)

let pet1 = {
    name: "Dexter",
    age: 4,
    gender: "Male",
    service: "Grooming",
    breed: "Belgian Malinois"
};

let pet2 = {
    name: "Honey",
    age: 3,
    gender: "Female",
    service: "Bath",
    breed: "Poodle"
};

let pet3 = {
    name: "Rocky",
    age: 5,
    gender: "Male",
    service: "Haircut",
    breed: "Bulldog"
};

let petsList = [pet1, pet2, pet3];


function displayPets(){

    let list = document.getElementById("petsList");

    for(let i = 0; i < petsList.length; i++){

        list.innerHTML += `<li>${petsList[i].name}</li>`;

    }

}

displayPets();




