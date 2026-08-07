// console.log(MAX_RETRIES); // TDZ, ALSO if you try to execute this line without defining it in the whole code anywhere you will get this error: ReferenceError: MAX_RETRIES is not defined
// but if you also keep the next line then you get this error: ReferenceError: Cannot access 'MAX_RETRIES' before initialization

// const MAX_RETRIES = 3;
// MAX_RETRIES = 4;

const score = 100;
// score = score + 10; // TypeError: Assignment to constant variable ? - because we can not modify score value because it is const.
const pi = 3.14;
const prod_api_url = "https://app.vwo.com/#login";
//prod_api_url = "https://google.com" // not possible because is of const type - type Error will thrown as above.
const qa_api_url = "https://qa.vwo.com/#login";

let abc = "anil"; // but here we can do it.
abc = "Diwakar"
console.log(abc);