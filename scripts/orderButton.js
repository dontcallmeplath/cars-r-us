import { orderPlaced } from "./transientState.js";

const handlePlaceOrderClick = (clickEvent) => {
  if (clickEvent.target.id === "submit") {
    orderPlaced();
  }
};

export const orderButtonBuilder = () => {
  document.addEventListener("click", handlePlaceOrderClick);

  return `<button id="submit">PLACE ORDER</button>`;
};
