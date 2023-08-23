import { setInteriorId } from "./transientState.js";

export const InteriorOptionsMenu = async () => {
  document.addEventListener("change", handleInteriorChoice);

  const response = await fetch("http://localhost:8088/interiors");
  const interiors = await response.json();

  let html = `<select id="interior" required>`;
  html += `<option value="">Select an interior option</option>`;

  const arrayOfInteriors = interiors.map((interior) => {
    return `<option value="${interior.id}">${interior.material}</option>`;
  });

  html += arrayOfInteriors.join("");
  html += `</select>`;
  return html;
};

const handleInteriorChoice = (event) => {
  if (event.target.id === "interior") {
    setInteriorId(parseInt(event.target.value));
  }
};
