$("#servicesForm").submit(function(event) {
    event.preventDefault();

    var petName     = $("#petName").val().trim();
    var name        = $("#serviceName").val().trim();
    var description = $("#serviceDescription").val().trim();
    var price       = $("#servicePrice").val().trim();

    $("input").removeClass("error");
    $("#successAlert").hide();

    var isValid = true;

    if (petName == "")     { $("#petName").addClass("error");           isValid = false; }
    if (name == "")        { $("#serviceName").addClass("error");        isValid = false; }
    if (description == "") { $("#serviceDescription").addClass("error"); isValid = false; }
    if (price == "")       { $("#servicePrice").addClass("error");       isValid = false; }

    if (isValid) {
        var stored  = localStorage.getItem("services");
        var services = stored ? JSON.parse(stored) : [];

        var newService = { petName, name, description, price };
        services.push(newService);
        localStorage.setItem("services", JSON.stringify(services));

        var row = `
            <tr>
                <td>${petName}</td>
                <td>${name}</td>
                <td>${description}</td>
                <td>$${parseFloat(price).toFixed(2)}</td>
            </tr>
        `;
        $("#servicesBody").append(row);

        $("#successAlert")
            .text("Service registered successfully for " + petName + "!")
            .show();

        $("#servicesForm")[0].reset();
        $("input").removeClass("error");
    }
});

$(document).ready(function() {
    var stored = localStorage.getItem("services");
    if (stored) {
        var services = JSON.parse(stored);
        services.forEach(function(s) {
            var row = `
                <tr>
                    <td>${s.petName}</td>
                    <td>${s.name}</td>
                    <td>${s.description}</td>
                    <td>$${parseFloat(s.price).toFixed(2)}</td>
                </tr>
            `;
            $("#servicesBody").append(row);
        });
    }
});

class Service {
    constructor(petName, name, description, price) {
        this.petName = petName;
        this.name = name;
        this.description = description;
        this.price = price;
    }
}

function loadServices() {
    const stored = localStorage.getItem("services");
    if (!stored) return;

    const services = JSON.parse(stored);
    services.forEach(s => addRowToTable(s));
}

function addRowToTable(service) {
    var row = `
        <tr>
            <td>${service.petName}</td>
            <td>${service.name}</td>
            <td>${service.description}</td>
            <td>$${parseFloat(service.price).toFixed(2)}</td>
        </tr>
    `;
    $("#servicesBody").append(row);
}

$(document).ready(function () {
    loadServices();
});