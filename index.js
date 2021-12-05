class JSProblems {
    constructor() { }

    getDuplicateValuesFromArray() {
        // Write a program to output all duplicates in array.
        let array = [1, 4, 5, 1, 3, 7, 7, 8, 8, 6, 3]; //1, 3, 7, 8
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

    // Given an integer, return an integer with the digits
    // reversed.
    // --- Examples
    //   reverseInt(13) === 31
    //   reverseInt(404) === 404
    //   reverseInt(100) === 1
    //   reverseInt(-13) === -31
    //   reverseInt(-100) === -1

    reverseInt(n = 503) {
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


    twoSum(array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], sum = 5) {
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

    palindrome(str = 'Madam') {
        str = str.toLowerCase();
        let reversedStr = "";
        for (let char of str) {
            reversedStr = char + reversedStr;
        }
        return str === reversedStr;
    }

    stringArraySortLowerUpper() {
        var arr = ['INDIA', 'india', 'B', 'b', 'c', 'd', 'D', 'C'];
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



}

const js = new JSProblems();

//js.stringCompression('ppppshkshdkjjjjjj');
console.log(js.arrayAddItemToFirstAndLast());

// references:
// https://www.thatjsdude.com/interview/js1.html
// https://www.thatjsdude.com/interview/js2.html



// BST algo and sorting alog
// Searching algo
