export const putUp = (card) => {
  card.classList.add("flipped");
};
export const putDown = (card) => {
  card.classList.remove("flipped");
};

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
