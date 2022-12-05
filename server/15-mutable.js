const products = [
  { title: "Pizza", price: 121, id: "🍕" },
  { title: "Burger", price: 121, id: "🍔" },
  { title: "Hot cakes", price: 121, id: "🥞" },
];

const newProducts = [...products];

const myProducts = [];

console.log("products", products);
console.log("NewProducts", newProducts);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

const productIndex = newProducts.findIndex((item) => item.id === "🍔");
if (productIndex !== -1) {
  myProducts.push(newProducts[productIndex]);
  newProducts.splice(productIndex, 1);
}

console.log("products", products);
console.log("NewProducts", newProducts);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

const productsV2 = [
  { title: "Pizza", price: 121, id: "🍕" },
  { title: "Burger", price: 121, id: "🍔" },
  { title: "Hot cakes", price: 121, id: "🥞" },
];

const update = {
  id: "🥞",
  changes: {
    price: 200,
    description: "Delicious Hot Cakes!!",
  },
};
const productIndexV2 = productsV2.findIndex((item) => item.id === "🥞");
productsV2[productIndexV2] = {
  ...productsV2[productIndexV2],
  ...update.changes,
};
console.log(productsV2);
