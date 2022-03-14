"use strict";
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
  console.log(arrayRandom);
  for (let i = 0; i < setRandom.size; i++) {
    collectionCards[i].style.gridArea = arrayRandom[i];
    console.log(collectionCards[i].style.gridArea);
  }
};
randomizeCards();
const cards = document.querySelectorAll(".card");

const reveal = (e) => {
  const currentCard = e.currentTarget;
  currentCard.classList.add("flipped");

  setTimeout(() => {
    currentCard.classList.remove("flipped");
  }, 1000);
};

for (const card of cards) {
  card.addEventListener("click", reveal);
}
