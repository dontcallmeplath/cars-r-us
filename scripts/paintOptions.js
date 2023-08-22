import { setPaintId } from "./transientState.js";

export const PaintOptionsMenu = async () => {
  const response = await fetch("http://localhost:8088/paints");
  const paints = await response.json();

  let html = `<select id="paint">`;
  html += `<option value="0">Select a paint color</option>`;

  const arrayOfPaints = paints.map((paint) => {
    return `<option value="${paint.id}">${paint.color}</option>`;
  });

  html += arrayOfPaints.join("");
  html += `</select>`;
  return html;
};
