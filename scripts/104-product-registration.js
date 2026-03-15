// identify/select the form
const productForm = document.querySelector("form");
//search the html element

//identify the table body 
const body = document.getElementById("body");

//constructure
function Product(productName, productPrice, productCategory){
    this.name = productName;
    this.price = productPrice;
    this.category = productCategory;
}

// function to retreve the information
function registerProduct(event) {

    event.preventDefault();
    console.log(event);

    //use the name of the inputs to get the value 
    let name = productForm.elements["productName"].value;
    let price = productForm.elements["productPrice"].value;
    let category = productForm.elements["productCategory"].value;

    //create the objects
    const newProduct = new Product(name, price, category);

    //test: console log the values
    console.log(`
        Name: ${newProduct.name}
        Price: ${newProduct.price}
        Category: ${newProduct.category}
    
    `);

    //use the values --> db - email - brower

    //create the row 
    const row = document.createElement("tr");

    row.innerHTML = `
        <td> ${newProduct.name} </td>
        <td> ${newProduct.price} </td>
        <td> ${newProduct.category} </td>
    
    `;

    body.appendChild(row);
}


