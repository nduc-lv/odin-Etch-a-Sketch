const container = document.querySelector('.container');
const size = 16 * 16;
// creat 16x16 div inside the container
for (let i = 0; i < size; i++){
    let divSquare = document.createElement('div');
    divSquare.classList.add(`div-square`);
    divSquare.textContent = 'hi';
    container.appendChild(divSquare);
}
