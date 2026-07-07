// Funzione per includere automaticamente i file HTML
async function includeHTML() {
    const elements = document.querySelectorAll("[data-include]");
    for (const el of elements) {
        const file = el.getAttribute("data-include");
        try {
            const response = await fetch(file);
            if (!response.ok) throw new Error("Errore " + response.status);
            el.innerHTML = await response.text();
        } catch (err) {
            el.innerHTML = "<p style='color:red'>Impossibile caricare " + file + "</p>";
            console.error("Errore nel caricamento di", file, err);
        }
    }
}

// Avvia quando la pagina è caricata
document.addEventListener("DOMContentLoaded", includeHTML);
