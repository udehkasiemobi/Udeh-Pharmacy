function contactPharmacy() {
    const contactSection = document.getElementById("contact");

    contactSection.scrollIntoView({
        behavior: "smooth"
    });
}


function showProductInfo(product) {

    const modal = document.getElementById("productModal");
    const title = document.getElementById("modalTitle");
    const description = document.getElementById("modalDescription");
    const icon = document.getElementById("modalIcon");

    const productInfo = {
        "Medicines": {
            icon: "💊",
            description: "Ask our pharmacy team about available medicines and general health products."
        },

        "Vitamins & Wellness": {
            icon: "🌿",
            description: "Explore general wellness products and vitamins available at Udeh Pharmacy."
        },

        "Personal Care": {
            icon: "🧴",
            description: "Find everyday hygiene, skincare, and personal care essentials."
        },

        "Baby Care": {
            icon: "👶",
            description: "Explore everyday baby care and family essentials."
        }
    };

    title.textContent = product;
    icon.textContent = productInfo[product].icon;
    description.textContent = productInfo[product].description;

    modal.style.opacity = "1";
    modal.style.visibility = "visible";
}


function closeProductInfo() {

    const modal = document.getElementById("productModal");

    modal.style.opacity = "0";
    modal.style.visibility = "hidden";
}


function toggleMenu() {

    const nav = document.querySelector("nav");

    nav.classList.toggle("mobile-open");
}


const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        const nav = document.querySelector("nav");

        nav.classList.remove("mobile-open");

    });

});


function sendMessage(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    alert("Thank you, " + name + "! Your message has been received.");

    event.target.reset();
}

const productModal = document.getElementById("productModal");

productModal.addEventListener("click", function(event) {

    if (event.target === productModal) {
        closeProductInfo();
    }

});