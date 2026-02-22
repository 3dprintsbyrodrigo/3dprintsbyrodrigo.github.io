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
