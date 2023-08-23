// sets up the transient state data structure and provide initial values
let transientState = {
  paintId: 0,
  interiorId: 0,
  technologyId: 0,
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
  transientState.technologyId = chosenTech;
};
export const setWheelId = (chosenWheel) => {
  transientState.wheelId = chosenWheel;
};

export const orderPlaced = async () => {
  const postOptions = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(transientState),
  };

  // Send the transient state to your API if it passes value test

  const stateArray = Object.values(transientState);
  const isNotNull = (currentValue) => currentValue > 0;
  if (stateArray.every(isNotNull)) {
    const response = await fetch("http://localhost:8088/orders", postOptions);
  } else {
    window.alert("Please review your selections");
  }

  // listen for change re submission
  const customChangeEvent = new CustomEvent("stateChanged");
  document.dispatchEvent(customChangeEvent);
  transientState = {
    paintId: 0,
    interiorId: 0,
    technologyId: 0,
    wheelId: 0,
  };
};
