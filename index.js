//Задача 1

var x = 20;
var y = 58;
var z = 42;
var summ = x + y + z;
console.log(summ)





//Задача 2

var year;
var hours;
var minuts;
var myAgeInSeconds;

year = prompt('Укажите ваш возраст', 20)

year = Number(year);

hours = year * 8760;
console.log(hours)
minuts = hours * 60;
console.log(minuts)
myAgeInSeconds = minuts * 60;
console.log(myAgeInSeconds)

alert('вам ' + myAgeInSeconds + ' в секундах')





//Задача 3

var count = 42
var userName = '42'

count = String(count)
userName = Number(userName)


//второй способ

var a = count;
count = userName;
userName = a;





//Задача 4

var a = 1
var b = 2
var c = ' белых медведей'

a = String(a)
b = String(b)

var together = a + b + c;

console.log(together)





//Задача 5
var vname = 'vasya';
var number = 17;
var bol = true;

console.log('Variable: ' + vname + ' have type: ' + typeof(vname))
console.log('Variable: ' + number + ' have type: ' + typeof(number))
console.log('Variable: ' + bol + ' have type: ' + typeof(bol))






//Задача 6

var firstname;
var lastname;

firstname = prompt('Укажите ваше имя')
lastname = prompt('Укажите вашу фамилию')

firstname = firstname + ' ';

console.log('Добрый день, ' + firstname + lastname)
alert('Добрый день, ' + firstname + lastname)





//Задача 7

var a = 4;
var b = 3;

a = --a;
b = ++b;

console.log(a)
console.log(b)





//Задача 8

var str = 'true';
var bool = false;
var num = 17;
var undef = undefined;
var nul = null;

console.log(typeof(str))
console.log(typeof(bool))
console.log(typeof(num))
console.log(typeof(undef))
console.log(typeof(nul))





//Задача 9

var height = 15;
var width = 20;

if (height > width) {
    console.log(height)
} else {
    console.log(width)
}





//Задача 10

for(i = 0; i < 20; i++) {
    if (i % 3 === 0) {
        console.log(i)
    }
}




//Задача 11

var key = true;
var documents = true;
var pen = true;
var apple = true;
var orange = false;
var shouldGoToWork;

if (key && documents && pen && apple && orange === true) {
    shouldGoToWork = true;
    console.log(shouldGoToWork)
} else {
    shouldGoToWork = false;
    console.log(shouldGoToWork)
}





//Задача 12

var number;
number = prompt('Введите число', 30)
number = Number(number)
console.log(number)

if (number % 3 === 0  && number % 5 === 0) {
    console.log('FizBuz')
} else {
    if (number % 3 === 0) {
        console.log('Fiz')
    }

    if (number % 5 === 0 ) {
        console.log('Buz')
    }
}





//Задача 13

var age;
age = prompt('Укажите свой возраст')
age = Number(age)

if (age >= 18) {
    alert('Попей пивка.')
} else {
    if (age <= 15) {
        alert('Пей колу')
    } else {
        if (age === 16 || 17 || 18){
            alert('Можешь выкурить сигаретку, только маме не говори')
        }
    }
}




//Задача 14

var country;
country = prompt('В какую сторону света вы бы хотели отправиться?', 'восток')

switch(country) {
    case 'юг':
        alert('на юг пойдешь счастье найдешь')
        break;
    case 'север':
        alert('на север пойдешь много денег найдешь')
        break;
    case 'запад':
        alert('на запад пойдешь верного друга найдешь')
        break;
    case 'восток':
        alert('на восток пойдешь разработчиком станешь')
        break;
    default:
        console.log('Попробуйте ещё раз')
}
