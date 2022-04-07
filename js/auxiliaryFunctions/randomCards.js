export const randomizeCards = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  const arrayGrid = shuffle(array);

  const playBoard = document.querySelector("#playboard");
  const collection = playBoard.getElementsByClassName("card");

  for (let i = 0; i < arrayGrid.length; i++) {
    collection[i].style.gridArea = "card" + arrayGrid[i];
  }
};

function shuffle(array) {
  var m = array.length,
    t,
    i;

  while (m) {
    i = Math.floor(Math.random() * m--);

    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}
