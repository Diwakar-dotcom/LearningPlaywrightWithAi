function makeCounter(start = 0) { // that's how we pass argument with default values.
    let count = start;
    return{ // That's how you can also return multiple functions at once
        increment() {count++;},
        decrement() {count--;},
        get() {return count;}
    };
}

let counter = makeCounter(0);
counter.increment();
counter.increment();
counter.increment();
console.log(counter.get());
counter.decrement();
console.log(counter.get());

// increment(); // We can not call directly.