function changeTitle(){
    //testing
    //alert("is working");

    //get the html element with the id="title" and store it in a variable
    let title = document.getElementById("title");

    // change the text inside the title element 
    //title.innerHTML = "<i> hello, cohort 66!  <i>";
    title.textContent = "TEXT";

    //get all the elements with a class="text", and store them in a variable
    let paragraphs = document.getElementsByClassName("text")

    paragraphs[0].style.color = "blue";
    paragraphs[1].style.color = "red";
}

function addItem() {
    let value = document.getElementById("itemInput").value;
    let list = document.getElementById("list");

    //create html elements in the JS --> createElement
    let li = document.createElement("li");

    li.innerHTML = value;
    // add the list item to the list 
    list.appendChild(li);

    //clear the input field
    document.getElementById('itemInput').value = '';


}
