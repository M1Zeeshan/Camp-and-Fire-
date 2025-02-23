   // Select both icon elements  
   const themeToggle = document.getElementById('theme-toggle');  

   // Change the body class based on the checkbox state  
   themeToggle.addEventListener('change', () => {  
       if (themeToggle.checked) {  
           document.body.classList.remove('light-mode');  
           document.body.classList.add('dark-mode');  
       } else {  
           document.body.classList.remove('dark-mode');  
           document.body.classList.add('light-mode');  
       }  
   });   

   // Add click event listener to both icons  
   moonIcon.addEventListener('click', toggleTheme);  
   sunIcon.addEventListener('click', toggleTheme);

// Smooth Scrolling to Sections
const sections = document.querySelectorAll('section');
const nav_Links = document.querySelectorAll('nav a');

nav_Links.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetSection = document.getElementById(link.getAttribute('href').substring(1));
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

// Toggle Menu with Hamburger Button
const menuToggler = document.getElementById('menu-toggler');
const navbar = document.querySelector('.navbar');

menuToggler.addEventListener('change', () => {
  navbar.classList.toggle('active');
});

// Active Navigation Link
const navLinks = document.querySelectorAll('nav a');

nav_Links.forEach(link => {
  link.addEventListener('click', () => {
    nav_Links.forEach(link => link.classList.remove('active'));
    link.classList.add('active');
  });
});

// Accordion Sections
const accordionSections = document.querySelectorAll('[data-accordion]');

accordionSections.forEach(section => {
  section.addEventListener('click', () => {
    section.classList.toggle('active');
  });
});

// Image Slider/Carousel (Example using Swiper)
const swiper = new Swiper('.swiper-container', {
  // Swiper options (refer to Swiper documentation for customization)
});

// Simple Contact Form Validation
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name && email && message) {
    // Submit form data (e.g., using AJAX)
    console.log('Form submitted:', name, email, message);
  } else {
    // Display error messages
    alert('Please fill in all required fields.');
  }
});

// Dynamic Greeting Based on Time of Day
const greetingElement = document.getElementById('greeting');

function greetUser() {
  const currentTime = new Date();
  const hour = currentTime.getHours();

  if (hour < 12) {
    greetingElement.textContent = "Good morning!";
  } else if (hour < 18) {
    greetingElement.textContent = "Good afternoon!";
  } else {
    greetingElement.textContent = "Good evening!";
  }
}

greetUser();

// Dynamically Populate Lists
const serviceList = document.getElementById('service-list');
const servicesData = [
  { name: "Tent Rental", description: "Rent high-quality tents for your camping adventures." },
  // ... other service data
];

servicesData.forEach(service => {
  const listItem = document.createElement('li');
  listItem.innerHTML = `<h3>${service.name}</h3><p>${service.description}</p>`;
  serviceList.appendChild(listItem);
});

// Live Text Search
const searchInput = document.getElementById('search-input');
const searchableContent = document.querySelectorAll('.searchable-content');

searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();
  searchableContent.forEach(content => {
    if (content.textContent.toLowerCase().includes(searchTerm)) {
      content.style.display = 'block';
    } else {
      content.style.display = 'none';
    }
  });
});

// Progress Bar
const progressBar = document.getElementById('progress-bar');
const progressValue = document.getElementById('progress-value');

window.addEventListener('scroll', () => {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight;
  const clientHeight = document.documentElement.clientHeight;
  const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
  progressBar.style.width = `${progress}%`;
  progressValue.textContent = `${progress.toFixed(0)}%`;
});

// Error Handling (Example)
window.addEventListener('error', (event) => {
  console.error('Error:', event.message);
  // Display an error message to the user
});

// Enhance User Experience (Example)
// Implement smooth scrolling for other elements
// Add tooltips or pop-ups
// Use animations and transitions for visual effects
// Consider accessibility features

console.log("heloe");


// script.js  

// Select both icon elements  

const sunIcon = document.getElementById('sun-icon');  
const moonIcon = document.getElementById('moon-icon');  

themeToggle.addEventListener('click', function (e) {  
    e.preventDefault();  
    document.body.classList.toggle('dark-theme'); // Toggle dark theme class  

    // Toggle icon visibility  
    if (document.body.classList.contains('dark-theme')) {  
        sunIcon.style.opacity = '0';  
        sunIcon.style.transform = 'scale(0)';  
        moonIcon.style.opacity = '1';  
        moonIcon.style.transform = 'scale(1)';  
    } else {  
        sunIcon.style.opacity = '1';  
        sunIcon.style.transform = 'scale(1)';  
        moonIcon.style.opacity = '0';  
        moonIcon.style.transform = 'scale(0)';  
    }  
});
