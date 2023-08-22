import { setWheelId } from "./transientState.js";

export const TechOptionsMenu = async () => {
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
