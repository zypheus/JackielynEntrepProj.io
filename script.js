// script.js

// Simple Image Carousel for the Homepage
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel img');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
}

// Automatically change slides every 5 seconds
setInterval(nextSlide, 5000);

// Show the first slide
showSlide(currentSlide);

// Add to Cart Functionality
let cart = [];

function addToCart(product) {
    cart.push(product);
    alert(`${product} has been added to your cart!`);
}

const addToCartButtons = document.querySelectorAll('.product-card button');

addToCartButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const productName = event.target.parentElement.querySelector('h3').textContent;
        addToCart(productName);
    });
});

// Form Validation for Careers Section
const applyButtons = document.querySelectorAll('.job-card button');

applyButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const jobCard = event.target.parentElement;
        const jobTitle = jobCard.querySelector('h3').textContent;

        const apply = confirm(`Do you want to apply for the position of ${jobTitle}?`);

        if (apply) {
            const name = prompt("Enter your name:");
            const email = prompt("Enter your email:");

            if (name && email) {
                alert(`Thank you, ${name}! Your application for ${jobTitle} has been submitted.`);
            } else {
                alert('Please provide valid information.');
            }
        }
    });
});
