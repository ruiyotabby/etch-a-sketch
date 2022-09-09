let container = document.querySelector('.container');
let bod = document.querySelector('body')

let squareGrid = (num) => {
    for(let i = 0; i < num; i++){
        const colDiv = document.createElement('div');
        colDiv.classList.add('row')
        colDiv.setAttribute(`style`, `width: ${0.6*num}em;`)
        container.appendChild(colDiv);
        
        for(let j = 0; j < num; j++){
            const rowDiv = document.createElement('div');
            rowDiv.classList.add('col');
            rowDiv.setAttribute(`style`, `width: ${num}em;`)
            colDiv.appendChild(rowDiv);
        }
    }
}

squareGrid(64)