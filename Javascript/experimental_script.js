//Section for handling the drag and drop functionality of the navigation bar
const nav = document.getElementById("navigation_container");

let isDragging = false;
let offsetY = 0;

nav.addEventListener("mousedown", (event) => {
    isDragging = true;
    offsetY = event.clientY - nav.getBoundingClientRect().top;
    nav.style.cursor = "grabbing";
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    nav.style.cursor = "grab";
});

document.addEventListener("mousemove", (event) => {
    if (isDragging) {
        const newTop = event.clientY - offsetY;


        if (newTop >= 0) {
            nav.style.top = `${newTop}px`;
        }
    }
});

//section for handling slider movement
const targetLink = document.querySelectorAll('#nav_list a')[1];
const slider = document.getElementById('slider');
const rect = targetLink.getBoundingClientRect();
slider.style.top = `${rect.bottom + 10 + window.scrollY}px`; // Places the SVG just below the link.
slider.style.left = `${rect.left + window.scrollX}px`; // Aligns the SVG horizontally with the link.
