document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.carousel');

    carousels.forEach(carousel => {
        let currentIndex = 0;
        const totalItems = carousel.querySelectorAll('.item').length;

        function updateCarousel() {
            const carouselWidth = carousel.parentElement.offsetWidth;
            carousel.style.transform = `translateX(-${currentIndex * carouselWidth}px)`;
        }

        function autoPlayCarousel() {
            currentIndex = (currentIndex + 1) % totalItems;
            updateCarousel();
        }


        setInterval(autoPlayCarousel, 5000);
    });
});
