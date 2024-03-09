
const value = document.getElementById('value');
const clear = document.getElementById('clear');

const symbols = ['+', '-', '*', '/'];
const res = [];

clear.addEventListener('click', () => {
    value.value = value.value.slice(0, -1);
} );

document.querySelectorAll('.calc').forEach(button => {
    button.addEventListener('click', () => {
        value.value += button.innerHTML;
    })
})


document.querySelectorAll('.symb').forEach(symb => {
    symb.addEventListener('click', () => {
        value.value += symb.innerHTML;
    })

})


const result = document.querySelector('.result');


result.addEventListener('click', () => {

    document.querySelector('p').innerHTML +=value.value + ' = ';
    
    
    let n = 0;
    for (let i = 0; i < value.value.length; i++) {
        for (let char of symbols) {
            if (char == value.value.at(i) ) {

                res[n] = Number(value.value.slice(0 ,i));
                ++n;
                res[n] = Number(value.value.slice(++i, value.value.length))
                ++n;

                switch(char) {
                    case '+':   
                    res[n] = res[0] + res[1];
                        break;
                    case '-':
                        res[n] = res[0] - res[1];
                        break;
                    case '*':
                        res[n] = res[0] * res[1];
                        break;
                    case '/':
                        res[n] = res[0] / res[1];
                        break;

                }

            }

        }
    }

    value.value = res.at(-1);

    document.querySelector('p').innerHTML += res.at(-1) + '<br>';

})


const history = document.querySelector('.history');

history.addEventListener('click', () => {
    document.querySelector('.history_list').hidden = false;
})
