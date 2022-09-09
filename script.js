let container = document.querySelector('.container');
let bod = document.querySelector('body')

let squareGrid = (num) => {
    for(let i = 0; i < num; i++){
        let colDiv = document.createElement('div');
        colDiv.classList.add('row')
        colDiv.setAttribute(`style`, `width: ${0.6*num}em;`)
        container.appendChild(colDiv);
        
        for(let j = 0; j < num; j++){
            let rowDiv = document.createElement('div');
            rowDiv.classList.add('col');
            rowDiv.setAttribute(`style`, `width: ${num}em;`)
            colDiv.appendChild(rowDiv);
        }
    }
}

squareGrid(10)

let rowDiv = document.getElementsByClassName('col')

for(let k = 0; k < rowDiv.length; k++){
    rowDiv[k].addEventListener('mouseover',(e) => {
        e.target.style.backgroundColor = randomRgb();
    })
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