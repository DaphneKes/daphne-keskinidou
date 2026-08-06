const lightbox = document.querySelector(".lightbox");

if (lightbox) {
    const lightboxImg = lightbox.querySelector("img");

    document.querySelectorAll(".gallery img").forEach(img => {
        img.addEventListener("click", () => {
            lightbox.style.display = "flex";
            lightboxImg.src = img.src;
        });
    });

    lightbox.addEventListener("click", () => {
        lightbox.style.display = "none";
    });
}