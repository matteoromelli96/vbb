// Funzione di avvio di tutte le chiamate JS
document.addEventListener("DOMContentLoaded", () => {
    buildHero();
    buildGallery();
    buildReviews();
});

// Funzione per la creazione della parte iniziale della pagina HERO
function buildHero() {
    const marquee = document.querySelector(".marquee-track");
    marquee.innerHTML = "";

    heroImages.forEach(image => {
        marquee.innerHTML += `<img src="${image}" alt="" loading="lazy">`;
    });

    // duplica automaticamente
    heroImages.forEach(image => {
        marquee.innerHTML += `<img src="${image}" alt="" loading="lazy">`;
    });

}

// Funzione per la creazione del carosello delle foto della GALLERIA
function buildGallery() {
    const carousel = document.querySelector("#galleryCarousel .carousel-inner");
    const thumbs = document.querySelector("#galleryCarousel .carousel-indicators");

    carousel.innerHTML = "";
    thumbs.innerHTML = "";

    gallery.forEach((photo, index) => {

        carousel.innerHTML += `
            <div class="carousel-item ${index === 0 ? "active" : ""}">
                <div class="gallery-frame">
                    <img
                        src="${photo.image}"
                        class="d-block w-100 gallery-img-premium"
                        alt="${photo.alt}"
                        loading="lazy">
                </div>
            </div>`;

        thumbs.innerHTML += `
            <button type="button" data-bs-target="#galleryCarousel" data-bs-slide-to="${index}" class="${index === 0 ? "active" : ""}" ${index === 0 ? 'aria-current="true"' : ""} aria-label="${photo.alt}">
                <img src="${photo.image}" alt="${photo.alt}" loading="lazy">
            </button>`;
    });
}

// Funzione per la creazione automatica delle RECENSIONI
function buildReviews() {
    const carousel = document.querySelector("#reviewsCarousel .carousel-inner");
    const indicators = document.querySelector("#reviewsCarousel .carousel-indicators");

    carousel.innerHTML = "";
    indicators.innerHTML = "";

    let carouselHtml = "";
    let indicatorsHtml = "";

    reviews.forEach((review, index) => {

        carouselHtml += `
            <div class="carousel-item ${index === 0 ? "active" : ""}">
                <div class="review-booking-card">
                    <div class="review-booking-top">
                        <div class="review-booking-left">
                            <div class="review-booking-title"> ${review.title} </div>

                            <div class="review-booking-meta">
                                <span class="review-name">${review.name}</span>
                                <span class="review-sep">•</span>
                                <span>${review.country}</span>
                                <span class="review-sep">•</span>
                                <span>${review.room}</span>
                            </div>
                        </div>

                        <div class="review-score ${review.score < 10 ? "review-score-9" : ""}"> ${review.score} </div>
                    </div>

                    <div class="review-booking-body"> ${review.text} </div>
                </div>
            </div>`;

        indicatorsHtml += `
            <button
                type="button"
                data-bs-target="#reviewsCarousel"
                data-bs-slide-to="${index}"
                class="${index === 0 ? "active" : ""}"
                ${index === 0 ? 'aria-current="true"' : ""}
                aria-label="Recensione ${index + 1}">
            </button>`;

    });

    carousel.innerHTML = carouselHtml;
    indicators.innerHTML = indicatorsHtml;
}