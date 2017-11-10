// Global variable - array of colors.
  let colorNames = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"];



// Global variables.
let body = document.querySelector('body');
let title = document.createElement('div');
let leftSection = document.createElement('section');
let rightSection = document.createElement('section');
let bottomSection = document.createElement('section');
bottomSection.classList.add("bottomSection");



// Attribute styles.
title.setAttribute("style", "text-align: center; font-size: 50px; margin-bottom: 20px; color: #6C63FF; font-family: Gill Sans Extrabold, sans-serif");
body.setAttribute("style", "margin: 15px 50px; background-color: #161616");
leftSection.setAttribute("style", "width: 70%; float: left; margin-right: 20px; border: 2px solid Gainsboro; border-radius: 5px; padding: 14px 10px 14px 14px; background-color: Gainsboro");
rightSection.setAttribute("style", "width: 23%; float: left; margin-bottom: 20px; border: 2px solid #303030; border-radius: 5px; padding: 15px; background-color: #303030");
bottomSection.setAttribute("style", "width: 96.5%; float: left; margin-right: 20px; border: 2px solid #303030; border-radius: 5px; padding: 15px; background-color: #303030");



// Title of page.
title.innerText = "Javascript Pixel Art Maker";
body.appendChild(title);



// Main board to draw on left side of screen.
for (let i = 0; i < 4182; i++) {
  let boardDiv = document.createElement('div')
  boardDiv.classList.add("boardDiv");

  boardDiv.setAttribute("style", "width: 1%; height: 1%; float: left; background-color: white; margin: 1px");

  leftSection.appendChild(boardDiv);
  body.appendChild(leftSection);
}



// Board to select colors on right side of screen.
for (let i = 0; i < 147; i++) {
  let boardDivRight = document.createElement('div');

  boardDivRight.setAttribute("style", `width: 7.4%; height: 3.5%; float: left; border: 1px solid #303030; margin: 2px 3px; border-radius: 15px; background-color: ${colorNames[i]}`);

  rightSection.appendChild(boardDivRight);
  body.appendChild(rightSection);
}



// Section for the reset button.
let clearDiv = document.createElement('div');
clearDiv.setAttribute("style", "height: 5%; padding: 9px; float: left; margin-right: 2px; color: white; font-size: 20px; font-family: Gill Sans Extrabold");
clearDiv.innerText = "Clear Board:";

let clearDivButton = document.createElement('div');
clearDivButton.classList.add("resetButton");
clearDivButton.setAttribute("style", "height: 3.8%; float: left; border: 2px solid white; border-radius: 10px; padding: 6px 24px; color: white; font-size: 20px; font-family: Gill Sans Extrabold; margin-right: 15px");
clearDivButton.innerText = "Reset";

bottomSection.append(clearDiv, clearDivButton);
body.appendChild(bottomSection);



// Section for the eraser.
let eraserDiv = document.createElement('div');
eraserDiv.setAttribute("style", "height: 5%; padding: 9px; float: left; margin-right: 2px; color: white; font-size: 20px; font-family: Gill Sans Extrabold");
eraserDiv.innerText = "Eraser:";

let eraserDivButton = document.createElement('div');
eraserDivButton.classList.add("eraserButton");
eraserDivButton.setAttribute("style", "height: 3.8%; float: left; border: 2px solid white; border-radius: 10px; padding: 6px 24px; color: white; font-size: 20px; font-family: Gill Sans Extrabold; margin-right: 15px");
eraserDivButton.innerText = "Eraser";

bottomSection.append(eraserDiv, eraserDivButton);
body.appendChild(bottomSection);



// Section that shows the current color selected.
let colorSel = document.createElement('div');
colorSel.classList.add("colorSelected");
colorSel.setAttribute("style", "height: 5%; padding: 9px; float: left; margin-right: 2px; color: white; font-size: 20px; font-family: Gill Sans Extrabold");
colorSel.innerText = "Color Selected:";
// Actual color selected.
let colorSelColor = document.createElement('div');
colorSelColor.setAttribute("style", "width: 6%; height: 3.5%; border: 1px solid #303030; border-radius: 15px; float: left; margin: 8px 2px 0px 0px; float: left");
// Name of actual color selected.
let colorSelColorName = document.createElement('div');
colorSelColorName.setAttribute("style", "height: 5%; padding: 9px; float: left; color: white; font-size: 20px; font-family: Gill Sans Extrabold; margin-right: 15px");

bottomSection.append(colorSel, colorSelColor, colorSelColorName);
body.appendChild(bottomSection);



// Section that shows the color preview.
let colorPrev = document.createElement('div');
colorPrev.classList.add("colorPrev");
colorPrev.setAttribute("style", "height: 5%; padding: 9px; float: left; margin-right: 2px; color: white; font-size: 20px; font-family: Gill Sans Extrabold");
colorPrev.innerText = "Color Preview:";
// Hover color.
let colorSelColorHover = document.createElement('div');
colorSelColorHover.setAttribute("style", "width: 6%; height: 3.5%; border: 1px solid #303030; border-radius: 15px; float: left; margin: 8px 2px 0px 0px; float: left");
// Name of hover color.
let colorSelColorNameHover = document.createElement('div');
colorSelColorNameHover.setAttribute("style", "height: 5%; padding: 9px; float: left; color: white; font-size: 20px; font-family: Gill Sans Extrabold; margin-right: 15px");

bottomSection.append(colorPrev, colorSelColorHover, colorSelColorNameHover);
body.appendChild(bottomSection);



// ------------------------------------------------------------------------
// Functions below involve selecting a color and painting.
// Step 0 - Color preview.
function mouseColorHover() {
  if (event.target === rightSection) {
    // No action when user hovers between pixels.
  } else {
    colorSelColorHover.style.backgroundColor = event.target.style.backgroundColor;
    colorSelColorNameHover.innerText = event.target.style.backgroundColor;
  }
}

rightSection.addEventListener('mouseover', mouseColorHover);



// Step 1 - Color selected.
function currentColorHolder() {
  if (event.target === rightSection) {
    // No action when user hovers between pixels.
  } else {
  colorSelColor.style.backgroundColor = event.target.style.backgroundColor;
  colorSelColorName.innerText = event.target.style.backgroundColor;
  }
}

rightSection.addEventListener('click', currentColorHolder);



// Step 2 - Paint on the board with the color selected.
function leftColor() {
  if (event.target === leftSection) {
    // No action when user hovers between pixels.
  } else {
    event.target.style.backgroundColor = colorSelColor.style.backgroundColor;
  }
}

leftSection.addEventListener('mouseover', leftColor);



// Step 3 - Stop painting when clicked. Event listener removed.
function noMoreColor() {
  leftSection.removeEventListener('mouseover', leftColor);
}

leftSection.addEventListener('click', noMoreColor);



// Step 4 - Start painting again when a new color is selected.
// Event listener added back.
function colorAgain() {
  leftSection.addEventListener('mouseover', leftColor);
}

rightSection.addEventListener('mouseover', colorAgain);



// ------------------------------------------------------------------------
// Functions below involve erasing the board.
// When eraser button is clicked, color is set to white to erase board
// with a brush functionality.
function eraseColorClick() {
  if (event.target === leftSection) {
    // No action when user hovers between pixels.
  } else {
    function eraseColor() {
      if (event.target === leftSection) {
        // No action when user hovers between pixels.
      } else {
        event.target.style.backgroundColor = "white";
      }
    }

    leftSection.addEventListener('mouseover', eraseColor);
  }
}

leftSection.addEventListener('click', eraseColorClick);



// ------------------------------------------------------------------------
// When reset button is clicked, clear colors from board.
function resetButton() {
  let pixel = document.getElementsByClassName('boardDiv');

  for (var i = 0; i < 4182; i++) {
    pixel[i].style.backgroundColor = "white";
  }

  leftSection.removeEventListener('mouseover', function() {

  });
}

clearDivButton.addEventListener('click', resetButton);


// Function is called to remove event listener from board, and not allowing
// the board to be set with same color as container.
noMoreColor();
