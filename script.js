// Le formulaire ne s'envoie nulle part : c'est une démonstration.
// Ce script vérifie l'adresse e-mail et affiche un message.

// 1. On récupère les éléments de la page dont on a besoin.
const form = document.getElementById("signup-form");
const emailInput = document.getElementById("email");
const message = document.getElementById("form-message");

// 2. On écoute l'envoi du formulaire.
form.addEventListener("submit", function (event) {
  event.preventDefault(); // empêche le rechargement de la page

  const email = emailInput.value.trim();

  // 3. Vérification simple : quelque chose@quelque chose.quelque chose
  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!isValid) {
    message.textContent = "Merci d'indiquer une adresse e-mail valide.";
    return;
  }

  // 4. Succès : on remercie et on vide le champ.
  message.textContent = "Merci ! (Démonstration : aucune donnée n'est envoyée.)";
  form.reset();
});
