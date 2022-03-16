"use strict";

export const setGridArea = (setValuesGridArea, collectionNodes) => {
  for (let i = 0; i < setValuesGridArea.size; i++) {
    collectionNodes[i].style.gridArea = setValuesGridArea[i];
    console.log(collectionNodes[i].style.gridArea);
  }
};
