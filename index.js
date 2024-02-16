

//задача 1

var a = prompt('Введите число', 100);

function getSum(a) {

    var sum = 0;

    for (i = 0; i <= a; i++) {
        sum = sum + i;
    }

    console.log(sum)
}

getSum(a)




//задача 2

var money = prompt('какую сумму вы хотите взять?');
money = Number(money);

function value(money) {
    var pereplata;
    var allSum;
    var month;

    pereplata = money * 17 / 100;
    allSum = (money + pereplata);
    month = allSum / 5 / 12;
    

    console.log('вся сумма составит ' + allSum)
    console.log('переплата составит ' + pereplata)
    console.log('ежемесячная оплата составит ' + month)
}

value(money)




//задача 3

var str = prompt('yours word');
var from = prompt('from');
var to = prompt('to');

console.log(str)

function trimString(str, from, to) {
    
    var n = '';
    
    while ( from != to) {
        n = n + str[from];
        from++;
    }

    console.log(n)
}
trimString(str, from, to)




//задача 4


var number = prompt('ваше число', 2021);

console.log(number)

function getSumNumbers(number) {
    var sum = 0;
    var c = 0;

    for ( i = 0; i < number.length; i++) {

        c = number[i];
        c = Number(c);

        sum = sum + c;
    }

    console.log(sum)
}

getSumNumbers(number)




//задача 5

var a = prompt('a = ?', 1);
var b = prompt('b = ?', 1);

a = Number(a);
b = Number(b);


function getSum(a, b) {
    var sum = 0;

    if (a === b) {
        console.log('Since both are same')
        return a;
    }

    if (a > b) {
        var temp = a;
        a = b;
        b = temp;
    }

    for (i = a; i <= b; i++) {
        sum += i;
        a++;
    }

    console.log(sum)
}

getSum(a, b)





//задача 6

var bool = confirm('true or false');

function fooboo(bool) {
    if (bool == true) {
        foo()
    } else {
        boo()
    }
}

function foo() {
    console.log('foo')
    return;
}

function boo() {
    console.log('boo')
    return;
}

fooboo(bool)