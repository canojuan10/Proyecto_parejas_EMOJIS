import { randomizeCards } from "./randomFunction/randomizeCards.js";
import { addCounter } from "./auxiliaryFunctions/addIntentCounter.js";
("use strict");

const cards = document.querySelectorAll(".card");
let card1;
let card1Value;
let card2;
let card2Value;
let flippedCards;

const compareCards = (e) => {
  const currentCard = e.currentTarget;
  currentCard.classList.add("flipped");
  card1 = currentCard;
  card1Value = currentCard.dataset.cardImg;

  for (const card of cards) {
    card.removeEventListener("click", compareCards);
  }

  for (const card of cards) {
    card.addEventListener("click", reveal);
  }
  flippedCards = document.querySelectorAll(".flipped");
  for (const card of flippedCards) {
    card.removeEventListener("click", reveal);
  }

  const idInterval = setInterval(() => {
    if (card1Value && card2Value) {
      if (card1Value === card2Value) {
      } else {
        setTimeout(() => {
          card1.classList.remove("flipped");
          card2.classList.remove("flipped");
        }, 1000);
      }
      clearInterval(idInterval);

      card1Value = "";
      card2Value = "";
      addCounter();
      setTimeout(() => {
        for (const card of cards) {
          card.addEventListener("click", compareCards);
        }
        flippedCards = document.querySelectorAll(".flipped");
        for (const card of flippedCards) {
          card.removeEventListener("click", compareCards);
        }
      }, 2000);
    }
  }, 500);
};
const reveal = (e) => {
  const currentCard = e.currentTarget;
  currentCard.classList.add("flipped");
  card2 = currentCard;
  card2Value = currentCard.dataset.cardImg;
  for (const card of cards) {
    card.removeEventListener("click", reveal);
  }
};

//___________________________________________________________________
for (const card of cards) {
  card.addEventListener("click", compareCards);
}
randomizeCards();
