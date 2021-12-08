class JSProblems {
    constructor() { }

    getDuplicateValuesFromArray() {
        // Write a program to output all duplicates in array.
        let array = [1, 4, 5, 1, 3, 7, 7, 7, 8, 8, 6, 3]; //1, 3, 7, 8
        let counts = {};
        let output = [];
        for (let item of array) {
            counts[item] = counts[item] >= 1 ? counts[item] + 1 : 1;
            if (counts[item] === 2) {
                output.push(item);
            }
        }
        // output = array.filter((e, i, a) => a.indexOf(e) !== i); this is an alternate solution
        console.log(output, counts);
        return output;
    }

    removeDuplicatesFromArray(arr = [1, 1, 2, 3, 3, 4, 4, 4, 5]) {
        console.log('Input=> ', arr);
        // Solution 1:
        let output1 = new Set(arr);
        console.log('Output1=> ', output1); // Set(5) { 1, 2, 3, 4, 5 }

        // Solution 1:
        let output2 = [...new Set(arr)];
        console.log('Output2=> ', output2) // [ 1, 2, 3, 4, 5 ]

        let output3 = [];
        let countObj = {};
        for (let item of arr) {
            //countObj[item] = countObj[item] >= 1 ? countObj[item] + 1 : 1; // same logic as below line
            countObj[item] = countObj[item] + 1 || 1;
            if (countObj[item] === 1) {
                output3.push(item);
            }
        }
        console.log('Output3=> ', output3, countObj, Object.keys(countObj)); // { '1': 2, '2': 1, '3': 2, '4': 3, '5': 1 } [ '1', '2', '3', '4', '5' ]

        let output4 = [];
        for (let item of arr) {
            if (output4.indexOf(item) === -1) {
                output4.push(item);
            }
        }
        console.log('Output4=> ', output4); // [ 1, 2, 3, 4, 5 ]

        let output5 = arr.filter((e, i, a) => a.indexOf(e) === i);
        console.log('Output5=> ', output5); // [ 1, 2, 3, 4, 5 ]

    }

    swapKeyValuePairs() {
        let obj = { one: 1, two: 2, three: 3 };
        console.log('Swap the key value pairs in given input object: ', obj);
        let newObj = {};
        for (let i of Object.keys(obj)) {
            //console.log(i, obj[i]);
            newObj[obj[i]] = i;
        }
        console.log('Output: ', newObj);  //Output: {1: 'one', 2: 'two', 3: 'three'}  
    }

    arrayToObject(arr = ['a', 'b', 'c', 'd']) {

        console.log('Input Array => ', arr);
        // Solution 1: Using spread operator
        let output1 = { ...arr };
        console.log('Solution 1 => ', output1);  // { "0": "a", "1": "b", "2": "c" }

        // Solution 2:
        let output2 = Object.assign({}, arr);
        console.log('Solution 2 => ', output2)  // { "0": "a", "1": "b", "2": "c" }

        // Solution 3:
        let output3 = arr.reduce((a, v) => ({ ...a, [v]: v }), {});
        console.log('Solution 3 => ', output3); //{ a: 'a', b: 'b', c: 'c', d: 'd' }

        // Solution 4: // a = result object, v = current value, i = index, 4th ar will be array
        let output4 = arr.reduce((a, v, i, arr) => ({ ...a, [v]: i }), {});
        console.log('Solution 4 => ', output4); // { a: 0, b: 1, c: 2, d: 3 }

        // For the Output just do i+1 in solution 4 {a:1,b:2,c:3,d:4}

        // Solution 5: 
        let output5 = arr.reduce(function (result, item, index, array) {
            result[index] = item; //a, b, c // swap index with item to swap object keys
            return result;
        }, {});
        console.log('Solution 5 => ', output5);

    }

    arrayObjectsTokeyObject() {

        // from:
        const arr = [
            {
                id: 123,
                name: 'aaa'
            },
            {
                id: 456,
                name: 'bbb'
            },
            {
                id: 789,
                name: 'ccc'
            }
        ];
        // to:
        // {
        //     '123': { id: 123, name: 'aaa' },
        //     '456': { id: 456, name: 'bbb' },
        //     '789': { id: 789, name: 'ccc' }
        // }
        const result = arr.reduce((obj, cur) => ({ ...obj, [cur.id]: cur }), {})
        return result;

    }

    countEachVowelsInString() {
        //Write a function which will take a string as an argument and return the occurrence of all the vowels in that string

        let cities = "mumbai banglore hyderabad";
        let vowelsArr = 'aeiou'.split('');
        let output = {};
        for (let char of cities) {
            if (vowelsArr.indexOf(char) !== -1) {
                if (output[char]) {
                    output[char]++;
                } else {
                    output[char] = 1;
                }
            }
        }
        console.log(vowelsArr, output); // Output:  { u: 1, a: 4, i: 1, o: 1, e: 2 }
    }

    totalVowelsInString(str = "I am a world-class developer using iterations") {
        // Write a function that returns the number of vowels found within a string.
        // Vowel characters are 'a', 'e', 'i', 'o', and 'u'.
        // Make sure the function is case insensitive!
        // --- Examples
        //   vowels('What') --> 1
        //   vowels('Why?') --> 0
        //   vowels('aEiOu') --> 5
        //   vowels('I am a world-class developer using iterations') --> 16

        str = str.toLowerCase(); let count = 0;
        const vowels = 'aeiou'.split('');
        for (let char of str) {
            if (vowels.indexOf(char) !== -1) {
                count++;
            }
        }
        console.log(count);
        return count;

    }

    sortObjectArrayByKeyValue() {
        console.log('Add new property to object and sort by new property added:');
        const peoples = [
            {
                id: 1,
                Name: "ABC",
                Age: 30
            },
            {
                id: 2,
                Name: "DEF",
                Age: 33
            },
            {
                id: 3,
                Name: "GHI",
                Age: 23
            },
            {
                id: 4,
                Name: "JKL",
                Age: 19
            }
        ];
        for (let people of peoples) {
            let currentyear = new Date().getFullYear();
            people['birthYear'] = currentyear - people['Age'];
        }
        const sortedDate = peoples.sort((a, b) => (a.birthYear > b.birthYear) ? 1 : -1);
        console.log(sortedDate);
    }

    stringCompression(str = 'aaabbapacccrrt') {
        if (str.length == 0) {
            console.log('Please enter valid string.');
            return;
        }
        var output = '';
        var count = 0;
        for (var i = 0; i < str.length; i++) {
            count++;
            if (str[i] != str[i + 1]) {
                var numCount = (count > 1) ? count : '';
                output += str[i] + numCount;
                count = 0;
            }
        }
        console.log(output); // a3b2apac3r2t
    }

    suffleArray(arr = [1, 2, 3, 4, 5]) {
        // Write a program to suffle an array elements
        let len = arr.length;
        for (let i in arr) {
            let idx1 = Math.floor(Math.random() * len);
            let idx2 = Math.floor(Math.random() * len);
            let temp = arr[idx1];
            arr[idx1] = arr[idx2];
            arr[idx2] = temp;
        }
        console.log(arr);
        return arr;
    }

    reverseArray(arr = [1, 2, 3, 4, 5]) {
        // Write a program to reverse array elements
        console.log('Input: ', arr);
        // mannual solution
        for (let i = 0; i < arr.length / 2; i++) {
            let temp = arr[i];
            arr[i] = arr[arr.length - i - 1];
            arr[arr.length - i - 1] = temp;
        }
        // arr.reverse() built-in method solution
        console.log('Output: ', arr);
        return arr;
    }

    reverseString(str = 'abcd') {
        // Write a program to reverse string 
        // Return a string with the order of characters reversed
        //   reverse('abcd') === 'dcba'
        //   reverse('Hello!') === '!olleH'

        // solution 1:
        let res = "";
        for (let char of str) {
            res = char + res;
        }
        // solution 2:
        // return str.split('').reverse().join('');

        // solution 3:
        // return str.split('').reduce((output, char) => { output = char + output; return output; });

        // solution 4:
        // for (let i = 0; i < str.length; i++) {
        //  res = str[i] + res;
        // }

        console.log(res);
        return res;
    }

    reverseInt(n = 503) {
        // Given an integer, return an integer with the digits
        // reversed.
        // --- Examples
        //   reverseInt(13) === 31
        //   reverseInt(404) === 404
        //   reverseInt(100) === 1
        //   reverseInt(-13) === -31
        //   reverseInt(-100) === -1
        let str = n.toString();
        let reversed = "";
        for (let char of str) {
            reversed = char + reversed;
        }
        reversed = parseInt(reversed);
        if (n < 0) {
            reversed = reversed * -1;
        }
        return reversed;
    }

    twoSumSolution1(array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], sum = 5) {
        //Find pairs whose sum is equal to a common number from given array
        let map = {};
        const result = [];

        for (let item of array) {
            if (map[item]) {
                result.push([map[item], item]);
            } else {
                map[sum - item] = item;
            }
        }
        console.log(result);
        return result;
    }


    twoSumSolution2(arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], S = 6) {
        // our two sum function which will return
        // all pairs in the array that sum up to S
        var sums = [];
        var hashTable = {};

        // check each element in array
        for (var i = 0; i < arr.length; i++) {

            // calculate S - current element
            var sumMinusElement = S - arr[i];

            // check if this number exists in hash table
            // if so then we found a pair of numbers that sum to S
            if (hashTable[sumMinusElement.toString()] !== undefined) {
                sums.push([arr[i], sumMinusElement]);
            }

            // add the current number to the hash table
            hashTable[arr[i].toString()] = arr[i];

        }

        // return all pairs of integers that sum to S
        return sums;

    }

    twoDiv(A = [20, 40, 60, 60], m = 60) {
        const output = new Array(m + 1).fill(0);
        for (let x of A) {
            if (output[(m - x % m) % m]) {
                output[m] += output[(m - x % m) % m];
            } else {
                output[x % m]++;
            }

        }
        console.log(output[m]);
        return output[m];
    }


    // Check if two strings are anagrams of each other.
    // One string is an anagram of another if it uses exact same characters
    // in exact same quantity. Only consider word characters, and make sure the
    // function is case insensitive.
    // --- Examples
    //   anagrams('heart', 'earth') --> True
    //   anagrams('heart', '  earth') --> True
    //   anagrams('Heart!', 'EARTH') --> True
    //   anagrams('lol', 'lolc') --> False

    // Anagram of https://www.geeksforgeeks.org/check-whether-two-strings-are-anagram-of-each-other/

    anagramsSolution1(stringA = 'heart', stringB = 'earth') {
        stringA = stringA.toLowerCase().replace(/[^A-Z0-9]+/gi, "");
        stringB = stringB.toLowerCase().replace(/[^A-Z0-9]+/gi, "");

        if (stringA.length !== stringB.length) {
            return false;
        }

        if (stringA === stringB) {
            return true;
        }

        const stringACounts = {};

        for (let char of stringA) {
            stringACounts[char] = stringACounts[char] + 1 || 1;
        }

        for (let char of stringB) {
            if (!stringACounts[char]) {
                return false;
            } else {
                stringACounts[char]--;
            }
        }
        return true;
    }

    anagramsSolution2(stringA = 'Heart!', stringB = 'EARTH') {
        stringA = stringA.toLowerCase().replace(/[\W_]+/gi, "");
        stringB = stringB.toLowerCase().replace(/[\W_]+/gi, "");
        stringA = stringA
            .split("") // O(n)
            .sort() // O(nlogn)
            .join(""); // // O(n)
        //O(nlogn + 2n) = O(nlogn)
        stringB = stringB
            .split("")
            .sort()
            .join("");
        return stringA === stringB;
    }

    // Given a string, return true or false depending if the string
    // is a palindrome.  Palindromes are words that read the same backwards
    // and forwards. Make sure it is case insensitive!
    // --- Examples:
    //   palindrome("Madam") === true
    //   palindrome("love") === false

    palindromeSolution1(str = 'Madam') {
        str = str.toLowerCase();
        let reversedStr = "";
        for (let char of str) {
            reversedStr = char + reversedStr;
        }
        return str === reversedStr;
    }

    palindromeSolution2(str = 'Madam') {
        str = str.replace(/\W/g, '').toLowerCase();
        return (str == str.split('').reverse().join(''));

        // console.log(palindromeSolution2("level"));                   // logs 'true'
        // console.log(palindromeSolution2("levels"));                  // logs 'false'
        // console.log(palindromeSolution2("A car, a man, a maraca"));  // logs 'true'
    }

    stringArraySortLowerUpper() {
        var arr = ['INDIA', 'india', 'B', 'b', 'c', 'd', 'D', 'C'];
        console.log(arr.sort()); // ['B', 'C', 'D', 'INDIA','b', 'c', 'd', 'india']
        console.log(arr.sort().reverse()); // ['india', 'd', 'c', 'b', 'INDIA', 'D','C',     'B']

        //OUTPUT: ['india', 'INDIA', 'd', 'D', 'c', 'C', 'b', 'B']
    }

    arrayAddItemToFirstAndLast(arr = [1, 2, 3, 4, 5]) {
        // Expected Output ['start', 1, 2, 3, 4, 5, 'end'];

        // Solution 1: 
        arr.unshift('start');
        arr.push('end');

        // Solution 2: Using spread operator
        //let newArr = ['start', ...arr, 'end'];

        console.log(arr);
    }
    // deep copy clone object

    // Shallow copy
    // var A1 = {a: "2"};
    // var A2 = Object.assign({}, A1);
    // var A3 = {...A1};  // Spread Syntax
    clone(obj) {
        if (obj === null || typeof (obj) !== 'object' || 'isActiveClone' in obj)
            return obj;

        if (obj instanceof Date)
            var temp = new obj.constructor(); //or new Date(obj);
        else
            var temp = obj.constructor();

        for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                obj['isActiveClone'] = null;
                temp[key] = clone(obj[key]);
                delete obj['isActiveClone'];
            }
        }
        return temp;
    }

    // extends 'from' object with members from 'to'. If 'to' is null, a deep clone of 'from' is returned
    // var obj = {
    //     date: new Date(),
    //     func: function(q) { return 1 + q; },
    //     num: 123,
    //     text: "asdasd",
    //     array: [1, "asd"],
    //     regex: new RegExp(/aaa/i),
    //     subobj:
    //     {
    //         num: 234,
    //         text: "asdsaD"
    //     }
    // }

    // var clone = extend(obj);
    extend(from, to) {
        if (from == null || typeof from != "object") return from;
        if (from.constructor != Object && from.constructor != Array) return from;
        if (from.constructor == Date || from.constructor == RegExp || from.constructor == Function ||
            from.constructor == String || from.constructor == Number || from.constructor == Boolean)
            return new from.constructor(from);

        to = to || new from.constructor();

        for (var name in from) {
            to[name] = typeof to[name] == "undefined" ? extend(from[name], null) : to[name];
        }

        return to;
    }

    //How would you check if a number is an integer?

    isInt(num) {
        return num % 1 === 0;
    }
    //   console.log(isInt(4)); // true
    //   console.log(isInt(12.2)); // false
    //   console.log(isInt(0.3)); // false

    flattenArray1(arr = [1, 2, [3, 4], 5, [[[6, 7], 8, [[[[9]]]]]]]) {
        // Solution 1 Using inbuild method of es6 with flat level
        let output1 = arr.flat(Infinity);
        console.log('Solution 1=>', output1)
        // output [1, 2, 3, 4, 5, 6, 7, 8, 9]
    }

    flattenArray2(ary = [1, 2, [3, 4], 5, [[[6, 7], 8, [[[[9]]]]]]]) {
        let output = ary.reduce((result, value) => {
            if (Array.isArray(value)) {
                result = result.concat(this.flattenArray2(value));
            } else {
                result.push(value);
            }
            return result;
        }, []);
        return output;
    }

    groupAnagrams(strs = ["eat", "tea", "tan", "ate", "nat", "bat"]) {
        // Input: strs = ["eat","tea","tan","ate","nat","bat"]
        // Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
        let result = {};
        for (let word of strs) {
            let cleansed = word.split("").sort().join("");
            if (result[cleansed]) {
                result[cleansed].push(word);
            } else {
                result[cleansed] = [word];
            }
        }
        return Object.values(result); // [ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] ]
    }

    // Write polyfill for reduce

    reducePollyfill() {

        // this approach is when no reduce method is available in older browser
        if (!Array.prototype.reduce) {
            Array.prototype.reduce = function (cb, acc) {
                for (var i = 0; i < this.length; i++) {
                    var newAcc = cb(acc, this[i], i, this);
                    if (newAcc === undefined)
                        continue;
                    acc = newAcc
                }
                return acc;
            }
        }

    }

    reducePollyfill() {
        Array.prototype.newReduce = function (cb, acc) {
            for (var i = 0; i < this.length; i++) {
                var newAcc = cb(acc, this[i], i, this);
                if (newAcc === undefined)
                    continue;
                acc = newAcc
            }
            return acc;
        }

        Array.prototype.newReduce1 = function (cb, acc) {
            let accum = acc || undefined;
            for (var i = 0; i < this.length; i++) {
                var newAcc = cb(accum, this[i], i, this);
                console.log(newAcc);
                if (newAcc === undefined)
                    continue;
                accum = newAcc
            }
            return acc;
        }
        
        Array.prototype.newReduce2 = function (callback, startingValue) {
            // as starting value is an optional param
            // make a check
            let accumulator = startingValue || undefined;
            for (let index = 0; index < this.length; index++) {
                if (accumulator) {
                    accumulator = callback(accumulator, this[index], index, this)
                } else {
                    accumulator = this[index]
                }
            }
            return accumulator;
        }
        //https://medium.com/@noamsauerutley/group-anagrams-in-javascript-9fa05b9e0879
    }

    findSome(arr = [0, 2, 3, 4, 5]) {
        return arr.newReduce2((acc, v) => acc * v);
    }

    flattenObj() {
        let obj = {
            a: {
                b: {
                    c: 1,
                    p: 2
                }
            },
            d: 1,
            x: {
                y: 5
            }
        };
        const flattenObj = (obj, parent, res = {}) => {
            for (const key of Object.keys(obj)) {
                const propName = parent ? parent + '.' + key : key;
                if (typeof obj[key] === 'object') {
                    flattenObj(obj[key], propName, res);
                } else {
                    res[propName] = obj[key];
                }
            }
            return res;
        }
        return flattenObj(obj);
    }

    // check common character from two given string like 
    //hi, bye = false as no common charector
    // hello, world = true as l and o is common
    checkCommonString(s1, s2) {
        var hash = {};
        for (var i = 0; i < s1.length; i++) {
            let char = s1[i].charCodeAt(0);
            hash[char] = hash[char] ? hash[char]++ : 1
        }

        for (var i = 0; i < s2.length; i++) {
            if (hash[s2[i].charCodeAt(0)] > 0)
                return true;
        }
        return false;
    }
    // check in array of string values

    commonSubstring(a = ['ab', 'bc', 'ef'], b = ['af', 'pw', 'gf']) {

        for (let i = 0; i < a.length; i++) {

            if (this.checkCommonString(a[i], b[i])) {
                console.log('YES');
            } else {
                console.log('NO');
            }
        }
    }

    inventoryList() {
        // write your code here
        let items = [];

        const add = (name) => {
            if (items.indexOf(name) === -1) {
                items.push(name);
            }
        }
        const remove = (name) => {
            items = items.filter(item => item !== name);
        }

        const getList = () => {
            return items;
        };

        return { add, remove, getList };

    }

}

const js = new JSProblems();


//js.stringCompression('ppppshkshdkjjjjjj');
// console.log(js.reducePollyfill());
console.log(js.commonSubstring());

// Must check references:
// https://www.thatjsdude.com/interview/js1.html
// https://www.thatjsdude.com/interview/js2.html
// https://www.fullstack.cafe/blog/javascript-code-interview-questions

// https://jsvault.com/array-flatten
// https://akashjain993.medium.com/js-polyfills-interview-questions-cb431f3c98dd

// https://reeversedev.com/polyfill-for-foreach-map-filter-reduce
// https://reeversedev.com/polyfill-for-foreach-map-filter-reduce
// BST algo and sorting alog
// Searching algo




