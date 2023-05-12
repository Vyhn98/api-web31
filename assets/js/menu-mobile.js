// Truy cap phan tu
const icMenu = document.querySelector(".menu-mobile");

// Them su kien click
icMenu.addEventListener("click", function() {
    // Truy cap menu-mobile
    const body = document.querySelector("body");
    // Add them 1 class menu-mobile
    body.classList.toggle("change")

}) 