const aiDescriptions = {
"Peri Peri": "A fiery blend of chilli and herbs delivering a bold spicy kick.",
"Chocolate": "A crazy fusion of sweet cocoa and crispy wafers Gen-Z exclusive!",
"Pani Puri": "Tangy, minty, spicy burst of street-food magic.",
"Chat Masala": "Desi masala twist with irresistible chatpata flavour.",
"Pizza": "Cheesy, herby flavour inspired by Italian pizza nights.",
"Burger": "Smoky, juicy flavour inspired by classic American burgers.",
"Healthy Multigrain": "A nutritious mix of grains with a light seasoned taste.",
"Korean Spicy": "Gochujang-inspired spicy-sweet Korean wave flavour.",
"Hot American Paprika": "Bold paprika heat with a smoky western touch.",
"Lemon Chilli": "Zesty fresh lemon blended with spicy chilli.",
"Tomato Punch": "Rich tomato tang with a punchy savoury kick."
};

function generateFlavor() {
const flavor = document.getElementById("flavorSelect").value;
document.getElementById("flavorDescription").innerText = aiDescriptions[flavor];
document.getElementById("packetPreview").innerText = flavor + " Pack";
}

function changeColor() {
const color = document.getElementById("packColor").value;
document.getElementById("packetPreview").style.background = color;
}

function addToCart() {
document.getElementById("cartStatus").innerText = "Added to cart!";
}

function placeOrder() {
let name = document.getElementById("name").value;
let address = document.getElementById("address").value;
let phone = document.getElementById("phone").value;

if (!name || !address || !phone) {
document.getElementById("orderStatus").innerText = "Please fill all details";
return;
}

document.getElementById("orderStatus").innerText = "Order placed! Your custom Balaji pack will be delivered soon.";
}