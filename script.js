document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const closeButton = document.querySelector('.close-btn');

    hamburgerMenu.addEventListener('click', function() {
        this.classList.toggle('active');
        dropdownMenu.classList.toggle('active');
    });

    closeButton.addEventListener('click', function() {
        dropdownMenu.classList.remove('active');
        hamburgerMenu.classList.remove('active');
    });
});

document.querySelector('.dropdown-button').addEventListener('click', function() {
    const dropdownContainer = this.parentElement;
    dropdownContainer.classList.toggle('active');
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        const offset = 60; // Offset for the fixed navbar height

        window.scrollTo({
            top: target.offsetTop - offset,
            behavior: 'smooth'
        });

       
    });
});

document.querySelector('a[href="#section2"]').addEventListener('click', function(e) {
    e.preventDefault();
    
    // Scroll to a specific position (example position: 400px from top)
    window.scrollTo({
        top: 185, // Adjust this value based on your layout
        behavior: 'smooth'
    });
});


document.querySelector('a[href="#section4"]').addEventListener('click', function(e) {
    e.preventDefault();
    
    // Scroll to a specific position (example position: 400px from top)
    window.scrollTo({
        top: 1785, // Adjust this value based on your layout
        behavior: 'smooth'
    });
});

document.querySelector('a[href="#section5"]').addEventListener('click', function(e) {
    e.preventDefault();
    
    // Scroll to a specific position (example position: 400px from top)
    window.scrollTo({
        top: 2600, // Adjust this value based on your layout
        behavior: 'smooth'
    });
});


/*---------------------------------------------------------------------- */
// Toggle dropdown menu visibility
document.addEventListener("DOMContentLoaded", function() {
const dropdownButton = document.querySelector('.section4 .dropdown-button');
const dropdownContainer = document.querySelector('.section4 .dropdown-container');
const dropdownContent = document.querySelector('.section4 .dropdown-content');
const popup = document.querySelector('.section4 .popup-box');
const popupContent = document.querySelector('.section4 .popup-box .popup-content');
const closeButton = document.querySelector('.section4 .popup-box .close-button');

dropdownButton.addEventListener('click', function() {
    dropdownContainer.classList.toggle('active');
});

// Handle item click and show pop-up
dropdownContent.querySelectorAll('a').forEach(function(item) {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        const selectedItem = item.textContent;
        popupContent.textContent = selectedItem;

        dropdownButton.textContent = selectedItem;
        popup.classList.add('show');
        dropdownContent.classList.remove('active');  // Hide dropdown content
    });
});


// Close pop-up
closeButton.addEventListener('click', function() {
    popup.classList.remove('show');
    dropdownButton.textContent = 'Select';
    dropdownContent.classList.add('active');  // Show dropdown content again
});
});


// Close pop-up when clicking outside of it
window.addEventListener('click', function(event) {
    if (event.target === popupBox) {
        popupBox.style.display = 'none';
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const dropdownButton = document.querySelector('.section4 .dropdown-button');
    const dropdownContainer = document.querySelector('.section4 .dropdown-container');

    dropdownButton.addEventListener('click', function() {
        dropdownContainer.classList.toggle('active');
    });
});


