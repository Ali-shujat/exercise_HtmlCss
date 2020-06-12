console.log("LAB 4 - Javascript!");

// 1.	Sum 3 Numbers
var myArray = ['2', '3', '4'];
Addition();
myArray = ['1.5', '1.5', '-1'];
Addition();
// 2.	Sum And VAT
myArray = ['1.20', '2.60', '3.50'];
AdditionFloat();
myArray = ['3.12', '5', '18', '19.24', '1953.2262', '0.001564', '1.1445'];
AdditionFloat();


function Addition() {
    var total = parseInt(myArray[0]) + parseInt(myArray[1]) + parseInt(myArray[2]);
    console.log(total);
    return total;
}

function AdditionFloat() {
    let addNum = 0;
    for (let i = 0; i < myArray.length; i++) {
        addNum = addNum + parseFloat(myArray[i]);
    }
    var vat = addNum / 100 * 20;
    console.log("sum : " + addNum);
    console.log("VAT : " + vat);
    console.log("Total :" + (addNum + vat));
}

// 3.	Letter Occurrences In String
// Write a JS function that counts how many times a specific letter occurs in a given string.
// The input comes as array of string elements. The first element is the string to check and the second element is the letter to count.
// The output should be returned as a result of your function

var strArray = ['hello', 'l'];
letterCount();
strArray = ['panther', 'n'];
letterCount();

function letterCount() {
    let count = 0
    let position = strArray[0].indexOf(strArray[1])
    while (position !== -1) {
        count++
        position = strArray[0].indexOf(strArray[1], position + 1)
    }
    console.log(count)
}

// 4.	Filter By Age
// Write a JS function that stores the name and age of two persons in objects and then filters them by minimum age.

var input = ['12', 'Ivan', '15', 'Asen', '9'];

// 5.	String Of Numbers 1…N
// Write a JS function that read a number n as input and prints all numbers from 1 to n, concatenated as a single string.

var numArr = ['12'];
var times = Number(numArr[0]);
var output = 0;
for (var i = times; i <= times; i++) {
    for (var j = 1; j <= i; j++) {
        output += j + '';
    }
}
console.log(output);
// 6.	Figure Area
// Write a JS function that calculates the area of the figure on the right by given values for w, h, W and H. The lower right corner is always common for the two rectangles.

var rctgl = ['2', '4', '5', '3'];
var a1 = rctgl[0] * rctgl[1];
var a2 = rctgl[2] * rctgl[3];
var c;
if(a1>a2){
    c = a1 - a2;
}

var d = c + a1;
console.log("Area :" + d);

// 7.	Next Day
// Write a JS function that calculates the date of the next day by given year, month and day.
// The input comes as array of three string elements that need to be parsed as numbers. The first element is the year, the second is the month and the third is the day.
var input = ['2016', '9', '30'];
var yr = Number(input[0]);
var mn = Number(input[1]);
var dt = Number(input[2]);
var d = new Date(yr, mn - 1, dt + 1);
console.log(d);
d.setDate(d.getDate() + 1);
console.log(d);

// 8.	Distance between Points
// Write a JS function that calculates the distance between two points by given x and y coordinates. Use objects to store the two points.
var crd = ['2', '4', '5', '0'];
distanceCal();
crd = ['2.34', '15.66', '-13.55', '-2.9985'];
distanceCal();
function distanceCal() {
    var a = crd[0] - crd[2];
    var b = crd[1] - crd[3];
    var line = Math.sqrt(a * a + b * b);
    console.log("Distane :" + line);
}


