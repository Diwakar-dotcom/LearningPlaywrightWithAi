let temp = 10;

// Another case of writing condtion in false scenario.
let feel = (temp >= 40) ? "Very Hot":
           (temp >= 30) ? "Hot":
           (temp >= 20) ? "Warm":
           (temp >= 10) ? "Cool":"Cold";
           

console.log("Feel:",feel);