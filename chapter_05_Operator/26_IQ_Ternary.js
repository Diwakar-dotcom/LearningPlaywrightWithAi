let responseTime = 850; // unit in ms
let sla = 1000;

let slaStatus = (responseTime <= sla) ? "within SLA ✅":"SLA breached ❌";
slaStatus = responseTime <= sla ? "within SLA ✅":"SLA breached ❌"; // You can write your statement like this as well that parenthesis is not required but its a good practice to put parenthesis always ();

console.log("Here is the SLA status update:",slaStatus);