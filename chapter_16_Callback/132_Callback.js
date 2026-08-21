function placeOrder(item, callback) { // callback is a function
    console.log(item,"Order Placed.....");
    callback(); // Here we are calling passed callback function
}

// Define
function print() {
    console.log("Normal Function - Done with order");
}

// First way to see callback work - normal function
placeOrder("Burger", print);

// Second way to see callback work using Anonymous function
placeOrder("Pizza", function() {
    console.log("Order has been dispatched.....");
})

// Third way to see callback using Arrow function
placeOrder("Momos", ()=>{
    console.log("Order has been delivered.....");
})

// In Similar Fashion as above third way arrow function - we use to write test cases in our playwright
// test("Test Case Title", async({page})=>{
//     await page.goTo("https://www.google.com");
//     await expect(page).toHaveTitle(/google/);
// }); 