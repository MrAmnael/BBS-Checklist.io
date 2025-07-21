// 📦 Chargement des états depuis localStorage
let state = JSON.parse(localStorage.getItem("bbs_unit_state")) || {};
let ownedFilter = "all";
let attributeFilter = "all";
let searchTerm = "";

// 🔁 Sauvegarde
function saveState() {
  localStorage.setItem("bbs_unit_state", JSON.stringify(state));
}

// 🎯 Gestion du mode actif
let currentMode = "default";
function setMode(mode) {
  currentMode = mode;
  document.querySelectorAll('.mode-button').forEach(btn => btn.classList.remove('active'));

  if (mode === 'default') document.querySelector('.mode-button:nth-of-type(1)').classList.add('active');
  else if (mode === 'ft') document.querySelector('.mode-button:nth-of-type(2)').classList.add('active');
  else if (mode === 'spe') document.querySelector('.mode-button:nth-of-type(3)').classList.add('active');
}

// ✅ Clic sur un personnage
function toggleUnit(id) {
  if (!state[id]) state[id] = { owned: false, ft: false, spec: 1 };
  state[id].owned = !state[id].owned;
  saveState();
  renderUnits();
  updateProgress();
}

// 🎮 Toggle FT
function toggleFT(id) {
  if (!state[id]) state[id] = { owned: false, ft: false, spec: 1 };
  state[id].owned = true;
  state[id].ft = !state[id].ft;
  saveState();
  renderUnits();
  updateProgress();
}

// 🎮 Incrémentation spé
function incrementSpec(id) {
  if (!state[id]) state[id] = { owned: false, ft: false, spec: 1 };
  state[id].owned = true;
  state[id].spec = state[id].spec >= 5 ? 1 : state[id].spec + 1;
  saveState();
  renderUnits();
  updateProgress();
}

// 🧱 Affichage des cartes avec filtres
function renderUnits() {
  const container = document.getElementById("unit-list");
  container.innerHTML = "";

  let filteredUnits = [...units];

  // ➕ Filtre owned
  filteredUnits = filteredUnits.filter(unit => {
    const unitState = state[unit.id] || { owned: false, ft: false, spec: 1 };
    if (ownedFilter === "owned") return unitState.owned;
    if (ownedFilter === "not-owned") return !unitState.owned;
    return true;
  });

  // ➕ Filtre attribute
  if (attributeFilter !== "all") {
    filteredUnits = filteredUnits.filter(unit =>
      unit.attribute && unit.attribute.toLowerCase() === attributeFilter
    );
  }

 // ➕ Filtre recherche (plus stricte : mot qui commence par le terme)
if (searchTerm.trim() !== "") {
  const term = searchTerm.trim().toLowerCase();
  filteredUnits = filteredUnits.filter(unit => {
    const nameWords = unit.name.toLowerCase().split(/[\s\-–_.]+/); // découpe mots
    return nameWords.some(word => word.startsWith(term));
  });
}

  filteredUnits.forEach(unit => {
    const unitState = state[unit.id] || { owned: false, ft: false, spec: 1 };
    const card = document.createElement("div");

    card.className = `unit-card cursor-pointer ${unitState.owned ? "selected" : ""} ${unitState.ft ? "ft" : ""}`;

    card.onclick = () => {
      if (currentMode === "ft") toggleFT(unit.id);
      else if (currentMode === "spe") incrementSpec(unit.id);
      else toggleUnit(unit.id);
    };

    const badgeColorClass = unitState.ft ? "bg-purple-600 text-white" : "bg-yellow-400 text-black";

    const badge = unitState.owned
      ? `<span class="spe-badge ${badgeColorClass}">${unitState.spec}</span>`
      : "";

    card.innerHTML = `<img src="${unit.image}" alt="${unit.name}" class="mb-1" />${badge}`;

    container.appendChild(card);
  });
}

// 📊 Barre de progression
function updateProgress() {
  const progressBar = document.getElementById("progressBar");
  const progressLabel = document.getElementById("progressLabel");

  const total = units.length;
  const owned = Object.values(state).filter(u => u.owned).length;
  const percent = total > 0 ? Math.round((owned / total) * 100) : 0;

  progressBar.style.width = `${percent}%`;
  progressLabel.textContent = `${owned}/${total} (${percent}%)`;
}

// 🔄 Reset
function resetAll() {
  if (confirm("Souhaites-tu réinitialiser ta collection ?")) {
    state = {};
    saveState();
    renderUnits();
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
          renderUnits();
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

// 🚀 Init + attacher les boutons
window.addEventListener("DOMContentLoaded", () => {
  renderUnits();
  updateProgress();

// ✅ Filtres : Tous / Possédés / Non Possédés
document.querySelectorAll(".filter-owned-button").forEach((button) => {
  button.addEventListener("click", () => {
    if (button.classList.contains("all")) {
      ownedFilter = "all";
    } else if (button.classList.contains("owned")) {
      ownedFilter = "owned";
    } else if (button.classList.contains("not-owned")) {
      ownedFilter = "not-owned";
    }

    document.querySelectorAll(".filter-owned-button").forEach(btn => {
      btn.classList.remove("active");
    });

    button.classList.add("active");
    renderUnits();
  });
});

// ✅ Affinités : couleurs dynamiques persistantes
document.querySelectorAll(".filter-attribute-button").forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    attributeFilter = button.getAttribute("data-attribute").toLowerCase();

    document.querySelectorAll(".filter-attribute-button").forEach(btn => {
      btn.classList.remove("active");
      btn.style.removeProperty("background-color");
      btn.style.removeProperty("font-weight");
    });

    button.classList.add("active");
    button.style.setProperty("font-weight", "bold");

    const attr = button.getAttribute("data-attribute");
    const colorMap = {
      technique: "#15803d",
      instinct: "#6b21a8",
      force: "#b91c1c",
      vitesse: "#1e3a8a",
      connaissance: "#ca8a04",
      all: "#4b5563"
    };

    const color = colorMap[attr] || "#4b5563";
    button.style.setProperty("background-color", color, "important");

    renderUnits();
  });
});

  // Boutons de filtre attribute
  document.querySelectorAll(".filter-attribute-button").forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      attributeFilter = button.getAttribute("data-attribute").toLowerCase();

      document.querySelectorAll(".filter-attribute-button").forEach(btn => {
        btn.classList.remove("active");
        btn.style.fontWeight = "normal";
      });

      button.classList.add("active");
      button.style.fontWeight = "bold";

      renderUnits();
    });
  });

  // Barre de recherche
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchTerm = e.target.value;
      renderUnits();
    });
  }
});
