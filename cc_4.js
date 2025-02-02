// Task 1 If Statements
let purchaseAmount = 104; // Total  purchase amount 
let finalAmount = purchaseAmount;// Final amount after discount 
if(purchaseAmount >100){
    let discount = purchaseAmount * 0.15 ; // 15 % discount
    finalAmount-= discount; // Subtract discount from the final amount 
}
console.log("Discount Successfully Applied!");
console.log(`Final Amount after discount: $${finalAmount}`);

//Task 2 For Loop 
let sales =[ 140, 40, 85, 240, 60]; // array of sales 
let totalSales = 0; 
for (let i = 0;i < sales.length; i++) {
    totalSales += sales[i]; //calculate the total of sales 
}
console.log (`Total sales: $${totalSales}`);

// Task 3 while loop
let stock=10; //curent stock
while(stock>0) { 
    console.log(`Stock remaining: ${stock}`);
    stock--;
} // decresing stock to 0 
console.log("Warning: Stock Reduced !");

// Task 4 Do while Loop 
let responses= 0; //Declaring an initial value of 0 
do { 
    console.log (`Collected response #${responses +1}`);
    responses++;
}while(responses<3); // limit 3 

// Task 5...In Loop 
let employee={
    name:"Alice",
    position: "Manager",
    salary: "75000"
};
for (let key in employee) { 
    console.log(`${key}: ${employee[key]}`);
}

// Task 6 For..oF Loop
const products = [ "Celcius","Water","Protein Shake"];
for(const product of products) { 
    console.log(`Product:${product}`);
}

//Task 7 forEach()Method
const orders = [107,105,102] // Array of orders 
orders.forEach(order=>{
    console.log(`Order ID: ${order}`);
});

//Task 8 Function Declaration 
function calculateTax(amount,taxRate) {
    return amount * taxRate;
}
let tax = calculateTax(100,0.07);
console.log('Tax:$${tax.toFixed(2)}');

// Task 9 Function Expression
const applyDiscount = function(price,discountPercent) { 
    return price-(price*(discountPercent/100));
};
const discontedPrice =applyDiscount(100,20);
console.log('Discounted Price: $${discountedPrice.toFixed(2)}');

// Task 10 Arrow Functions
const calculatePoints = amount=> {return amount/ 10; };
let points = calculatePoints(100); // When purchase amount is $100
console.log("Loyalty Points Earned:" +points);