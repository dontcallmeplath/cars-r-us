export const showOrders = async () => {
  const fetchResponse = await fetch(
    "http://localhost:8088/orders?_expand=paint&_expand=interior&_expand=technology&_expand=wheel"
  );
  const orders = await fetchResponse.json();
  let ordersHTML = `<section>`;

  ordersHTML += orders
    .map((order) => {
      const orderPrice =
        order.paint.price +
        order.interior.price +
        order.technology.price +
        order.wheel.price;
      return `<div>Order #${order.id} costs $${orderPrice} </div>`;
    })
    .join("");

  ordersHTML += `</section>`;
  return ordersHTML;
};
