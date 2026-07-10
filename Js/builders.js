// ======================================================
// CARICAMENTO SEZIONE HERO PAGINA INDEX
// ======================================================
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

// ======================================================
// CARICAMENTO SEZIONE GALLERIA PAGINA INDEX
// ======================================================
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

// ======================================================
// CARICAMENTO SEZIONE RECENSIONI PAGINA INDEX
// ======================================================
function buildReviews(){
    const carousel=document.querySelector("#reviewsCarousel .carousel-inner");
    const indicators=document.querySelector("#reviewsCarousel .carousel-indicators");
    if(!carousel || !indicators) return;
    carousel.innerHTML=reviews.map(createReview).join("");
    indicators.innerHTML=reviews
        .map((r,i)=>createIndicator(
            "#reviewsCarousel",
            i,
            i===0,
            `Recensione ${i+1}`
        ))
        .join("");
}

// ======================================================
// CARICAMENTO SEZIONE CAMERE PAGINA INDEX
// ======================================================
function buildRooms(){
    const container=document.querySelector("#roomsContainer");
    if(!container) return;
    container.innerHTML=rooms.map(createRoom).join("");
}

// ======================================================
// CARICAMENTO SEZIONE SERVIZIO PAGINA INDEX
// ======================================================
function buildServices(){
    const container=document.querySelector("#servicesContainer");
    if(!container) return;
    container.innerHTML=services.map(createService).join("");
}

// ======================================================
// DATI SITO
// ======================================================
function buildSiteInfo() {
    buildContacts();
    buildAddress();
    buildBooking();
    buildMaps();
    buildCompany();
    buildFooter();
    buildSeo();
}

// ======================================================
// CONTATTI
// ======================================================
function buildContacts() {
    // Telefono
    document.querySelectorAll(".site-phone").forEach(el => {
        el.href = `tel:${site.tel}`;
        if (el.innerHTML.trim() === "") {
            el.innerHTML = `<i class="fa-solid fa-phone me-2"></i>${site.phoneFormatted}`;
        }
    });

    // Telefono testuale
    document.querySelectorAll(".site-phone-text").forEach(el => {
        el.textContent = site.phoneFormatted;
    });

    // WhatsApp
    document.querySelectorAll(".site-whatsapp").forEach(el => {
        el.href = site.whatsappUrl;
        el.target = "_blank";
        el.rel = "noopener";
    });

    // Email
    document.querySelectorAll(".site-email").forEach(el => {
        if (el.tagName === "A") {
            el.href = site.mailto;
        }
        el.textContent = site.email;
    });

}

// ======================================================
// INDIRIZZO
// ======================================================
function buildAddress() {
    document.querySelectorAll(".site-address").forEach(el => {
        el.textContent = site.fullAddress;
    });

    document.querySelectorAll(".site-address-complete").forEach(el => {
        el.textContent = site.fullAddressComplete;
    });
}

// ======================================================
// BOOKING
// ======================================================
function buildBooking() {
    document.querySelectorAll(".site-booking").forEach(el => {
        el.href = site.bookingUrl;
        el.target = "_blank";
        el.rel = "noopener";
    });
}

// ======================================================
// MAPPA
// ======================================================
function buildMaps() {
    document.querySelectorAll(".site-map").forEach(el => {
        el.src = site.mapsEmbed;
    });

    document.querySelectorAll(".site-maps").forEach(el => {
        el.href = site.mapsLink;
        el.target = "_blank";
        el.rel = "noopener";
    });
}

// ======================================================
// AZIENDA
// ======================================================
function buildCompany() {
    document.querySelectorAll(".site-company").forEach(el => {
        el.textContent = site.legalName;
    });

    document.querySelectorAll(".site-name").forEach(el => {
        el.textContent = site.name;
    });

    document.querySelectorAll(".site-vat").forEach(el => {
        el.textContent = site.vat;
    });
}

// ======================================================
// FOOTER
// ======================================================
function buildFooter() {
    document.querySelectorAll(".site-year").forEach(el => {
        el.textContent = site.copyrightYear;
    });
}

// ======================================================
// SEO
// ======================================================
function buildSeo() {
    document.title = site.seo.title;
    const metas = {
        description: site.seo.description,
        keywords: site.seo.keywords.join(", "),
        author: site.seo.author,
        "theme-color": site.seo.themeColor,
        robots: "index,follow"
    };

    Object.entries(metas).forEach(([name, value]) => {
        const meta = document.querySelector(`meta[name="${name}"]`);
        if (meta) {
            meta.setAttribute("content", value);
        }
    });

    const canonical = document.querySelector("link[rel='canonical']");
    if (canonical) {
        canonical.href = site.seo.canonical;
    }

    const og = {
        "og:title": site.seo.title,
        "og:description": site.seo.description,
        "og:type": site.seo.type,
        "og:url": site.seo.canonical,
        "og:image": site.seo.ogImage,
        "og:locale": site.seo.locale,
        "og:site_name": site.name
    };

    Object.entries(og).forEach(([property, value]) => {
        const meta = document.querySelector(`meta[property="${property}"]`);
        if (meta) {
            meta.setAttribute("content", value);
        }
    });

    const twitter = {
        "twitter:title": site.seo.title,
        "twitter:description": site.seo.description,
        "twitter:image": site.seo.ogImage
    };

    Object.entries(twitter).forEach(([name, value]) => {
        const meta = document.querySelector(`meta[name="${name}"]`);
        if (meta) {
            meta.setAttribute("content", value);
        }
    });
}