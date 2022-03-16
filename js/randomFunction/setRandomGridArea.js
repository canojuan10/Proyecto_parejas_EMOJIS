"use strict";

export const setGridArea = (
  setValuesGridArea,
  collectionNodes,
  arrayRandom
) => {
  for (let i = 0; i < setValuesGridArea.size; i++) {
    collectionNodes[i].style.gridArea = arrayRandom[i];
  }
};
