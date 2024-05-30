//1.a.	Print odd numbers in an array

var temp = [];
var odd = function (arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            temp.push(arr[i]);
        }
    }
    return temp;
}
console.log(odd([54, 43, 61, 82, 97, 13, 16]))

    // IIFE
    (function (arr) {
        var temp = [];
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] % 2 != 0) {
                temp.push(arr[i]);
            }
        }
        return temp;
    })
    ([54, 43, 61, 82, 97, 13, 16])


//1.b.	Convert all the strings to title caps in a string array

var str = function (arr) {
    var res = [];
    for (var i = 0; i < arr.length; i++) {
        res.push(arr[i].toUpperCase());
    }
    return res;
}
console.log(str(["guvi", "geek", "research"]))

    //IIFE

    (function (arr) {
        var res = [];
        for (var i = 0; i < arr.length; i++) {
            res.push(arr[i].toUpperCase());
        }

        return res;
    })(["guvi", "geek", "research"])


//1.c.	Sum of all numbers in an array

var sum = function (arr) {
    var res = 0;
    for (var i = 0; i < arr.length; i++) {
        res = res + arr[i];
    }
    return res;
}
console.log(sum([1, 2, 3, 4, 5]));

//IIFE

(function (arr) {
    var res = 0;
    for (var i = 0; i < arr.length; i++) {
        res = res + arr[i];
    }
    return res;
})([1, 2, 3, 4, 5]);



//1.d.	Return all the prime numbers in an array

function primeCheck(a) {
    if (a < 2) {
        return false;
    }
    for (var i = 2; i * i <= a; i++) {
        if (a % i === 0) {
            return false;
        }
    }
    return true;
}

function prime(array) {
    const temp = [];
    for (let i = 0; i < array.length; i++) {
        if (primeCheck(array[i])) {
            temp.push(array[i]);
        }
    }
    return temp;
}
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const primes = prime(array);
console.log(primes);


//1.e.	Return all the palindromes in an array

var spellcheck = function (a) {
    var b = a.split("").reverse().join("");
    if (a != b) {
        return false
    }
    return true;
}
var palindrome = function (arr) {
    var temp = [];
    for (var i = 0; i < arr.length; i++) {
        if (spellcheck(arr[i])) {
            temp.push(arr[i]);
        }
    }
    return temp;
}
console.log(palindrome(["india", "madam",]));



//1.f.	Return median of two sorted arrays of the same size.

var median = function (arr, ln) {
    var n = ln / 2;
    var res = (arr[n - 1] + arr[n]) / 2;
    return res;
}
var a = [2, 13, 25, 6, 7, 12, 45, 34];
var b = [5, 3, 75, 23, 4, 1, 33, 83];
var c = a.length;
var d = b.length;
var e = c + d;
const mergedarr = a.concat(b);
mergedarr.sort(function (x, y) { return x - y });

console.log(median(mergedarr, e));
//console.log(mergedarr);

//1.g.	Remove duplicates from an array


function duplicate(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}
let arr = ['1', '2', '2', 2, 4, 5, 6, 7, 3, 4, 5, "apple", "orange", "apple", "pineapple", "orange"];
console.log(duplicate(arr));



//1.h.	Rotate an array by k times

var resArray = function (arr, k) {
    var n = arr.length;
    if (k == 0) {
        return;
    }
    var temp = arr[n - 1];
    for (var i = n - 1; i > 0; i--) {
        arr[i] = arr[i - 1];
    }
    arr[0] = temp;
    resArray(arr, k - 1);
}
const arr = [18, 23, 41, 84, 119, 45, 38, 100];
const k = 3;
resArray(arr, k);
console.log(arr);



//2.a.	Print odd numbers in an array

var temp = [];
var odd = (arr) => {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            temp.push(arr[i]);
        }
    } return temp;
}
console.log(odd([54, 43, 61, 82, 97, 13, 16]))


//2.b.	Convert all the strings to title caps in a string array

var capString = (arr)=> {
    var temp = [];
    for (var i = 0; i < arr.length; i++) {
        let a = arr[i].split("")
        let b = a[0].toUpperCase();
        a.splice(0,1,b);
        temp.push(a.join(""))
    }
    return temp;
}
console.log(capString(["guvi", "geek", "research"]));

//2.c.	Sum of all numbers in an array

const arr = [5, 6, 13, 0, 1, 18, 23];

const sum = arr.reduce((a, b) => a + b);
console.log(sum);

//2.d.	Return all the prime numbers in an array

const newArray = [1, 3, 2, 5, 10,7,12,25,17];
const isPrime = num => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num !== 1;
};
const myPrimeArray = newArray.filter(element => isPrime(element));
console.log(myPrimeArray);


//2.e.	Return all the palindromes in an array

let checkPalindrome = el=> {
    let str = String(el);
    return str === str.split("").reverse().join("");
};
const arr =["madam", "hello", "guvi", "radar"];

const findPalindrome = arr => {
   return arr.filter(el => checkPalindrome(el));
}
console.log(findPalindrome(arr));