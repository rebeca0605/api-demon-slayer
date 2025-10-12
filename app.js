'use strict'

document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const destino = card.getAttribute('data-link');

      // Só redireciona se o atributo data-link existir
      if (destino) {
        window.location.href = destino;
      }
    });
  });
});