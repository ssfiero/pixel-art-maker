// Global variable - array of colors.
  let colorNames = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"];


// Global variables.
let body = document.querySelector('body');
let title = document.createElement('div');
let leftSection = document.createElement('section');
let rightSection = document.createElement('section');
let colSelSection = document.createElement('section');


// Attribute styles.
title.setAttribute("style", "text-align: center; font-size: 50px; margin-bottom: 20px; text-shadow: 10px 10px 10px grey;");
body.setAttribute("style", "margin: 20px 100px");
leftSection.setAttribute("style", "width: 60%; float: left; margin-right: 50px; box-shadow: 15px 20px 20px grey; border: 2px solid grey; border-radius: 5px; padding: 15px");
rightSection.setAttribute("style", "width: 25%; float: left; margin-bottom: 20px; box-shadow: 15px 20px 20px grey; border: 2px solid grey; border-radius: 5px; padding: 15px");
colSelSection.setAttribute("style", "width: 25%; float: left; box-shadow: 15px 20px 20px grey; border: 2px solid grey; border-radius: 5px; padding: 15px");


// Title of page
title.innerText = "Pixel Art Maker";
body.appendChild(title);


// Main board on left side of screen.
for (let i = 0; i < 1260; i++) {
  let boardDiv = document.createElement('div')

  boardDiv.setAttribute("style", "width: 2%; height: 2%; float: left; background-color: white; border: 1px solid grey; margin: 0.5px");

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


// Section that shows the current color selected.
// Title of the color selector section.
let colorSel = document.createElement('div');
colorSel.setAttribute("style", "height: 3%; text-align: center");
colorSel.innerText = "Color Selected:";

// Actual color selected.
let colorSelColor = document.createElement('div');
colorSelColor.setAttribute("style", "width: 7%; height: 3.5%; border: 1px solid grey; border-radius: 15px; float: left; margin-right: 5px");

// Name of actual color selected.
let colorSelColorName = document.createElement('div');
colorSelColorName.setAttribute("style", "width: 80%; height: 3.5%; float: left; color: black; padding: 3px");
colorSelColorName.innerText = "Red";


colSelSection.append(colorSel, colorSelColor, colorSelColorName);
body.appendChild(colSelSection);



// Event listeners
function clickColor() {
  // colorSelColor.setAttribute("style", `background-color: ${event.target.colorNames}`);
  colorSelColor.style.backgroundColor = "red";
}

rightSection.addEventListener('click', clickColor);


function clickBoard() {
  // event.target.style.backgroundColor = colorNames;
  event.target.style.backgroundColor = "red";
  event.target.style.border = "1px solid red";
}

leftSection.addEventListener('click', clickBoard);
