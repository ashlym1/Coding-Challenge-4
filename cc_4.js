// Task 1 Customer Discounts
let purchaseAmount = 104; // Total  purchase amount 
let finalAmount = purchaseAmount;// Final amount after discount 
if(purchaseAmount >100){
    let discount = purchaseAmount * 0.15 ; // 15 % discount
    finalAmount-= discount; // Subtract discount from the final amount 
}
console.log("Discount Successfully Applied!");
console.log(`Final Amount after discount: $${finalAmount}`);

//Task 2 Sales Report
let sales =[ 140, 40, 85, 240, 60]; // array of sales 
let totalSales = 0; 
for (let i = 0;i < sales.length; i++) {
    totalSales += sales[i]; //calculate the total of sales 
}
console.log (`Total sales: $${totalSales}`);