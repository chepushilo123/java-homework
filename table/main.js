
const width = document.getElementById('width');
const height = document.getElementById('height');
const button = document.querySelector('button');





//создаем поле
button.addEventListener('click', (event) => {
    event.preventDefault();
    
    for(let i = 0; i < height.value; i++) {
        
        let tr = document.createElement('tr');
        table.append(tr);
        
        for( let j = 0; j < width.value; j++) {
            
            let th = document.createElement('th');
            tr.append(th);
        }
    }
    
    black(width, height);
    
    
});


//черные квадраты
const black = (width, height) => {
    let getTr = document.querySelectorAll('tr');
    let getTh = document.querySelectorAll('th');

    // если ширина четного числа, то квадраты закрашиваются друг под другом. Поэтому делаем условие
    if(width.value % 2 == 0) {
    
        for( let i = 0; i < height.value; i++) {
            if(i % 2 != 0) {

                for(let k = 1; k < width.value; k += 2) {
                    getTr[i].children[k].style.backgroundColor = 'black';
                }

            } else {
                for (let k = 0; k < width.value; k += 2) {
                    getTr[i].children[k].style.backgroundColor = 'black';
                }
            }
        }



    } else {

        for (let i = 0; i < getTh.length; i += 2) {
                getTh[i].style.backgroundColor = 'black';
        }
    }
}



// меняем черные блоки на белые
document.querySelector('table').addEventListener('click', () => {
    let getTh = document.querySelectorAll('th');

    for(let char of getTh) {
        if (char.style.backgroundColor == 'black') {
            char.style.backgroundColor = 'white';
        } else {
            char.style.backgroundColor = 'black';
        }
    }
}) 

