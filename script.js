console.log('------------- #4');
function sum (a, b) {
    return a + b;
}
console.log(sum(7, 2));

function subtraction (c, d) {
    return c - d;
}
console.log(subtraction(7, 2));

function multiplication (g, h) {
    return g * h;
}
console.log(multiplication(3, 2));

function division (e, f) {
    return e / f;
}
console.log(division(8, 2));

console.log('------------- #5');
function showNumbers(n) {
    let  numbers = '';
    for (let i = 1; i <= n; i++) {
        numbers = numbers + i + ' ';       
    }
    console.log(numbers) 
}
showNumbers(5);

console.log('------------- #6');
function showNumbers2(n) {
    let  numbers2 = '';
    for (let i = 5; i >= n; i--) {
        numbers2 = numbers2 + i + ' ';       
    }
    console.log(numbers2) 
}
showNumbers2(1);

console.log('------------- #7');
function pow(x, n) {
    if (n === 0) {
        return 1;
    } else if ( n <= 0) {
        n *= -1;
        let result = x;
        for (let i = 1; i < n; i++) {
            result *= x;
        }
        return 1/result; 
    } else {
        let result = x;
        for (let i = 1; i < n; i++) {
            result *= x;
        }
        return result; 
    }
}
console.log(pow(3, 2));

console.log('------------- #8');
function isBigger(a, b) {
    return a > b;
}
console.log(isBigger(5, -1));

console.log('------------- #9');
function isSmaller(a, b) {
    return a < b;
}
console.log(isSmaller(5, -1));