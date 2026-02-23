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
if (typeof Fancybox !== 'undefined') {
    Fancybox.bind("[data-fancybox]", {
        // Options
    });
}

// Burger menu
const burger = document.querySelector('.burger');
const navUl = document.querySelector('nav ul');

burger.addEventListener('click', () => {
    navUl.classList.toggle('active');
    burger.classList.toggle('active');
});

// Back to Top Button
const backToTopBtn = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
