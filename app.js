const menuButton = document.querySelector(".hamburger");
const menuPanel = document.querySelector(".menu-panel");
const menuLinks = menuPanel.querySelectorAll("a");

menuButton.addEventListener("click", () => {
    // toggle tagastab true, kui klass lisati, ja false, kui klass eemaldati.
    const isOpen = menuPanel.classList.toggle("active");
    menuButton.setAttribute("aria-expanded", String(isOpen));
});

function closeMenu() {
    menuPanel.classList.remove("active");
    menuButton.setAttribute("aria-expanded", "false");
}

document.addEventListener("click", (event) => {
    if (!menuPanel.contains(event.target) && !menuButton.contains(event.target)) {
        closeMenu();
    }
});

for (const link of menuLinks) {
    link.addEventListener("click", () => {
        closeMenu();
        menuButton.focus();
    });
}

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuPanel.classList.contains("active")) {
        closeMenu();
        menuButton.focus();
    }
});

const images = [
    { file: "1.webp", alt: "Computer setup with pink lighting" },
    { file: "2.webp", alt: "Person working on a laptop" },
    { file: "3.webp", alt: "Website wireframes drawn on paper" },
    { file: "4.webp", alt: "Code on a dark screen" },
    { file: "5.webp", alt: "Web design open on a desktop monitor" },
    { file: "6.webp", alt: "Miniature shopping cart and white bag" },
];

const nextImageButton = document.querySelector(".frame-next");
const frameImage = document.querySelector("#frame");
const frameCount = document.querySelector(".frame-count");
const frameDescription = document.querySelector(".frame-status .visually-hidden");
const gallery = document.querySelector(".works-gallery");

let currentImageIndex = 0;

nextImageButton.addEventListener("click", () => {
    currentImageIndex += 1;

    // Viimase pildi järel alustame uuesti indeksist 0.
    if (currentImageIndex === images.length) {
        currentImageIndex = 0;
    }

    const image = images[currentImageIndex];
    frameImage.src = "images/" + image.file;
    frameImage.alt = image.alt;
    frameCount.textContent = (currentImageIndex + 1) + " / " + images.length;
    frameDescription.textContent = ". " + image.alt + ".";
});

for (const image of images) {
    const thumbnail = document.createElement("img");
    thumbnail.src = "images/" + image.file;
    thumbnail.alt = image.alt;
    thumbnail.loading = "lazy";
    gallery.append(thumbnail);
}
