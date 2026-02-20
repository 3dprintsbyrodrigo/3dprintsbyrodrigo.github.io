document.addEventListener("DOMContentLoaded", function () {
    // LIGHTBOX GALERÍA
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = lightbox?.querySelector("img");
    const closeBtn = lightbox?.querySelector(".close");

    document.querySelectorAll(".gallery img").forEach(img => {
        img.addEventListener("click", () => {
            lightbox.style.display = "flex";
            lightboxImg.src = img.src;
        });
    });

    closeBtn?.addEventListener("click", () => {
        lightbox.style.display = "none";
    });

    // MODAL FORMULARIO GOOGLE
    const modal = document.getElementById("formModal");
    const openBtn = document.getElementById("openForm");
    const closeModal = modal?.querySelector(".close");

    openBtn?.addEventListener("click", () => {
        modal.style.display = "flex";
    });

    closeModal?.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target == modal) {
            modal.style.display = "none";
        }
    });
});
