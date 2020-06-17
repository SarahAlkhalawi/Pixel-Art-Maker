// Select color input
// Select size input
const colorPicker = document.querySelector('#colorPicker');
const pixelCanvas = document.querySelector('#pixelCanvas');
const form = document.querySelector('#sizePicker');

const height = document.querySelector('#inputHeight');
const width = document.querySelector('#inputWidth');

form.addEventListener('submit', (e) => {
    pixelCanvas.innerHTML = '';
    e.preventDefault();
    makeGrid();
});


function makeGrid() {
   for (let i = 0; i < height.value; i++) {
    const row = pixelCanvas.insertRow(0);
    for (let j = 0; j < width.value; j++) {
     const cell = row.insertCell(0);
     cell.addEventListener('click', (e) => {
     cell.style.backgroundColor = colorPicker.value;
     });

    }

   }





}
