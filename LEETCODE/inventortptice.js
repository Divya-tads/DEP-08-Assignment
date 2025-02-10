// Problem 1 .Inventory Price Update

// Description:

// You have an array of product objects. Each object contains an id, name, price, and quantity. Your tasks are:
// Using Map: Update the price by applying a 10% discount to products with a quantity greater than 100.
// Using Filter: Create a new array containing only the products that received the discount (i.e. where the discounted price is less than the original price).
// using forEach: Log a message for each discounted product showing the product name and its new price.

// const products = [   { id: 1, name: "Widget", price: 50, quantity: 120 },   { id: 2, name: "Gadget", price: 30, quantity: 80 },   { id: 3, name: "Doohickey", price: 100, quantity: 200 },   { id: 4, name: "Thingamajig", price: 75, quantity: 90 } ];

// const products = [   { id: 1, name: "Widget", price: 50, quantity: 120 },   { id: 2, name: "Gadget", price: 30, quantity: 80 },   { id: 3, name: "Doohickey", price: 100, quantity: 200 },   { id: 4, name: "Thingamajig", price: 75, quantity: 90 } ];

// const new_products= products.map( product =>{ if (product.quantity>100)
//     {
//         product.price= product.price * 0.9;
//     }
//     return product;
// }
// );
// console.log(new_products);

// const discounted_array= new_products.filter( product =>{
//     const original_val= products.find(p => {p.id===product.id} );
//     return product.price< original_val.price;
// }
// )
// discounted_array.forEach( p=>{
//     console.log(` For the value ${p.name} discounted value is ${p.price}`);
// })



const products = [
    { id: 1, name: "Widget", price: 50, quantity: 120 },
    { id: 2, name: "Gadget", price: 30, quantity: 80 },
    { id: 3, name: "Doohickey", price: 100, quantity: 200 },
    { id: 4, name: "Thingamajig", price: 75, quantity: 90 }
  ];
  
  // Apply a 10% discount to products with quantity > 100
//   const new_products = products.map(product => {
//     if (product.quantity > 100) {
//       product.price = product.price * 0.9;  // Apply 10% discount
//     }
//     return product;
//   });
//   console.log(new_products);
  
  // Filter the products that were discounted
//   const discounted_array = new_products.filter(product => {
//     const original_val = products.find(p => p.id === product.id); // Corrected find method
//     return product.price < original_val.price;  // Check if the price was discounted
//   });

//   console.log(discounted_array);
  
  
  // Log the discounted product details
//   discounted_array.forEach(p => {
//     console.log(`For the product ${p.name}, discounted value is $${p.price.toFixed(2)}`);
//   });
  

const discount_product = products.map(product=>(
    {
        ...product,
        price:product.quantity>100?product.price*0.9:product.price
    }
));

console.log(discount_product);



const discounted_price = products.map(product=>(
    {
        ...product,
        price:product.quantity>100?product.price*0.9:product.price
    }
)).filter(product=>product.price<products.find(p => p.id === product.id).price);

console.log(discounted_price);
discounted_price.forEach(
    product=>{
        console.log(` value ${product.name}: price ${product.price}`)
    }
);

