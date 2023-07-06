'use strict';

// --------------------- Operators (Оператори) ------------------

// Математичні оператори --------------
// +, -, *, /, **, % -------------

// let numb = prompt('Enter som number from 1 to 100','');
// let squareNumb = numb ** 10;
// let remainderNumb = numb % 9;  //5 / 3; 3 / 3  5 -3 = 2
// let sumNumb = numb + 888;

// console.log(squareNumb);
// console.log(remainderNumb);
// console.log(sumNumb);
// console.log(numb);

// || - або, працює до першої істини (true), якщо немає true 
    // ,то повретає останнє значення
// && - i, або, працює до першої лжи (false), якщо немає false , 
// то поверне останнє значення
            //false false   false
            let someVar = 0 || 10 || null;
            // console.log(someVar);
                            // false  false true
            let someVar_2 = 10 && 'MArina' && ' ';
            // console.log(someVar_2);
                                    // false         false
                                        // 0   ||    null


            let someExersices = -0 && (' ' || null) && NaN;
            // console.log(someExersices);
            



// Оперпатори порівняння -------------
// >, <, >=, <=, ==, ===, !=, !==
let res = 3 <= 3; //3 < 3; 3 = 3;
let res_2 = 3 >= 2;

// true false - true
// false true - true
// false false - false

// console.log(res);
// console.log(res_2);


let res_3 = '8' == 8;
let res_4 = '8' === 8;

// console.log(res_3);
// console.log(res_4);

let res_5 = null == undefined;
let res_6 = null === undefined;

// console.log(res_5);
// console.log(res_6);

let res_7 = NaN === NaN;

// console.log(res_7);

let res_8 = 8 !== 8;
// console.log(res_8);

let res_9 = 'со' < 'Cода';
// console.log(res_9);

// 'со' 'сода'
// --------------------------------

// increment, decrement

let multiplicat = 2;

// multiplicat = multiplicat * 2;
multiplicat *= 2

// console.log(multiplicat);

// ---------- incr --------
let incr = 0;
// 1) incr = incr + 1;
// 2) incr += 1;
// 3) incr++;
// 4) ++incr;

console.log(incr);

// let res_10 = 8 + ++incr;
// console.log(res_10);
// console.log(incr);

              // (0  +    -1  -   0)  + 1
let res_11 = incr++ + --incr - ++incr;
    
console.log(res_11);
console.log(incr);


