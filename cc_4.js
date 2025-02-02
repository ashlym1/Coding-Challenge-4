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
