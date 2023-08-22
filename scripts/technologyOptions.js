import { setTechId } from "./transientState.js";

export const TechOptionsMenu = async () => {
  document.addEventListener("change", handleTechChoice);

  const response = await fetch("http://localhost:8088/technologies");
  const techs = await response.json();

  let html = `<select id="tech">`;
  html += `<option value="0">Select a technology package</option>`;

  const arrayOfTechs = techs.map((tech) => {
    return `<option value="${tech.id}">${tech.package}</option>`;
  });

  html += arrayOfTechs.join("");
  html += `</select>`;
  return html;
};

const handleTechChoice = (event) => {
  if (event.target.id === "tech") {
    setTechId(parseInt(event.target.value));
  }
};
