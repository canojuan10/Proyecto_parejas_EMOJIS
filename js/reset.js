"use strict";
const reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
  intents.textContent = 0;
  for (const card of cards) {
    card.classList.remove("flipped");
  }
  setTimeout(randomizeCards, 1000);
});
