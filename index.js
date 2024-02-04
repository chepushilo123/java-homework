var a;
var b;
var c;
var summ;

var multiply;

var word = 0;

console.log(a = prompt('назови первое число'))
console.log(b = prompt('назови второе число'))
console.log(c = prompt('назови третье число'))

console.log(typeof(a))
console.log(typeof(b))
console.log(typeof(c))


if ( Boolean(a) == false )   {
    console.log(a = prompt(' какое первое число?'))
    console.log(typeof(a))
}

if ( Boolean(b) == false )   {
    console.log(b = prompt(' какое второе число?'))
    console.log(typeof(b))
}

if ( Boolean(c) == false )   {
    console.log(c = prompt(' какое третье число?'))
    console.log(typeof(c))
}

if ( Boolean(a) + Boolean(b) +Boolean(c) == 0 ) {
    alert('почему вы не написали числa?')
}

console.log(a = Number(a))
console.log(b = Number(b))
console.log(c = Number(c))

if (a * b * c >= 1) {
    multiply = confirm('эти числа умножить или сложиить?')
}   else {
    word = 1;
    alert('Ну и ладно...')
}

if (word == 1) {

}   else {
    if (multiply == 1) {
        summ = a * b * c;
        alert('получилось число ' + summ)
    }   else {
        summ = a + b + c;
        alert('получилось число ' + summ)
    }
}

console.log(summ)