import client from "./client";

const update = (orderId) => client.put("/order/orderpackaged/" + orderId);
export default { update };
