//глубокое копирование

var obj = {
    name: 'Vasya',
    age: 25,
    isMarried: false,
    home: null,
    dogs: undefined,
    family: ['мама', 'папа'],
    friend: {
        name: 'Petya',
        age: 30,
        isMarried: true,
        work: null,
        family: [{
            name: 'mother',
            age: 60,
        }, {
            name: 'father', 
            age: 56,
        }]

    }
}


var cloneObject = Object.assign({}, obj)

for (var key in obj) {

    if ( typeof(obj[key]) == 'object') {
        
       cloneObject[key] = Object.assign({}, obj[key])


    }



}

cloneObject['home'] = 'cottege';
obj.friend['age'] = 40;


console.log(obj)
console.log(cloneObject)
