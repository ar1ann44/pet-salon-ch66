let salon = {
    name: "The Fashion Pet",
    hours: {
        open: "9:00 AM",
        close: "7:00 PM"
    },
    phone: "664-123-4567",
    address: {
        street: "123 Main St",
        city: "Tijuana",
        state: "Baja California",
        zip: "22000"
    }
};

function displaySalonInfo(){
    let info = salon.name + " is open from " + salon.hours.open + 
    " to " + salon.hours.close + ". Phone: " + salon.phone +
    ". Address: " + salon.address.street + ", " + salon.address.city +
    ", " + salon.address.state + " " + salon.address.zip + ".";

    document.getElementById("salonInfo").innerHTML = info;
}