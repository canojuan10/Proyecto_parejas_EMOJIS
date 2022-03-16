"use strict";
import { getRandomSet } from "./getRandomSet";
import { setGridArea } from "./setRandomGridArea";

export const randomizeCards = () => {
  const playBoard = document.querySelector("#playboard");
  const collectionCards = playBoard.children;
  const setRandom = getRandomSet();
  setGridArea(setRandom, collectionCards);
};
