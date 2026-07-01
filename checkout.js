// Get cart from localStorage
const cart = JSON.parse(localStorage.getItem("cart")) || [];

const orderItems = document.getElementById("order-items");
const subtotal = document.getElementById("subtotal");
const deliveryFee = document.getElementById("deliveryFee");
const total = document.getElementById("total");

let subtotalAmount = 0;
let deliveryAmount = 500;

// Display Cart Items
cart.forEach(item => {

    subtotalAmount += item.price;

    const p = document.createElement("p");
    p.textContent = `${item.name} - ₦${item.price}`;

    orderItems.appendChild(p);

});

subtotal.textContent = subtotalAmount;
deliveryFee.textContent = deliveryAmount;
total.textContent = subtotalAmount + deliveryAmount;
const locationBtn = document.getElementById("locationBtn");
const locationText = document.getElementById("locationText");
const address = document.getElementById("address");

locationBtn.addEventListener("click", () => {

    if(navigator.geolocation){

        navigator.geolocation.getCurrentPosition(showPosition, showError);

    }else{

        alert("Geolocation is not supported.");

    }

});

function showPosition(position){

    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    locationText.innerHTML =
    `
    Latitude: ${latitude.toFixed(5)} <br>
    Longitude: ${longitude.toFixed(5)}
    `;

    address.value =
    `Latitude: ${latitude.toFixed(5)}, Longitude: ${longitude.toFixed(5)}`;
}

function showError(){

    alert("Unable to retrieve your location.");

}
document.getElementById("payBtn")
.addEventListener("click", () => {

    const name =
    document.getElementById("name").value;

    const phone =
    document.getElementById("phone").value;

    const email =
    document.getElementById("email").value;

    const address =
    document.getElementById("address").value;

    if(name === "" || phone === "" || email === "" || address === ""){

        alert("Please complete all fields.");

        return;
    }

    alert(
`Order Successful!

Thank you ${name}!

Your order will be delivered shortly.`
    );

    localStorage.removeItem("cart");

    window.location.href = "food.html";

});