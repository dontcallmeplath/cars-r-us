// sets up the transient state data structure and provide initial values
const transientState = {
  paintId: 0,
  interiorId: 0,
  techId: 0,
  wheelId: 0,
};
// exportable setter functions to update the value of each property
export const setPaintId = (chosenPaint) => {
  transientState.paintId = chosenPaint;
};
export const setInteriorId = (chosenInterior) => {
  transientState.interiorId = chosenInterior;
};
export const setTechId = (chosenTech) => {
  transientState.techId = chosenTech;
};
export const setWheelId = (chosenWheel) => {
  transientState.wheelId = chosenWheel;
};
