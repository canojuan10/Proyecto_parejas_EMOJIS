import { getRandomSet } from "./getRandomSet.js";
import { setGridArea } from "./setRandomGridArea.js";
("use strict");

export const randomizeCards = () => {
  const playBoard = document.querySelector("#playboard");
  const collectionCards = playBoard.children;
  const setRandom = getRandomSet();
  const arrayRandom = [...setRandom];

  setGridArea(setRandom, collectionCards, arrayRandom);

  // for (let i = 0; i < setRandom.size; i++) {
  //   collectionCards[i].style.gridArea = arrayRandom[i];
  // }
};
