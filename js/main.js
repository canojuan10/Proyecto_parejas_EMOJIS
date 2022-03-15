"use strict";

const cards = document.querySelectorAll(".card");
let card1;
let card1Value;
let card2;
let card2Value;
let flippedCards;
console.log(cards);
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
  flippedCards = document.querySelectorAll("flipped");
  for (const card of flippedCards) {
    card.removeEventListener("click", reveal);
  }

  const idInterval = setInterval(() => {
    if (card1Value && card2Value) {
      if (card1Value === card2Value) {
        console.log("son iguales");
      } else {
        console.log("no son iguales");
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
        flippedCards = document.querySelectorAll("flipped");
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

const randomizeCards = () => {
  const playBoard = document.querySelector("#playboard");
  const collectionCards = playBoard.children;
  const setRandom = new Set();
  for (let i = 0; i <= 16; i++) {
    const numberRandom = "card" + Math.ceil(Math.random() * 16);
    setRandom.add(numberRandom);
    i = setRandom.size;
  }
  const arrayRandom = [...setRandom];

  for (let i = 0; i < setRandom.size; i++) {
    collectionCards[i].style.gridArea = arrayRandom[i];
  }
};
const addCounter = () => {
  const intents = document.querySelector("#intents");
  console.dir(intents);
  let numberIntents = +intents.textContent;
  numberIntents++;
  intents.textContent = numberIntents;
};

//___________________________________________________________________
for (const card of cards) {
  card.addEventListener("click", compareCards);
}
randomizeCards();
