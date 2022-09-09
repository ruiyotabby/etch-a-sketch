let container = document.querySelector('.container');
let bod = document.querySelector('body')

let squareGrid = (num) => {
    for(let i = 0; i < num; i++){
        let colDiv = document.createElement('div');
        colDiv.classList.add('row')
        colDiv.setAttribute(`style`, `width: ${0.8*num}em;`)
        container.appendChild(colDiv);
        
        for(let j = 0; j < num; j++){
            let rowDiv = document.createElement('div');
            rowDiv.classList.add('col');
            rowDiv.setAttribute(`style`, `width: ${num}em;`)
            colDiv.appendChild(rowDiv);
        }
    }
}

let randomRgb = () => {
    var r = Math.round, g = Math.random, c = 255;
    return `rgb(${r(g()*c)},${r(g()*c)},${r(g()*c)})`;
}

if(window.performance.navigation && window.performance.navigation.type === 1 || 
    window.performance.getEntriesByType('navigation')
    .map((nav) => nav.type).includes('reload')){
    bod.style.background = randomRgb();
}

container.style.backgroundColor = 'white';

let btn = document.createElement('button');
btn.textContent = 'Create a grid';
bod.insertBefore(btn, container)

btn.addEventListener('click', () => {
   let num = parseInt(prompt('Enter the number of squares for a new grid. It should not be grater than 100'));
    if(Number.isInteger(num) && num <= 100){
        container.textContent = '';
        squareGrid(num);
        colorRow();
    }else if(Number.isInteger(num) && num > 100) alert('Enter a number below 100');
    else alert('Enter a number to create a grid');
})

let colorRow = () => {
    let rowDiv = document.getElementsByClassName('col')
    for(let k = 0; k < rowDiv.length; k++){
        rowDiv[k].addEventListener('mouseover',(e) => {
            e.target.style.backgroundColor = randomRgb();
        })
    }
}