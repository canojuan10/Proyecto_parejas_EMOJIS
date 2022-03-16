"use strict";
export const addCounter = () => {
  const intents = document.querySelector("#intents");
  console.dir(intents);
  let numberIntents = +intents.textContent;
  numberIntents++;
  intents.textContent = numberIntents;
};
