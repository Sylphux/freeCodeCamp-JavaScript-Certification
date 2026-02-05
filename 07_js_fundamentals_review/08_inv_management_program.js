let inventory = [
  { name: "blob", quantity: 4 },
  { name: "glass", quantity: 12 },
  { name: "secret", quantity: 2 },
];

function findProductIndex(name) {
  for (let prod of inventory) {
    if (prod.name == name.toLowerCase()) {
      return inventory.indexOf(prod);
    }
  }
  return -1;
}

function addProduct(productObject) {
  let prod = {
    name: productObject.name.toLowerCase(),
    quantity: productObject.quantity,
  };
  let pIndex = findProductIndex(prod.name);
  if (pIndex > -1) {
    inventory[pIndex].quantity += prod.quantity;
    console.log(`${prod.name} quantity updated`);
  } else {
    inventory.push(prod);
    console.log(`${prod.name} added to inventory`);
  }
}

function removeProduct(name, quantity) {
  name = name.toLowerCase();
  let pIndex = findProductIndex(name);
  let newQ = inventory[pIndex]?.quantity - quantity;
  if (pIndex < 0) {
    console.log(`${name} not found`);
  } else if (newQ > 0) {
    inventory[pIndex].quantity = newQ;
    console.log(`Remaining ${name} pieces: ${newQ}`);
  } else if (newQ == 0) {
    inventory.splice(pIndex, 1);
  } else {
    console.log(
      `Not enough ${name} available, remaining pieces: ${newQ + quantity}`,
    );
  }
}

console.log(removeProduct("blOb", 4));
