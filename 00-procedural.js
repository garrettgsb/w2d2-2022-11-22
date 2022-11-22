function getRandomIndex(arr) {
  return Math.floor(Math.random() * arr.length);
}

function calculateBill() {
  const totalBill = 83.50;
  const taxAmount = totalBill * taxRate;
  const taxRate = 0.14;
  const diners = [
    "Alice",
    "Bob",
    "Carol",
    "Dean",
  ];
  const randomIndex = getRandomIndex(diners);
  console.log(`${diners[randomIndex]} will get the bill, which comes to ${totalBill + taxAmount}, plus the tip.`);
}

calculateBill();
