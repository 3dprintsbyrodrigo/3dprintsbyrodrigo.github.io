// Animación suave scroll reveal
const elements = document.querySelectorAll('.card, .proceso-grid > div, .material-card, .capacidad');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('visible');
        }
    });
},{ threshold: 0.1 });

elements.forEach(el => observer.observe(el));

// Lightbox
import('https://cdn.jsdelivr.net/npm/glightbox/dist/js/glightbox.min.js').then(() => {
    const lightbox = GLightbox();
});

// Burger menu
const burger = document.querySelector('.burger');
const navUl = document.querySelector('nav ul');

burger.addEventListener('click', () => {
    navUl.classList.toggle('active');
    burger.classList.toggle('active');
});
