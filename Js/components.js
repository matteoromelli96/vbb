// ======================================================
// COMPONENTI RIUTILIZZABILI
// ======================================================

// Card Camera
function createRoom(room) {
    return `
        <div class="col-md-6 col-xl-4">
            <div class="room-card-premium">
                <div class="room-img-wrapper">
                    <img
                        src="${room.image}"
                        alt="${room.alt}"
                        loading="lazy">
                    <div class="room-overlay"></div>
                </div>

                <div class="room-content">
                    <h3>${room.title}</h3>
                    <p>${room.description}</p>
                    <div class="d-flex flex-wrap gap-2">
                        ${room.chips.map(chip => createChip(chip)).join("")}
                    </div>
                </div>
            </div>
        </div>
    `;
}

// ======================================================
// Chip Camera
function createChip(chip){
    return `
        <span class="chip">
            <i class="${chip.icon} me-2"></i>
            ${chip.text}
        </span>
    `;
}

// ======================================================
// Servizio
function createService(service){
    return `
        <div class="service-premium-card">
            <div class="service-icon">
                <i class="${service.icon}"></i>
            </div>
            <div>
                <h3>${service.title}</h3>
                <p>${service.description}</p>
            </div>
        </div>
    `;
}

// ======================================================
// Recensione
function createReview(review,index){
    return `
        <div class="carousel-item ${index===0?"active":""}">
            <div class="review-booking-card">
                <div class="review-booking-top">
                    <div class="review-booking-left">
                        <div class="review-booking-title">
                            ${review.title}
                        </div>

                        <div class="review-booking-meta">
                            <span class="review-name">${review.name}</span>
                            <span class="review-sep">•</span>
                            <span>${review.country}</span>
                            <span class="review-sep">•</span>
                            <span>${review.room}</span>
                        </div>
                    </div>

                    <div class="review-score ${review.score<10?"review-score-9":""}">
                        ${review.score}
                    </div>
                </div>

                <div class="review-booking-body">
                    ${review.text}
                </div>
            </div>
        </div>
    `;
}

// ======================================================
// Indicatore carosello
function createIndicator(target,index,active,label){
    return `
        <button
            type="button"
            data-bs-target="${target}"
            data-bs-slide-to="${index}"
            class="${active?"active":""}"
            ${active?'aria-current="true"':""}
            aria-label="${label}">
        </button>
    `;
}