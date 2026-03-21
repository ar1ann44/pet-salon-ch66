$("#servicesForm").submit(function(event) {
    event.preventDefault(); 

    // 1. get the values of the inputs
    const name = $("#serviceName").val().trim();

    // 2. validate if the values are empty or not
    // 2.1 change the borders of the inputs to red 
    //!name
    if (name == ""){
        alert("the value is required");
    } else {
        alert("the value is: ${name}");
    }
    
});