// =====================================================
// INCLUDE HTML
// Supporta include annidati
// =====================================================

async function loadIncludes(root = document) {
    const includes = root.querySelectorAll("[data-include]");
    if (includes.length === 0) { return; }
    for (const element of includes) {
        const file = element.dataset.include;
        try {
            const response = await fetch(file);
            if (!response.ok) throw new Error(file);
            element.innerHTML = await response.text();
            // Cerca eventuali include figli
            await loadIncludes(element);
        }
        catch (e) {
            console.error("Errore caricamento:", file);
            element.innerHTML =
                `<div class="alert alert-danger">
                    Impossibile caricare ${file}
                </div>`;
        }
    }
}

document.addEventListener("DOMContentLoaded", async () => {
    await loadIncludes();
    initializeSite();
});