document.querySelector('.burger').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
    }
});
/////////////////////////////////////////////////////////////
const carouselItems = document.querySelectorAll('.carousel-item');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;

function updateCarousel(index) {
  carouselItems.forEach((item, i) => {
    item.classList.toggle('active', i === index);
    dots[i].classList.toggle('active', i === index);
  });
}

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index;
    updateCarousel(currentIndex);
  });
});

// Initialize the carousel
updateCarousel(currentIndex);
