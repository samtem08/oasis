/* MOBILE MENU TOGGLE */
const hamburger = document.getElementById("hamburger");
const menuOverlay = document.getElementById("menuOverlay");
const navMenu = document.querySelector(".navbar nav");

if (hamburger && menuOverlay && navMenu) {
    hamburger.addEventListener("click", function() {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("open");
        menuOverlay.classList.toggle("active");
        document.body.classList.toggle("menu-open");
    });

    // Close menu when clicking overlay
    menuOverlay.addEventListener("click", function() {
        hamburger.classList.remove("active");
        navMenu.classList.remove("open");
        menuOverlay.classList.remove("active");
        document.body.classList.remove("menu-open");
    });

    // Close menu when clicking a link
    navMenu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", function() {
            hamburger.classList.remove("active");
            navMenu.classList.remove("open");
            menuOverlay.classList.remove("active");
            document.body.classList.remove("menu-open");
        });
    });
}

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you! We will contact you shortly.");
    this.reset();
});







function checkAvailability() {
    alert("Checking availability... (connect to booking system)");
}


const guestFilter = document.getElementById("guestFilter");
const priceFilter = document.getElementById("priceFilter");
const rooms = document.querySelectorAll(".room-card");

function filterRooms() {
    rooms.forEach(room => {
        const guests = room.dataset.guests;
        const price = parseInt(room.dataset.price);

        let guestMatch =
            guestFilter.value === "all" || guestFilter.value === guests;

        let priceMatch =
            priceFilter.value === "all" ||
            (priceFilter.value === "low" && price < 100) ||
            (priceFilter.value === "mid" && price >= 100 && price <= 200) ||
            (priceFilter.value === "high" && price > 200);

        room.style.display = guestMatch && priceMatch ? "block" : "none";
    });
}

guestFilter.addEventListener("change", filterRooms);
priceFilter.addEventListener("change", filterRooms);


const amenityCards = document.querySelectorAll(".amenity-card");
amenityCards.forEach(card => observer.observe(card));


const infoItems = document.querySelectorAll(".info-item");
infoItems.forEach(item => observer.observe(item));
