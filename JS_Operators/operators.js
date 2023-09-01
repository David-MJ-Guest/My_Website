"use strict";

let x = 0; // initialise x as 0

console.log("6 + 6 =", 6 + 6);
console.log("6 - 6 =", 6 - 6);
console.log("6 * 6 =", 6 * 6);
console.log("6 / 6 =", 6 / 6);
console.log("6 ** 6 =", 6 ** 6);
console.log("10 % 6 =", 10 % 6);

// concatenation
console.log("27" + "27");

console.log("Jordan" + " "  + "Harrison");

// type coercion
console.log("27" * "27");

console.log("Jordan" * "Harrison");

console.log("NaN:", typeof NaN);

// Boolean
console.log(true && false);

console.log(true || false);

console.log(2 * 2 === 4 && 5 > 3);

console.log(2 * 2 === 4 && 5 > 6);

console.log(2 * 2 === 4 || 5 > 6);

console.log(!true);
console.log(!false);

let name = "Steve";

let me = `Hello, my name is ${name}`;

console.log("Me:", me);

let num = 12;

console.log("Num:", num);

console.log("Num++:", num++);

console.log("Num:", num);

console.log("++Num:", ++num);

console.log("Num:", num);

console.log("Num--:", num--);

console.log("Num:", num);

console.log("--Num:", --num);

console.log("Num:", num);

console.log("Num += 12:", num += 12);
console.log("Num -= 12:", num -= 12);
console.log("Num *= 12:", num *= 12);
console.log("Num /= 12:", num /= 12);
console.log("Num %= 7:", num %= 7);
console.log("Num **= 7:", num **= 7);

//Relational Operators
console.log(5.3);
console.log(3 !=3);
console.log(3 <= 2 && 5 >2);
console.log(!5 > 3)

// Mismatched Types
console.log(5 + "5");
console.log(5 + true);
console.log(5 * 5);
console.log(1 == true);
console.log(1 === true);