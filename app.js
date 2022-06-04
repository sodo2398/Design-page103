const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}


function initmap(){
    map = new google.maps.map(document.getElementById("map"),{ center: 
    {lat: 51.500729, lng: -0.124625},
    zoom:8,});
}