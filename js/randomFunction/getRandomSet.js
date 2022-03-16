"use strict";

export const getRandomSet = (numberOfCards = 16) => {
  const setRandom = new Set();
  for (let i = 0; i <= numberOfCards; i++) {
    const numberRandom = "card" + Math.ceil(Math.random() * 16);
    setRandom.add(numberRandom);
    i = setRandom.size;
  }
  return setRandom;
};
