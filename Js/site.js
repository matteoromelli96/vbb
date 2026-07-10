// ======================================================
// CONFIGURAZIONE GENERALE SITO
// Modificando questo file su personalizza tutto il sito.
// ======================================================

const site = {
    // ======================================================
    // AZIENDA
    // ======================================================
    company: {
        shortName: "VB&B",
        slogan: "Bed & Breakfast",
        legalName: "La Villetta SNC di Casalini Rino & C.",
        vat: "02283230981"
    },

    // ======================================================
    // CONTATTI
    // ======================================================

    contacts: {
        email: "info@ristorantevilletta.it",
        phone: {
            raw: "3756309286",
            formatted: "375 630 9286"
        },

        whatsapp: {
            number: "393756309286",
            message: "Buongiorno, vorrei avere informazioni riguardo al soggiorno."
        }
    },

    // ======================================================
    // INDIRIZZO
    // ======================================================
    address: {
        street: "Via Gera n°10",
        zip: "25050",
        city: "Niardo",
        province: "BS",
        country: "Italia"
    },

    // ======================================================
    // PRENOTAZIONI
    // ======================================================
    booking: {
        url: "https://www.booking.com/hotel/it/albergo-ristorante-la-villetta.it.html",
        rating: "9.5",
        reviews: "150+"
    },

    // ======================================================
    // MAPPA
    // ======================================================
    maps: {
        embed: "https://www.google.com/maps?q=Via%20Gera%2010%20Niardo%20BS&output=embed",
        url: "https://maps.google.com/?q=Via+Gera+10+Niardo+BS"
    },

    // ======================================================
    // SOCIAL
    // ======================================================
    social: {
        facebook: "",
        instagram: "",
        youtube: "",
        tiktok: ""
    },

    // ======================================================
    // LOGHI
    // ======================================================
    logos: {
        black: "Image/Loghi/LogoRistrettoNero.png",
        red: "Image/Loghi/LogoRistrettoRosso.png",
        favicon: "favicon.ico"
    },

    // ======================================================
    // SEO
    // ======================================================
    seo: {
        title: "VB&B | Bed & Breakfast a Niardo in Val Camonica",
        description: "VB&B è un Bed & Breakfast a Niardo (BS), nel cuore della Val Camonica. Camere confortevoli con bagno privato, Wi-Fi gratuito, terrazza panoramica, parcheggio e self check-in.",
        keywords: [
            "VB&B",
            "bed and breakfast niardo",
            "b&b niardo",
            "bed and breakfast val camonica",
            "camere niardo",
            "dormire val camonica",
            "hotel niardo",
            "bbvilletta"
        ],
        author: "La Villetta SNC di Casalini Rino & C.",
        locale: "it_IT",
        themeColor: "#A11D23",
        canonical: "https://www.bbvilletta.it",
        ogImage: "https://www.bbvilletta.it/Image/Seo/og-image.jpg",
        type: "website"
    },

    // ======================================================
    // PRIVACY
    // ======================================================
    privacy: {
        version: "1.0",
        lastUpdate: "09/07/2026"
    },

    // ======================================================
    // FOOTER
    // ======================================================
    footer: {
        copyrightText: "Tutti i diritti riservati."
    },

    // ======================================================
    // METODI
    // ======================================================
    get name() {
        return this.company.shortName;
    },

    get slogan() {
        return this.company.slogan;
    },

    get legalName() {
        return this.company.legalName;
    },

    get vat() {
        return this.company.vat;
    },

    get email() {
        return this.contacts.email;
    },

    get phoneFormatted() {
        return this.contacts.phone.formatted;
    },

    get tel() {
        return `+39${this.contacts.phone.raw}`;
    },

    get whatsappUrl() {
        return `https://wa.me/${this.contacts.whatsapp.number}?text=${encodeURIComponent(this.contacts.whatsapp.message)}`;
    },

    get mailto() {
        return `mailto:${this.contacts.email}`;
    },

    get bookingUrl() {
        return this.booking.url;
    },

    get mapsEmbed() {
        return this.maps.embed;
    },

    get mapsLink() {
        return this.maps.url;
    },

    get fullAddress() {
        return `${this.address.street} - ${this.address.zip} ${this.address.city} (${this.address.province})`;
    },

    get fullAddressComplete() {
        return `${this.address.street}, ${this.address.zip} ${this.address.city} (${this.address.province}) - ${this.address.country}`;
    },

    get copyrightYear() {
        return new Date().getFullYear();
    }
};