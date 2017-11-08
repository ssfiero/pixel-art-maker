// Global variable - array of colors.
  let colorNames = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"];



// Global variables.
let body = document.querySelector('body');
let title = document.createElement('div');
let leftSection = document.createElement('section');
let rightSection = document.createElement('section');
let colSelSection = document.createElement('section');
let clearSection = document.createElement('section');



// Attribute styles.
title.setAttribute("style", "text-align: center; font-size: 50px; margin-bottom: 20px; text-shadow: 10px 10px 10px grey; color: DarkBlue");
body.setAttribute("style", "margin: 15px 50px; background-color: #303030");
leftSection.setAttribute("style", "width: 70%; float: left; margin-right: 30px; box-shadow: 15px 20px 20px grey; border: 2px solid grey; border-radius: 5px; padding: 12px; background-color: Gainsboro");
rightSection.setAttribute("style", "width: 23%; float: left; margin-bottom: 20px; box-shadow: 15px 20px 20px grey; border: 2px solid grey; border-radius: 5px; padding: 15px; background-color: #303030");
clearSection.setAttribute("style", "width: 69.5%; float: left; margin-right: 30px; box-shadow: 15px 20px 20px grey; border: 2px solid #303030; border-radius: 5px; padding: 15px; background-color: #303030");
colSelSection.setAttribute("style", "width: 23%; float: left; box-shadow: 15px 20px 20px grey; border: 2px solid #303030; border-radius: 5px; padding: 15px; background-color: #303030");



// Title of page.
title.innerText = "Javascript Pixel Art Maker";
body.appendChild(title);



// Main board on left side of screen.
for (let i = 0; i < 1305; i++) {
  let boardDiv = document.createElement('div')

  boardDiv.setAttribute("style", "width: 2%; height: 2%; float: left; background-color: white; margin: 1px");

  leftSection.appendChild(boardDiv);
  body.appendChild(leftSection);
}



// Board to select colors on right side of screen.
for (let i = 0; i < 147; i++) {
  let boardDivRight = document.createElement('div');

  boardDivRight.setAttribute("style", `width: 7%; height: 3.5%; float: left; border: 1px solid grey; margin: 2px 3px; border-radius: 15px; background-color: ${colorNames[i]}`);

  rightSection.appendChild(boardDivRight);
  body.appendChild(rightSection);
}



// Section for the clear button.
let clearDiv = document.createElement('div');
clearDiv.setAttribute("style", "height: 6%; padding: 5px; float: left; margin-right: 5px; color: white");
clearDiv.innerText = "Reset Board:";

let clearDivButton = document.createElement('div');
clearDivButton.setAttribute("style", "height: 3%; float: left; border: 2px solid white; border-radius: 10px; padding: 8px 20px; color: white");
clearDivButton.innerText = "Reset";

clearSection.append(clearDiv, clearDivButton);
body.appendChild(clearSection);



// Section that shows the current color selected.
// Title of the color selector section.
let colorSel = document.createElement('div');
colorSel.setAttribute("style", "height: 3%; text-align: center; color: white");
colorSel.innerText = "Color Selected:";

// Actual color selected.
let colorSelColor = document.createElement('div');
colorSelColor.setAttribute("style", "width: 7%; height: 3.5%; border: 1px solid #303030; border-radius: 15px; float: left; margin-right: 5px");

// Name of actual color selected.
let colorSelColorName = document.createElement('div');
colorSelColorName.setAttribute("style", "width: 80%; height: 3.5%; float: left; color: white; padding: 3px");

colSelSection.append(colorSel, colorSelColor, colorSelColorName);
body.appendChild(colSelSection);



// When color is selected from color pallet, update Color Selected div with
// color and name.
function clickColor() {
  colorSelColor.style.backgroundColor = event.target.style.backgroundColor;
  colorSelColorName.innerText = event.target.style.backgroundColor;
}

rightSection.addEventListener('click', clickColor);



// When pixel is selected on the board, update the selected pixel on the
// board with the selected color.
// mousedown --> mouseenter --> mouseup(turns off mouseenter)

function paintBoard() {
  if (event.target === leftSection) {
    // No action if user clicks in between pixels.
  } else {
    event.target.style.backgroundColor = colorSelColor.style.backgroundColor;
  }
}

function paintBoardMore() {
  if (event.target === leftSection) {
    // No action if user clicks in between pixels.
  } else {
    event.target.style.backgroundColor = colorSelColor.style.backgroundColor;
  }
}

function noPaintBoard() {
  if (event.target === leftSection) {
    // No action if user clicks in between pixels.
  } else {
    event.target.style.backgroundColor = "white";
  }
}

leftSection.addEventListener('mousedown', paintBoard);
leftSection.addEventListener('mouseover', paintBoardMore);
leftSection.addEventListener('mouseup', noPaintBoard);



// When pixel is selected on the board, update the selected pixel on the
// board with the selected color.
function clickBoard() {
  if (event.target === leftSection) {
    // No action if user clicks in between pixels.
  } else {
    event.target.style.backgroundColor = colorSelColor.style.backgroundColor;
  }
}

leftSection.addEventListener('click', clickBoard);
