//задача 1

const obj = {
    name: 'petya',
    age: 40,
};

delete obj.name;
delete obj.age;

console.log(obj)





//задача 2

const obj = {
    name: 'petya',
    age: 40,
};

let key = prompt('key?')


if (Boolean(obj[key]) === true) {
    console.log('true')
} else {
    console.log('false')
}






//задача 3

const student = {
    name: 'John',
    age: 19,
    isHappy: true
}

for (let key in student) {
    console.log(key)
}

for (key in student) {
    console.log(student[key])
}





//задача 4

const colors = {
    'ru pum pu ru rum': {
        red: 'красный',
        green: 'зеленый',
        blue: 'синий',

        getRed: function () {
            console.log(this.red)
        },
        getBlue: function () {
            console.log(this.blue)
        },   
    },

  };

colors["ru pum pu ru rum"].getRed()
colors["ru pum pu ru rum"].getBlue()







//задача 5

let salaries = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    igor: 664,
    alexandra: 199,
}

let sum = 0;
let number = 0;

for (let key in salaries) {
    sum += salaries[key];
    number++;
}

let sredSum = sum / number;

console.log(sum);
console.log(sredSum)






//задача 6

const user = {};

let rename = function () {
    user.login = prompt('введите имя');
    user.password = prompt('придумайте пароль');
}

rename()

let bool = confirm('сохранить логин и парль?')

if (Boolean(bool) === false) {
    rename()
}

let checklogin = prompt('Введите логин');
let checkPassword = prompt('Введите пароль');

if (user.login === checklogin && user.password === checkPassword) {
    alert('добро пожаловать')
} else {
    alert('error')
}