//save data
$("#saveButton").click(function (e) {
    e.preventDefault();

    const name = $("#userName").val().trim();
    localStorage.setItem("username", name);

    alert(`${name} has been saved`);
    //$("form").get(0).reset();  

    document.querySelector("form").reset();
});


//retrieve data
$("#loadButton").click(function (e){
    e.preventDefault();

    const stroredUsurname = localStorage.getItem("username");

    if(stroredUsurname){
        $("#result").text(stroredUsurname);
    } else {
        $("#result").text("No data found");
    }

});


//clear data
$("#clearButton").click(function (e){
    e.preventDefault();

    localStorage.removeItem("username");
    location.reload();

});
