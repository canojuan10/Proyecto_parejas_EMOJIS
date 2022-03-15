"use strict";
const cards = document.querySelectorAll(".card");
const reveal = (e) => {
  const currentCard = e.currentTarget;
  currentCard.classList.add("flipped");
  for (const card of cards) {
    card.addEventListener("click", (e2) => {
      const currentCard2 = e2.currentTarget;
      currentCard2.classList.add("flipped");
      if (currentCard.dataset === currentCard2.dataset) {
        console.log("hola");
      } else {
        setTimeout(() => {
          currentCard.classList.remove("flipped");
          currentCard2.classList.remove("flipped");
        }, 1000);
      }
    });
  }
};

console.dir(cards[1]);
for (const card of cards) {
  card.addEventListener("click", reveal);
}
