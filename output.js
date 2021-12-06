// https://www.toptal.com/javascript/interview-questions

function test() {
    console.log(a);
    console.log(foo());
    var a = 1;
    function foo() {
        return 2;
    }
}
test();
//   Output:
//   undefined
//   2

function foo() {
    let a = b = 0;
    a++;
    return a;
}
foo();
console.log(typeof a);
console.log(typeof b);
//   Output:
//   undefined
//   number

let i;
for (i = 0; i < 3; i++) {
    const log = () => {
        console.log(i);
    };
    setTimeout(log, 100);
}
//   Output:
//   3
//   3
//   3

//In what order will the numbers 1-4 be logged to the console when the code below is executed? Why? 

(function () {
    console.log(1);
    setTimeout(function () {
        console.log(2)
    }, 1000);
    setTimeout(function () {
        console.log(3)
    }, 0);
    console.log(4);
})();

// The values will be logged in the following order: 
1
4
3
2

// https://stackabuse.com/javascripts-immediately-invoked-function-expressions/

try {
    var funkA = () => console.log('Hi');
    var funkB = new funkA();
    funkB();
} catch (e) {
    console.error(e);
}
//Output: Error can not create object of arrow function

function createIncrement() {
    let count = 0;
    function increment() {
        count++;
    }
    let message = `Count is ${count}`;
    function log() {
        console.log(message);
        console.log(count);

    }
    return [increment, log];
}
const [increment, log] = createIncrement();
increment();
increment();
increment();
log();
//   Output:
//   Count is 0
//   3

let animal = {
    jumps: null
};
let rabbit = {
    __proto__: animal,
    jumps: true
};
console.log(rabbit.jumps); // ? (1)
delete rabbit.jumps;
console.log(rabbit.jumps); // ? (2)
delete animal.jumps;
console.log(rabbit.jumps); // ? (3)
//   Output:
//   true
//   null
//   undefined

var myObject = {
    price: 20.99,
    get_price: function () {
        return this.price;
    }
};
var customObject = Object.create(myObject);
customObject.price = 19.99;
delete customObject.price;
console.log(customObject.get_price());
//   Output:
//   20.99

//   A frog is at the bottom of a 10 meter well.
//   Each day it summons enough energy for one 3 meter leap up the well.
//   Exhausted, it then hangs there for the rest of the day.
//   At night, while it is asleep, it slips 2 meters backwards.
//   How many days does it take him to escape from the well? 
//   8 days


//What will the code below output to the console and why? 
(function () { var a = b = 3; })();
console.log("a defined? " + (typeof a !== 'undefined'), typeof a);
console.log("b defined? " + (typeof b !== 'undefined'), typeof b);

// But in fact, var a = b = 3; is actually shorthand for:
// b = 3; so be becomse global var and a remains local here
// var a = b;

//What will the code below output to the console and why? 
var myObject = {
    foo: "bar",
    func: function () {
        var self = this;
        console.log("outer func: this.foo = " + this.foo);  // bar
        console.log("outer func: self.foo = " + self.foo);  // bar

        (function () {
            console.log("inner func: this.foo = " + this.foo); // undefined in IIFE this refers to window
            console.log("inner func: self.foo = " + self.foo); // bar
        }());
    }
};
myObject.func();

//Consider the two functions below. Will they both return the same thing? Why or why not? 
function foo1() { return { bar: "hello" }; }
function foo2() { return { bar: "hello" }; }

console.log("foo1 returns:");
console.log(foo1());
console.log("foo2 returns:");
console.log(foo2());

//What will the code below output? Explain your answer. 
console.log(0.1 + 0.2); // 
console.log(0.1 + 0.2 == 0.3); // false 0.30000000000000004

function areTheNumbersAlmostEqual(num1, num2) {
    return Math.abs(num1 - num2) < Number.EPSILON;
}
console.log(areTheNumbersAlmostEqual(0.1 + 0.2, 0.3)); // true

