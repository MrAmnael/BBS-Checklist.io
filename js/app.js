// 📦 Chargement des états depuis localStorage
let state = JSON.parse(localStorage.getItem("bbs_unit_state")) || {};
let ownedFilter = "all";
let attributeFilter = "all";
let searchTerm = "";
let artworkEnabled = false; // Artwork OFF par défaut

// 🔁 Sauvegarde
function saveState() {
  localStorage.setItem("bbs_unit_state", JSON.stringify(state));
}

// 🎯 Gestion du mode actif
let currentMode = "default";
function setMode(mode) {
  currentMode = mode;
  // On cible uniquement les boutons qui appellent setMode pour éviter d'inclure le bouton Artwork
  document.querySelectorAll('button[onclick*="setMode"]').forEach(btn => btn.classList.remove('active'));
  const selector = `button[onclick="setMode('${mode}')"]`;
  const activeBtn = document.querySelector(selector);
  if (activeBtn) activeBtn.classList.add('active');
}

// ✅ Mise à jour UI d'une carte (ne reconstruit pas tout)
function updateCardUI(id) {
  const card = document.querySelector(`.unit-card[data-id="${id}"]`);
  if (!card) return;

  const unitState = state[id] || { owned: false, ft: false, spec: 1 };

  // classes
  card.classList.toggle('selected', !!unitState.owned);
  card.classList.toggle('ft', !!unitState.ft);

  // badge
  let badge = card.querySelector('.spe-badge');
  if (unitState.owned) {
    if (!badge) {
      badge = document.createElement('span');
      badge.className = 'spe-badge';
      card.appendChild(badge);
    }
    // choix couleur badge selon ft
    badge.className = 'spe-badge ' + (unitState.ft ? 'bg-purple-600 text-white' : 'bg-yellow-400 text-black');
    badge.textContent = unitState.spec ?? 1;
    badge.style.display = 'flex';
  } else {
    if (badge) badge.style.display = 'none';
  }
}

// ✅ Fonctions qui modifient l'état – elles mettent à jour uniquement la carte
function toggleUnit(id) {
  if (!state[id]) state[id] = { owned: false, ft: false, spec: 1 };
  state[id].owned = !state[id].owned;
  // Si on désélectionne, on peut garder ft/spec ou reset selon préférence (ici on garde ft/spec)
  saveState();
  updateCardUI(id);
  applyFilters();
  updateProgress();
}

function toggleFT(id) {
  if (!state[id]) state[id] = { owned: false, ft: false, spec: 1 };
  state[id].owned = true;
  state[id].ft = !state[id].ft;
  saveState();
  updateCardUI(id);
  applyFilters();
  updateProgress();
}

function incrementSpec(id) {
  if (!state[id]) state[id] = { owned: false, ft: false, spec: 1 };
  state[id].owned = true;
  state[id].spec = state[id].spec >= 5 ? 1 : state[id].spec + 1;
  saveState();
  updateCardUI(id);
  applyFilters();
  updateProgress();
}

// 🔹 Modal Artwork
const artworkModal = document.getElementById("artworkModal");
const artworkModalImg = document.getElementById("artworkModalImg");
const closeArtworkModal = document.getElementById("closeArtworkModal");

function openArtworkModal(src) {
  artworkModalImg.src = src;
  artworkModal.classList.remove("hidden");
}

if (closeArtworkModal) {
  closeArtworkModal.addEventListener("click", () => {
    artworkModal.classList.add("hidden");
  });
}
if (artworkModal) {
  artworkModal.addEventListener("click", (e) => {
    if (e.target === artworkModal) artworkModal.classList.add("hidden");
  });
}

// 🧱 Construction initiale des cartes (une seule fois)
function buildCards() {
  const container = document.getElementById("unit-list");
  container.innerHTML = "";

  units.forEach(unit => {
    const unitState = state[unit.id] || { owned: false, ft: false, spec: 1 };

    const card = document.createElement("div");
    card.className = `unit-card cursor-pointer relative ${unitState.owned ? "selected" : ""} ${unitState.ft ? "ft" : ""}`;
    card.dataset.id = unit.id;
    card.dataset.attribute = unit.attribute ? unit.attribute.toLowerCase() : 'none';

    // image
    const img = document.createElement("img");
    img.src = unit.image;
    img.alt = unit.name;
    img.className = "mb-1 w-full";
    img.style.pointerEvents = "none"; // overlay gère les clics

    // badge (créé si possédé)
    const badge = document.createElement("span");
    badge.className = unitState.owned ? `spe-badge ${unitState.ft ? 'bg-purple-600 text-white' : 'bg-yellow-400 text-black'}` : 'spe-badge';
    badge.textContent = unitState.spec ?? 1;
    badge.style.display = unitState.owned ? 'flex' : 'none';

    // overlay capture-tout
    const overlay = document.createElement("div");
    overlay.className = "card-overlay";
    overlay.style.position = "absolute";
    overlay.style.inset = "0";
    overlay.style.zIndex = "5";
    overlay.style.background = "transparent";
    overlay.style.display = "block";
    overlay.style.cursor = artworkEnabled ? "zoom-in" : "pointer";

    overlay.addEventListener("click", (e) => {
      e.stopPropagation();
      const id = parseInt(card.dataset.id, 10);
      const src = unit.artwork ? unit.artwork : `artwork/artwork/${id}.png`;

      if (artworkEnabled) {
        openArtworkModal(src);
        return;
      }

      if (currentMode === "ft") toggleFT(id);
      else if (currentMode === "spe") incrementSpec(id);
      else toggleUnit(id);
    });

    card.appendChild(img);
    card.appendChild(badge);
    card.appendChild(overlay);
    container.appendChild(card);
  });
}

// 🚀 Filtrage ultra-rapide (montre/masque)
function applyFilters() {
  const allCards = document.querySelectorAll(".unit-card");
  const term = searchTerm.trim().toLowerCase();

  allCards.forEach(card => {
    const id = parseInt(card.dataset.id, 10);
    const attr = card.dataset.attribute;
    const unit = units.find(u => u.id === id);
    const unitState = state[id] || { owned: false };

    let visible = true;

    // owned filter
    if (ownedFilter === "owned" && !unitState.owned) visible = false;
    if (ownedFilter === "not-owned" && unitState.owned) visible = false;

    // attribute filter
    if (attributeFilter && attributeFilter !== "all" && attr !== attributeFilter) visible = false;

    // search filter (prefix word match like before)
    if (term !== "") {
      const nameWords = (unit.name || '').toLowerCase().split(/[\s\-–_.]+/);
      if (!nameWords.some(word => word.startsWith(term))) visible = false;
    }

    card.style.display = visible ? "" : "none";

    // update overlay cursor to reflect artworkEnabled change if needed
    const overlay = card.querySelector('.card-overlay');
    if (overlay) overlay.style.cursor = artworkEnabled ? "zoom-in" : "pointer";
  });

  updateProgress();
}

// 📊 Barre de progression
function updateProgress() {
  const progressBar = document.getElementById("progressBar");
  const progressLabel = document.getElementById("progressLabel");

  const total = units.length;
  const owned = Object.values(state).filter(u => u.owned).length;
  const percent = total > 0 ? Math.round((owned / total) * 100) : 0;

  if (progressBar) progressBar.style.width = `${percent}%`;
  if (progressLabel) progressLabel.textContent = `${owned}/${total} (${percent}%)`;
}

// 🔄 Reset
function resetAll() {
  if (confirm("Souhaites-tu réinitialiser ta collection ?")) {
    state = {};
    saveState();
    // mise à jour UI sans re-créer tout
    document.querySelectorAll('.unit-card').forEach(card => {
      const id = parseInt(card.dataset.id, 10);
      updateCardUI(id);
    });
    applyFilters();
    updateProgress();
  }
}

// 📤 Export
function exportCollection() {
  const dataStr = JSON.stringify(state);
  const blob = new Blob([dataStr], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "bbs_collection.json";
  a.click();
  URL.revokeObjectURL(url);
}

// 📥 Import
function importCollection() {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = ".json";

  input.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (event) {
      try {
        const data = JSON.parse(event.target.result);
        if (typeof data === "object") {
          state = data;
          saveState();
          // update UI per-card
          document.querySelectorAll('.unit-card').forEach(card => {
            const id = parseInt(card.dataset.id, 10);
            updateCardUI(id);
          });
          applyFilters();
          updateProgress();
        } else alert("Fichier invalide.");
      } catch (e) {
        alert("Erreur lors de l'import.");
      }
    };
    reader.readAsText(file);
  });

  input.click();
}

// 🚀 Init + boutons
window.addEventListener("DOMContentLoaded", () => {
  const toggleArtworkBtn = document.getElementById("toggleArtworkBtn");

  artworkEnabled = false;
  if (toggleArtworkBtn) {
    toggleArtworkBtn.textContent = "🎨 Artwork OFF";
    toggleArtworkBtn.classList.remove("active");
  }

  // build cards once
  buildCards();

  // apply initial filters/visibility
  applyFilters();
  updateProgress();

  // Artwork toggle
  if (toggleArtworkBtn) {
    toggleArtworkBtn.addEventListener("click", () => {
      artworkEnabled = !artworkEnabled;

      toggleArtworkBtn.textContent = artworkEnabled ? "🖼️ Artwork ON" : "🎨 Artwork OFF";
      toggleArtworkBtn.style.backgroundColor = artworkEnabled ? "#16a34a" : "#4b5563";
      toggleArtworkBtn.classList.toggle("active", artworkEnabled);

      // Désactiver uniquement les vrais boutons de mode (ceux qui appellent setMode)
      const modeButtons = document.querySelectorAll('button[onclick*="setMode"]');
      modeButtons.forEach(btn => {
        if (artworkEnabled) {
          btn.disabled = true;
          btn.classList.add('opacity-50', 'cursor-not-allowed');
        } else {
          btn.disabled = false;
          btn.classList.remove('opacity-50', 'cursor-not-allowed');
        }
      });

      // Met à jour le curseur des overlays
      document.querySelectorAll('.card-overlay').forEach(ol => ol.style.cursor = artworkEnabled ? 'zoom-in' : 'pointer');

      // apply filters (mise à jour UI)
      applyFilters();
    });
  }

  // Mode buttons (only buttons that call setMode)
  document.querySelectorAll('button[onclick*="setMode"]').forEach(btn => {
    btn.addEventListener("click", () => {
      if (artworkEnabled) return; // bloqué si artwork ON
      // récupère le mode depuis l'attribut onclick (fallback simple)
      const onclick = btn.getAttribute('onclick') || '';
      const match = onclick.match(/setMode\(['"](.+?)['"]\)/);
      const mode = match ? match[1] : (btn.textContent.includes("Normal") ? "default" : btn.textContent.includes("FT") ? "ft" : "spe");
      setMode(mode);
    });
  });

  // Filtres Owned
  document.querySelectorAll(".filter-owned-button").forEach(button => {
    button.addEventListener("click", () => {
      if (button.classList.contains("all")) ownedFilter = "all";
      else if (button.classList.contains("owned")) ownedFilter = "owned";
      else if (button.classList.contains("not-owned")) ownedFilter = "not-owned";

      document.querySelectorAll(".filter-owned-button").forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      applyFilters();
    });
  });

  // Filtres Affinités (instantané + couleur)
  const attributeColors = {
    technique: "#16a34a", // Vert
    instinct: "#9333ea",  // Violet
    force: "#dc2626",     // Rouge
    vitesse: "#2563eb",   // Bleu
    connaissance: "#ea580c" // Orange
  };

  document.querySelectorAll(".filter-attribute-button").forEach(button => {
  button.addEventListener("click", e => {
    e.preventDefault();
    const attr = button.getAttribute("data-attribute").toLowerCase();
    attributeFilter = attr;

    // Mise à jour visuelle immédiate (avant le filtrage)
    document.querySelectorAll(".filter-attribute-button").forEach(btn => {
      btn.classList.remove("active");
      btn.style.removeProperty("background-color");
      btn.style.removeProperty("color");
    });

    if (attributeColors[attr]) {
      button.style.backgroundColor = attributeColors[attr];
      button.style.color = "white";
    } else {
      button.style.backgroundColor = "#374151";
      button.style.color = "white";
    }
    button.classList.add("active");

    // 🔹 On laisse le navigateur afficher la couleur AVANT de filtrer
    setTimeout(() => applyFilters(), 0);
  });
});

  // Recherche
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    // petit debounce pour éviter trop d'opérations si tu tape super vite
    let debounceTimer = null;
    searchInput.addEventListener("input", e => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        searchTerm = e.target.value;
        applyFilters();
      }, 120);
    });
  }

});
