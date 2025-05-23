// script.js
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    const confirmation = document.getElementById("confirmation");
  
    form?.addEventListener("submit", (e) => {
      e.preventDefault();
  
      // Simulation d'envoi
      setTimeout(() => {
        confirmation.style.display = "block";
        form.reset();
      }, 1000);
    });
  });
  