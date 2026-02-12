import { Application } from "@splinetool/runtime";

const canvas = document.getElementById("canvas3d");
const app = new Application(canvas);
app.load("https://prod.spline.design/LzT3AAfpbXaD9aKM/scene.splinecode");

// Récupération des éléments
const counterElement = document.getElementById("counter");
const incrementBtn = document.getElementById("incrementBtn");
const decrementBtn = document.getElementById("decrementBtn");

// Valeur initiale
let count = 3;

// Fonction pour mettre à jour l'affichage
function updateDisplay() {
  counterElement.textContent = count;
}

// Écouteur d'événement pour le bouton d'incrémentation
incrementBtn.addEventListener("click", () => {
  count++;
  updateDisplay();
});

// Écouteur d'événement pour le bouton de décrémentation
decrementBtn.addEventListener("click", () => {
  // Empêcher le compteur de descendre en dessous de 0
  if (count > 0) {
    count--;
    updateDisplay();
  }
});
