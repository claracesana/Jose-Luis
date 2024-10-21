document.addEventListener('DOMContentLoaded', function() {
    const carouselContent = document.querySelector('.carousel-content');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let index = 0;

    function showNextItem() {
        index = (index + 1) % carouselContent.children.length;
        updateCarousel();
    }

    function showPrevItem() {
        index = (index - 1 + carouselContent.children.length) % carouselContent.children.length;
        updateCarousel();
    }

    function updateCarousel() {
        const offset = -index * 100;
        carouselContent.style.transform = `translateX(${offset}%)`;
    }

    nextButton.addEventListener('click', showNextItem);
    prevButton.addEventListener('click', showPrevItem);

    setInterval(showNextItem, 800000); // Cambia de elemento cada 80 segundos
});