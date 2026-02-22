// Animación suave para secciones
const cards = document.querySelectorAll('.proceso-grid > div, .material-card, .capacidad');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('visible');
        }
    });
},{threshold:0.1});

cards.forEach(el => observer.observe(el));
