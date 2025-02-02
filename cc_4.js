// Task 1 Customer Discounts
let purchaseAmount = 104; // the total of purchase
let finalAmount = purchaseAmount;// Final amount after discount 
if(purchaseAmounturchaseAmount >100){
    let discount = purchaseAmount * 0.15 ; // 15 % discount
    finalAmount-= discount; // Subtract discount from the final amount 
}
console.log("Discount Succefully Applied !");
console.log('Final Amount after discount : $${finalAmount}');
