document.addEventListener("DOMContentLoaded", function () {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = lightbox?.querySelector("img");
    const closeBtn = document.querySelector(".close");

    document.querySelectorAll(".gallery img").forEach(img => {
        img.addEventListener("click", () => {
            lightbox.style.display = "flex";
            lightboxImg.src = img.src;
        });
    });

    closeBtn?.addEventListener("click", () => {
        lightbox.style.display = "none";
    });
});
