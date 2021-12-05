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

}

const js = new JSProblems();

//js.stringCompression('ppppshkshdkjjjjjj');
console.log(js.anagramsSolution2());


// BST algo and sorting alog
// Searching algo
