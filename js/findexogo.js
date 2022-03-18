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

if (points === 8) {
  endGameAdvise();
}

const endGameAdvise = () => {
  const endGame = document.querySelector(".endGame");
  endGame.style.opacity = 1;
};
