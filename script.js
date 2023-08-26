const container = document.querySelector('.container');
const size = 16 * 16;
// creat 16x16 div inside the container
for (let i = 0; i < size; i++){
    let divSquare = document.createElement('div');
    divSquare.classList.add(`div-square`);
    container.appendChild(divSquare);
}
//make square div change color when be hovered on
function addHover(){
   let squareDivs = document.querySelectorAll(`.div-square`);
    for (let i = 0; i < squareDivs.length; i++){
        squareDivs[i].addEventListener(`mouseenter`, () => {
            squareDivs[i].classList.toggle('hover');
        })
        squareDivs[i].addEventListener('mouseleave', () => {
            setTimeout(() => {squareDivs[i].classList.toggle('hover')}, 200);
        })
    } 
}
addHover();
//create a new existing grid when the user add squares
//prompt the user for number of squares per side
//remove old grid
//create new grid
//changing the property width and height

const button = document.querySelector(`.button`);
button.addEventListener('click', () => {
    //prompt the user for the number of square per side
    let squaresPerSide = 0;
    do {
        squaresPerSide = prompt('Number of squares per side?',``);
        if (typeof +squaresPerSide  == `number` && 0 < squaresPerSide  && squaresPerSide < 100){
            break;
        }
    }
    while (1);
    //remove old grid
    container.replaceChildren();

    //create new grid    
    for (let i = 0; i < squaresPerSide * squaresPerSide; i++){
        let divSquare = document.createElement('div');
        let size = 100 / squaresPerSide;
        divSquare.classList.add('div-square');
        divSquare.setAttribute('style', `flex-basis: ${size}%; height: ${size}%`);
        container.appendChild(divSquare);
    }
    addHover();
});