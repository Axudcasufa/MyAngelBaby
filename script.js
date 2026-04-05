
const albumImages = [
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

const patientHistoryImages = [
    "/images/gallery (1).jpg",
    "/images/gallery (2).jpg",
    "/images/gallery (3).jpg",
    "/images/gallery (4).jpg",
    "/images/gallery (5).jpg",
    "/images/gallery (6).jpg",
    "/images/gallery (7).jpg",
    "/images/gallery (8).jpg",
    "/images/gallery (9).jpg",
    "/images/gallery (10).jpg",
    "/images/gallery (11).jpg",
    "/images/gallery (12).jpg",
    "/images/gallery (13).jpg",
    "/images/gallery (14).jpg",
];

let index = 0;
const img = document.getElementById("slider-image");
let autoPlayTimeout = null;
const autoPlayDelay = 3000; // Change image every 3 seconds
let images = [];

const photoGallery = document.querySelector(".photo-gallery");
const albumGallery = document.querySelector(".album");

if (photoGallery) {
    images = patientHistoryImages;
} else if (albumGallery) {
    images = albumImages;
}


// Initialize dots
function initializeDots() {
    const dotsContainer = document.getElementById("gallery-dots");
    if (!dotsContainer) return;
    
    dotsContainer.innerHTML = "";
    images.forEach((_, i) => {
        const dot = document.createElement("div");
        dot.className = "dot";
        if (i === index) dot.classList.add("active");
        dot.onclick = (e) => {
            e.preventDefault();
            stopAutoPlay();
            index = i;
            updateGallery();
            startAutoPlay();
        };
        dotsContainer.appendChild(dot);
    });
}

// Update gallery display
function updateGallery() {
    if (!img) return;
    img.src = images[index];
    
    // Update active dot
    const dots = document.querySelectorAll(".dot");
    dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
    });
}

// Function to show next image
function showNextImage() {
    index = (index + 1) % images.length;
    updateGallery();
}

// Function to show previous image
function showPrevImage() {
    index = (index - 1 + images.length) % images.length;
    updateGallery();
}

// Start auto-play
function startAutoPlay() {
    if (!img) return;
    stopAutoPlay();
    autoPlayTimeout = setInterval(() => {
        showNextImage();
    }, autoPlayDelay);
}

// Stop auto-play
function stopAutoPlay() {
    if (autoPlayTimeout) {
        clearInterval(autoPlayTimeout);
        autoPlayTimeout = null;
    }
}

if (img) {
    const nextButton = document.querySelector(".next");
    const prevButton = document.querySelector(".prev");

    if (nextButton) {
        nextButton.onclick = (e) => {
            e.preventDefault();
            stopAutoPlay();
            showNextImage();
            startAutoPlay();
        };
    }

    if (prevButton) {
        prevButton.onclick = (e) => {
            e.preventDefault();
            stopAutoPlay();
            showPrevImage();
            startAutoPlay();
        };
    }

    const hoverCard = document.querySelector(".album-card, .gallery-card");
    if (hoverCard) {
        hoverCard.addEventListener("mouseenter", () => {
            stopAutoPlay();
        });

        hoverCard.addEventListener("mouseleave", () => {
            startAutoPlay();
        });
    }

    initializeDots();
    startAutoPlay();
}

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

// Hamburger menu toggle
const hamburgerBtn = document.getElementById('hamburger-btn');
const navLinks = document.querySelector('.nav-links');

if (hamburgerBtn && navLinks) {
  hamburgerBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburgerBtn.classList.toggle('active');
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!hamburgerBtn.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('active');
      hamburgerBtn.classList.remove('active');
    }
  });

  // Close menu when clicking a link
  navLinks.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      navLinks.classList.remove('active');
      hamburgerBtn.classList.remove('active');
    }
  });
}
