"use strict";

const cards = document.querySelectorAll(".card");
let card1;
let card1Value;
let card2;
let card2Value;

export const putUp = (card) => {
  card.classList.add("flipped");
};
export const putDown = (card) => {
  card.classList.remove("flipped");
};
// export const sayCardImage = (card) => {
//   const image = card.dataset.cardImg
//   return image;
// };
export const removeClickListener = (arrayWithListener, clickEvent) => {
  for (const card of arrayWithListener) {
    card.removeEventListener("click", clickEvent);
  }
};
export const addClickListener = (arrayWithListener, clickEvent) => {
  for (const card of arrayWithListener) {
    card.addEventListener("click", clickEvent);
  }
};
const reveal = (e) => {
  card2 = e.currentTarget;
  putUp(card2);
  card2Value = sayCardImage(card2);
  removeClickListener(cards, reveal);
};

// const compareCards = (e) => {
//   card1 = e.currentTarget;
//   putUp(card1);
//   card1Value = sayCardImage(card1);
//   removeClickListener(cards, compareCards);
//   addClickListener(cards, reveal);

//   const idInterval = setInterval(() => {
//     if (sayCardImage(card1) && sayCardImage(card2)) {
//       if (sayCardImage(card1) === sayCardImage(card2)) {
//         console.log("son iguales");
//       } else {
//         console.log("no son iguales");
//         setTimeout(() => {
//           putDown(card1);
//           putDown(card2);
//         }, 1000);
//       }
//       clearInterval(idInterval);

//       card1 = "";
//       card2 = "";
//       setTimeout(() => {
//         addClickListener(cards, compareCards);
//       }, 2000);
//     }
//   }, 500);
// };

// for (const card of cards) {
//   card.addEventListener("click", compareCards);
// }
