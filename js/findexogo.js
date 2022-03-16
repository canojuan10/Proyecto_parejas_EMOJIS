const addCounter = () => {
  console.dir(intents);
  let numberIntents = +intents.textContent;
  numberIntents++;
  intents.textContent = numberIntents;
};

const addCounterPoints = () => {
  let points = points + 1;
  console.log(points);
};
