// Select color input
/** Selects the pixelCanvas and colorPicker ID's allowing the user to choose which color to use**/
var canvas = document.getElementById('pixelCanvas');
var color = document.getElementById('colorPicker');

// Select size input
/** Selects the sizePicker, inputHeight and inputWidth ID's allowing the user to choose the height and width of the pixel canvas grid **/
var sizePicker = document.getElementById('sizePicker');
var height = document.getElementById('inputHeight');
var width = document.getElementById('inputWidth');

// When size is submitted by the user, call makeGrid()
/** Calls a function to make the grid appear **/
function makeGrid(height, width) {

// Your code goes here!
/** Create FOR LOOPS to allow the user to select and color a cell along the X and Y axis of the pixel canvas grid and changes each cell from the default white background to the selected color **/
  for (let y = 0; y < height; y++) {
    let row = canvas.insertRow(y);
    for (let x = 0; x < width; x++) {
      let cell = row.insertCell(x);
      cell.addEventListener('mousedown', function(evt) {
        cell.style.backgroundColor = color.value;
      cell.addEventListener('contextmenu', function(evt) {
        evt.preventDefault();
        cell.style.backgroundColor = 'white';
      })
      })
    }
  }
}

/** Adds an eventListener to the SUBMIT BUTTON that makes the pixel grid appear and also resets the pixel grid when pressed again **/

sizePicker.addEventListener('submit', function(evt) {
  evt.preventDefault();
  while (canvas.hasChildNodes()) {
    canvas.removeChild(canvas.lastChild);
  }
  makeGrid(height.value, width.value);
});








