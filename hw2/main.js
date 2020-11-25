'use strict'

// #1
var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2  - инкременатция "а" идет перед присваением переменной "с"
d = b++; alert(d);           // 1  - инкременатция "b" идет после присваения переменной "d"
c = (2+ ++a); alert(c);      // 5  - a=2, к тому же инкрементируется до присваения "c", поэтому 2+3 = 5
d = (2+ b++); alert(d);      // 4  - b=2, инкрементируеся после прсиваения "d"
alert(a);                    // 3  - а=3
alert(b);                    // 3  - b=3


// #2

// Чему будет равен x в примере ниже?
var a = 2;
var x = 1 + (a *= 2); // a*=2 - выполняется первым + "а" сразу становится 4, поэтому 1 + 4 = 5


// #3


const a = 4;
const b = 5;

console.log(foo(a, b));

function foo (a, b) {
    if (a >= 0 && b >= 0) {
        return a - b;
    }

    return a < 0 && b < 0 ? a * b : a + b;
}


// #4

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

const a = getRandomInt(16);

loopLog(a);

function loopLog(a) {
    switch (a) {
        case 15:
            console.log('15');

            break;
        default:
            console.log(a);

            return loopLog(a + 1);
    }
}

// #5

function plus(a, b) {
    return a + b
}

function minus(a, b) {
    return a - b;
}

function multi(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}


// #6

function mathOperation(a, b, operation) {
    switch (operation) {
        case 'plus':
            return plus(a, b);

        case 'minus':
            return minus(a, b);

        case 'multi':
            return multi(a, b);

        case 'division':
            return division(a, b);
    }
}


// #7

// https://learn.javascript.ru/comparison#strannyy-rezultat-sravneniya-null-i-0


// #8

function power(val, pow) {
    return pow > 0 ? val * power(val, pow - 1) : 1;
}

