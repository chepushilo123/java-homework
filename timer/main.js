const hours = document.getElementById('hours');
const min = document.getElementById('min');
const sec = document.getElementById('sec');
const ms = document.getElementById('ms');

const start = document.querySelector('.start');
const reset = document.querySelector('.reset');
const reverse = document.querySelector('.reverse');
const save = document.querySelector('.save');
const clear = document.querySelector('.clear');

let interval;


//обычный таймер
const timer = () => {
    
    ms.innerHTML++;

    if(ms.innerHTML < 10) {
        ms.innerHTML = '0' + ms.innerHTML;
    }

    if(ms.innerHTML == '99') {
        sec.innerHTML++;
        ms.innerHTML = '0' + 0;

        if(sec.innerHTML < 10) {
            sec.innerHTML = '0' + sec.innerHTML;
        }

        if(sec.innerHTML == '60') {
            min.innerHTML++;
            sec.innerHTML = '0' + 0;

            if(min.innerHTML < 10) {
                min.innerHTML = '0' + min.innerHTML;
            }

            if(min.innerHTML == '60') {
                hours.innerHTML++;
                min.innerHTML = '0' + 0;

                if(hours.innerHTML < 10) {
                    hours.innerHTML = '0' + hours.innerHTML;
                }

                if(hours.innerHTML == '99' && min.innerHTML == '59') {
                    clearInterval(interval);
                    alert('тебе делвть нечего?')
                }
            }
        }
    }
}

//таймер наоборот
const timerReverse = () => {

    if(ms.innerHTML == '0' + 0) {
        if(sec.innerHTML == '0' + 0) {
            if(min.innerHTML == '0' + 0){
                if(hours.innerHTML == '0' + 0) {
                    console.log('asd')
                    clearInterval(interval);
                } else {
                    hours.innerHTML--;

                    if(hours.innerHTML < 10) {
                        hours.innerHTML = '0' + hours.innerHTML;
                    }            
                    min.innerHTML = 60;
                }
            } else {
                min.innerHTML--;

                if(min.innerHTML < 10) {
                    min.innerHTML = '0' + min.innerHTML;
                }
                
                sec.innerHTML = 60;
            }
        } else {
            sec.innerHTML--;

            if(sec.innerHTML < 10) {
                sec.innerHTML = '0' + sec.innerHTML;
            }
            
            ms.innerHTML = 100;
        }

    } else {
        ms.innerHTML--;

        if(ms.innerHTML < 10) {
            ms.innerHTML = '0' + ms.innerHTML;
        }
    }
}

//кнопка запуска
start.addEventListener('click', (event) => {
    event.preventDefault()

    if (start.innerHTML === 'Start') {
        interval = setInterval(timer, 0)
        start.innerHTML = 'Stop';
        start.style.backgroundColor = 'red';
    } else {
        clearInterval(interval)
        start.innerHTML = 'Start';
        start.style.backgroundColor = 'rgb(69, 250, 69)';

    }  
})

//кнопка сброса
reset.addEventListener('click', (event) => {
    event.preventDefault()

    clearInterval(interval)
    ms.innerHTML = '00';
    sec.innerHTML = '00';
    min.innerHTML = '00';
    hours.innerHTML = '00';
})

//кнопка переворота
reverse.addEventListener('click', (event) => {
    event.preventDefault()

    if(reverse.innerHTML == 'Reverse') {
        clearInterval(interval);
        interval = setInterval(timerReverse, 0);
        reverse.innerHTML = 'Stop';
        reverse.style.backgroundColor = 'red';
    } else {
        clearInterval(interval);
        reverse.innerHTML = 'Reverse';
        reverse.style.backgroundColor = 'buttonface';
    }
})

//сохранить в память
let allSave = [];
let num = 1;

save.addEventListener('click', (event) => {
    event.preventDefault()
    allSave.push(`${hours.innerHTML}:${min.innerHTML}:${sec.innerHTML}:${ms.innerHTML}`);
    localStorage.setItem('localSave', allSave)

    let ol = document.querySelector('ol');
    ul = document.createElement('ul');
    ul.innerHTML = num + ': ' + allSave.at(-1);
    ol.append(ul);
    num++;
})

//вывод на экран сохранения
setTimeout(() => {
    if(Boolean(localStorage.localSave) == true) {
        allSave = localStorage.localSave.split(',')
        getSave()
    }   
}, 0)

const getSave = () => {
    let ol = document.querySelector('ol');

    for(let i = 0; i < allSave.length; i++) {
        let ul = document.createElement('ul');
        ul.innerHTML = num + ': ' + allSave[i];
        ol.append(ul);
        num++;
    }
}

//чистим
clear.addEventListener('click', (event) => {
    delete localStorage.localSave;
})