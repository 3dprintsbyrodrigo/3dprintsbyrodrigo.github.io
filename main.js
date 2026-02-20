document.addEventListener("DOMContentLoaded", function() {
    AOS.init({ duration: 1000, once: true, easing: 'ease-in-out' });

    // Slideshow simple en index
    const slides = document.querySelectorAll('.slideshow img');
    let current = 0;
    if(slides.length > 0){
        slides[current].style.display = 'block';
        setInterval(() => {
            slides[current].style.display = 'none';
            current = (current+1)%slides.length;
            slides[current].style.display = 'block';
        }, 3000);
    }

    // Lightbox
    const galleryItems = document.querySelectorAll('.gallery-item img');
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    const lbImg = document.createElement('img');
    const closeBtn = document.createElement('span');
    closeBtn.textContent = '×';
    closeBtn.className = 'close';
    lightbox.appendChild(lbImg);
    lightbox.appendChild(closeBtn);
    document.body.appendChild(lightbox);

    galleryItems.forEach(img=>{
        img.addEventListener('click', ()=>{
            lbImg.src = img.src;
            lightbox.style.display = 'flex';
        });
    });
    closeBtn.addEventListener('click', ()=> lightbox.style.display='none');
    lightbox.addEventListener('click', e => { if(e.target===lightbox) lightbox.style.display='none'; });
});
