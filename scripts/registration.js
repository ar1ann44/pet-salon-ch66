

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

const petForm = document.querySelector("form"); 
const body = document.getElementById("body");

function registerPet(event) {

    event.preventDefault();
    console.log(event);

    let name = petForm.elements["name"].value;
    let breed = petForm.elements["breed"].value;
    let age = petForm.elements["age"].value;
    let gender = petForm.elements["gender"].value;
    let service = petForm.elements["service"].value;

console.log(`
    name: ${name}
    breed: ${breed}
    age: ${age}
    gender: ${gender}
    service: ${service}

`);

const row = document.createElement("tr");

row.innerHTML = `
    <td> ${name} </td>
    <td> ${breed} </td>
    <td> ${age} </td>
    <td> ${gender} </td>
    <td> ${service} </td>

`;

body.appendChild(row);

}



