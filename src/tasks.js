
// CampusEats task list
const tasks = [
  "Design the menu screen",
  "Build the orders API",
  "Add user login",
];

console.log(`CampusEats has ${tasks.length} open tasks`);


const VIP_DISCOUNT = 0.1;

function calculateTotal(price, quantity, customerType) {
  if (
    !Number.isFinite(price) ||
    !Number.isInteger(quantity) ||
    price < 0 ||
    quantity < 0
  ) {
    throw new Error("Invalid price or quantity");
  }

  const subtotal = price * quantity;

  return customerType === "vip"
    ? subtotal * (1 - VIP_DISCOUNT)
    : subtotal;
}