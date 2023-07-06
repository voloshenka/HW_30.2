'use strict';
//----------------------------------------------МИНИМУМ-----------------------------------------------//
//Задание 1//
let a = 0.1,
    b = 0.2,
    c = a + b;
console.log(c);

//Задание 2 //
let d = '1',
    e = 2,
    f = +d + e;
console.log(f);


//Задание 3 //
/*let flesh = prompt('Чтоб узнать сколько файлов поместится на вашу флешку нам необходимо узнать ее обьем в Гб', );
let userFlash = flesh;
console.log(userFlash);
let capacity = userFlash / 820;
//console.log(capacity);//
console.log(`На Вашу флешку, емкостью ${userFlash}, поместится ${capacity} файлов`);
alert(`На Вашу флешку, емкостью ${userFlash}, поместится ${capacity} файлов`); */
//------------------------------------Норма-------------------------------------------------------------//
//Задание 1//
/*let summa = prompt('Какой суммой вы располагаете для покупки шоколада', );

let cash = summa; //В кошельке
console.log(cash);
let price = prompt('Сколько стоит Ваша любимая шоколадка?', ); // стоит шоколадка
console.log(price);
let choco = Math.floor(cash/price); //количество шоколадок
console.log(choco);
let total = choco*price;
console.log(total);
let change = cash - total;
alert(`Вы располагаете суммой ${cash} грн. На ${cash}грн  Вы можете купить ${choco} любимых шоколадок по цене  ${price} грн и у вас останется ${change} грн. `)
 */

//-------------------------------------------------------Максимум----------------------------------------//
let contrib = prompt('На какую сумму вы желаете оформить депозит?', );
let invest = contrib; //Сумма депозита
console.log(`Сумма инвестиции ${invest} грн`);
let rateYear = 5; //Процентная ставка в год
console.log(`Процентная ставка по вашему вкладу: ${rateYear} % годовых`);
//alert(`Процентная ставка по вашему вкладу: ${rateYear} % годовых`);//
let rateMon = rateYear/12; //Процентная ставка в месяц
console.log(`Процентная ставка по вашему вкладу: ${rateMon } % в месяц`);
let term = 2; // срок месяцев
let divid1 = (rateMon*invest) / 100; //Дивиденды 1 месяц
console.log(`${divid1} грн. - сумма дивидендов за первый месяц`);
let remain = +invest+divid1; // остаток на счету
console.log(`По истечению первого месяца на вашем счету ${remain}грн. В следующем месяце проценты будут начисляться уже на эту сумму `);
let divid2 = (rateMon*remain) / 100; //Дивиденты 2 месяц
let divid = +divid1 + divid2;
let payout = +invest + divid;
console.log(`Выплата через ${term} месяца составит ${payout} грн. Инвестировав ${invest} грн. Вы заработали ${divid} грн. `);
alert (`Выплата через ${term} месяца составит ${payout} грн. Инвестировав ${invest} грн. Вы заработали ${divid} грн. `)