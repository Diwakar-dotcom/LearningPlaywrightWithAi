let config = {}; // an empty object created

// Let's add properties to our empty object
config.browser = "Chrome";
config.timeout = 3000;
config.timeout = 5000; // updating my timeout property value with new value
console.log(config); // { browser: 'Chrome', timeout: 5000 }

// now lets delete the one of the property from our object.
delete config.browser; // this will delete the browser property from our object.
console.log(config); // { timeout: 5000 }
