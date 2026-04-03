
const images = [
    "/images/DSC01192.jpg",
    "/images/DSC01307.jpg",
    "/images/DSC01349.jpg",
    "/images/DSC01369.jpg",
    "/images/DSC01392.jpg",
    "/images/DSC01456.jpg",
    "/images/DSC01466.jpg",
    "/images/DSC01475.jpg",
    "/images/DSC01481.jpg",
    "/images/DSC01482.jpg",
    "/images/DSC01511.jpg",
    "/images/DSC01554.jpg",
    "/images/DSC01557.jpg",
    "/images/DSC01562.jpg",
    "/images/DSC01576.jpg",
    "/images/DSC01589.jpg",
    "/images/DSC01640.jpg",
    "/images/DSC01643.jpg",
    "/images/DSC01966.jpg",
];

let index = 0;
const img = document.getElementById("slider-image");

document.querySelector(".next").onclick = (e) => {
    e.preventDefault();
    index = (index + 1) % images.length;
    img.src = images[index];
};

document.querySelector(".prev").onclick = (e) => {
    e.preventDefault();
    index = (index - 1 + images.length) % images.length;
    img.src = images[index];
};

// show/hide extra buttons in hero section
const showMoreBtn = document.getElementById('show-more-btn');
const extraButtons = document.getElementById('extra-buttons');
if (showMoreBtn && extraButtons) {
  showMoreBtn.onclick = () => {
    const isHidden = extraButtons.style.display === 'none' || extraButtons.style.display === '';
    extraButtons.style.display = isHidden ? 'flex' : 'none';
    showMoreBtn.textContent = isHidden ? 'Hide Options' : 'Show Options';
  };
}
