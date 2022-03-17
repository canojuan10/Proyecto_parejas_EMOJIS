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
let card1;
let card1Value;
let card2;
let card2Value;
let flippedCards;

const compareCards = (e) => {
  const currentCard = e.currentTarget;
  putUp(currentCard);
  card1 = currentCard;
  card1Value = currentCard.dataset.cardImg;
  removeClickListener(cards, compareCards);
  addClickListener(cards, reveal);

  flippedCards = document.querySelectorAll(".flipped");
  removeClickListener(flippedCards, reveal);

  const idInterval = setInterval(() => {
    if (card1Value && card2Value) {
      if (card1Value === card2Value) {
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

        flippedCards = document.querySelectorAll(".flipped");
        removeClickListener(flippedCards, compareCards);
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

//___________________________________________________________________

addClickListener(cards, compareCards);
randomizeCards();
