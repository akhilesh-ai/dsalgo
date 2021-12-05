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

try {
var funkA = () => console.log('Hi');
var funkB = new funkA();
funkB();
} catch(e) {
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


