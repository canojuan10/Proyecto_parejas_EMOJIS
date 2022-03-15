"use strict";

let textConter = new Array();
console.log(textConter);

const reveal = (e) => {
  const currentCard = e.currentTarget;
  currentCard.classList.add("flipped");
  textConter.unshift(currentCard);
  if (textConter[0].textContent === textConter[1].textContent) {
    console.log("ola");
    delete textConter[0];
    delete textConter[1];
  } else if (textConter[0].textContent !== textConter[1].textContent) {
    setTimeout(() => {
      textConter[0].classList.remove("flipped");
      textConter[1].classList.remove("flipped");
      delete textConter[0];
      delete textConter[1];
    }, 2000);
  }
};

const cards = document.querySelectorAll(".card");

for (const card of cards) {
  card.addEventListener("click", reveal);
}

// const cards = document.querySelectorAll(".card");

// const reveal = (event) => {
//   const currentCard = event.currentTarget;
//   currentCard.classList.add("flipped");

// for (const card of cards) {
//   card.addEventListener("click", reveal);
// }