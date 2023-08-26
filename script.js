const container = document.querySelector('.container');
const size = 16 * 16;
// creat 16x16 div inside the container
for (let i = 0; i < size; i++){
    let divSquare = document.createElement('div');
    divSquare.classList.add(`div-square`);
    container.appendChild(divSquare);
}
//make square div change color when be hovered on
let squareDivs = document.querySelectorAll(`.div-square`);
for (let i = 0; i < squareDivs.length; i++){
    squareDivs[i].addEventListener(`mouseenter`, () => {
        squareDivs[i].classList.toggle('hover');
    })
    squareDivs[i].addEventListener('mouseleave', () => {
        setTimeout(() => {squareDivs[i].classList.toggle('hover')}, 200);
    })
}
