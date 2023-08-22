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
  console.log(chosenPaint);
};
export const setInteriorId = (chosenInterior) => {
  transientState.interiorId = chosenInterior;
  console.log(chosenInterior);
};
export const setTechId = (chosenTech) => {
  transientState.techId = chosenTech;
  console.log(chosenTech);
};
export const setWheelId = (chosenWheel) => {
  transientState.wheelId = chosenWheel;
  console.log(chosenWheel);
};
