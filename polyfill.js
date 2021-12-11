

// https://akashjain993.medium.com/js-polyfills-interview-questions-cb431f3c98dd
// https://reeversedev.com/polyfill-for-foreach-map-filter-reduce

// to check if method not available
if (typeof Array.prototype.reduce !== 'function') {
    Array.prototype.reduce = function () { }
}

// [].forEach()  // return undefined or nothing
// callback(currentValue, index, array)
Array.prototype.myFroEach = function (callback) {
    for (let index = 0; index < this.length; i++) {
        callback(this[index], index, this)
    }
}

// [].map() // return trasformed array for each item
// callback(currentValue, index, array) // same as forEach()
Array.prototype.ourMap = function (callback) {
    var arr = []; // since, we need to return an array
    for (let index = 0; index < this.length; i++) {
        arr.push(callback(this[index], index, this));
    }
    return arr // finally returning the array
}

// [].filter() // returns filtered array items based on logic
// array.filter(function(currentValue, index, arr), thisValue)
Array.prototype.myFilter = function (callback, context) {
    var arr = [];
    for (var index = 0; index < this.length; index++) {
        if (callback.call(context, this[index], index, this)) {
            arr.push(this[index]); // filtered items only
        }
    }
    return arr;
}
// Example Implementation
 let filtered = [12, 5, 8, 130, 44].myFilter(currentValue => currentValue >= 10);
 console.log(filtered)
// filtered is [12, 130, 44]

// [].reduce() // return single value
// callback(accumulator, currentValue, index, array) and initial value(optional)
Array.prototype.myReduce = function (callback, intialValue) {
    let accumulator = intialValue || undefined;
    for (let index = 0; index < this.length; index++) {
        if (accumulator) {
            accumulator = callback(accumulator, this[index], index, this)
        } else {
            accumulator = this[index]
        }
    }
    return accumulator;
}


