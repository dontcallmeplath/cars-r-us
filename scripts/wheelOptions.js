import { setWheelId } from "./transientState.js";

export const WheelOptionsMenu = async () => {
  document.addEventListener("change", handleWheelChoice);

  const response = await fetch("http://localhost:8088/wheels");
  const wheels = await response.json();

  let html = `<select id="wheel">`;
  html += `<option value="0">Select a wheel style</option>`;

  const arrayOfWheels = wheels.map((wheel) => {
    return `<option value="${wheel.id}">${wheel.style}</option>`;
  });

  html += arrayOfWheels.join("");
  html += `</select>`;
  return html;
};

const handleWheelChoice = (event) => {
  if (event.target.id === "wheel") {
    setWheelId(parseInt(event.target.value));
  }
};
