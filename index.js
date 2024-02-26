//задача 1

const colors = ['red', 'green', 'blue'];
console.log(colors.length);




//задача 2

const animals = ['monkey', 'dog', 'cat'];
console.log(animals.at(-1));    





//задача 3

const numbers = [5, 43, 63, 23, 90];

numbers.splice(0,numbers.length);

let dl = numbers.length;
for (let i  = 0; i < dl; i++) {
   numbers.pop(); 
}

console.log(numbers)



//задача 4

const students = ['Polina', 'Dasha', 'Masha'];

console.log(students)

students.pop();
students.push('Borya');

students.shift();
students.unshift('Andrey');

console.log(students)



//задача 5

const cats = ['Gachito', 'Tom', 'Batman'];

for(let a = 0; a < cats.length; a++) {
    console.log(cats[a])
}

for (let char of cats) {
    console.log(char)
}




//задача 6

const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];

for (let j = 0; j < oddNumbers.length; j++) {
    evenNumbers.push(oddNumbers[j])
}

for ( char of evenNumbers) {
    if (evenNumbers[char] == '8') {
        console.log(char)
    }
}

console.log(evenNumbers);





//задача 7


const binary = [0, 0, 0, 0];
console.log(binary)

let arr = binary.toString();
console.log(arr)

let modifedArr = '';

for (let i = 0; i < arr.length; i++) {
    if (arr[i] == '0') {
        modifedArr = modifedArr + 0;
    } else {
        modifedArr = modifedArr + 1;
    }
}

console.log(modifedArr)




//продвинутое задание

let word = prompt('word');

let checkWord = function (word) {
    let i = -1;
    let wordReverse = '';
    for (char of word) {
        wordReverse = wordReverse + word.at(i);
        i--;
    }

    if (word == wordReverse) {
        console.log('true') 
    } else {
        console.log(false)
    }
}

checkWord(word);

