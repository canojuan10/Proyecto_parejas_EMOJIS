import { randomizeCards } from "./randomFunction/randomizeCards.js";
import { addIntentCounter } from "./auxiliaryFunctions/addIntentCounter.js";
import {
  putUp,
  putDown,
  removeClickListener,
  addClickListener,
} from "./auxiliaryFunctions/cardComparation.js";
("use strict");

const cards = document.querySelectorAll(".card");
let points = 0;
let card1;
let card1Value;
let card2;
let card2Value;
let flippedCards;
const startButton = document.querySelector("#start");
const compareCards = (e) => {
  const currentCard = e.currentTarget;
  putUp(currentCard);
  card1 = currentCard;
  card1Value = currentCard.dataset.cardImg;
  removeClickListener(cards, compareCards);
  addClickListener(cards, reveal);

  flippedCards = document.querySelectorAll(".flipped");
  console.log(flippedCards);
  removeClickListener(flippedCards, reveal);

  const idInterval = setInterval(() => {
    if (card1Value && card2Value) {
      if (card1Value === card2Value) {
        points++;
        console.log(points);
      } else {
        setTimeout(() => {
          putDown(card1);
          putDown(card2);
        }, 1000);
      }
      clearInterval(idInterval);

      card1Value = "";
      card2Value = "";
      addIntentCounter();
      setTimeout(() => {
        addClickListener(cards, compareCards);

        // flippedCards = document.querySelectorAll(".flipped");
        // removeClickListener(flippedCards, compareCards);
      }, 2000);
    }
  }, 500);
};
const reveal = (e) => {
  const currentCard = e.currentTarget;
  putUp(currentCard);
  card2 = currentCard;
  card2Value = currentCard.dataset.cardImg;
  removeClickListener(cards, reveal);
};
const startGame = () => {
  const playBoard = document.querySelector("#playboard");
  points = 0;
  randomizeCards();
  startButton.classList.add("hidden");
  setTimeout(() => {
    playBoard.classList.remove("hidden");
  }, 1000);
};

//___________________________________________________________________
startButton.addEventListener("click", startGame);
addClickListener(cards, compareCards);
// randomizeCards();

const reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
  intents.textContent = 0;
  points = 0;
  for (const card of cards) {
    card.classList.remove("flipped");
  }
  setTimeout(randomizeCards, 1000);
});
