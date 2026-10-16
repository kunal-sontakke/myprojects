const cart = [
  { name: "Atta", price: 50, quantity: 2 },
  { name: "Doodh", price: 30, quantity: 1 },
  { name: "Chawal", price: 80, quantity: 3 }
];
const total_bill_amt = cart.reduce((accumulator , currentval) =>{
    return accumulator + currentval.price * currentval.quantity;
},0);
console.log(total_bill_amt);