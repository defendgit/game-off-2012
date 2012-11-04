//Define some variables that may change
var width = 16;
var height = 16;
var spacing = 1;
var xcells = 20;
var ycells = 20;

//Global game variables
var towerarray = new Array();
var enemyarray = new Array();

var mousex = 0;
var mousey = 0;

function fillsquare(x, y, can) {
	can.fillStyle = "#ffffff";
	can.fillRect(width*x+spacing*x+spacing*(x+1), height*y+spacing*y+spacing*(y+1), width, height);
	return;
}

function drawSquare(x, y, can) {
	can.fillStyle = "#ffffff";
	can.fillRect(width*x+spacing*x+spacing*(x+1), height*y+spacing*y+spacing*(y+1), width, height);
	can.fillStyle = "#000000";
	can.fillRect(width*x+spacing*x+spacing*(x+1)+1, height*y+spacing*y+spacing*(y+1)+1, width-2, height-2);
	return;
}

function getCursorPosition(event) {
	//To cancel out padding, and relative to the element, use window.pageXOffset for relative to page
	x  = event.pageX - document.getElementById("can").offsetLeft; 
	y  = event.pageY - document.getElementById("can").offsetTop;
		
	clickLocation = new Object();
	clickLocation.xcell = Math.floor(x/(width+2*(spacing)));
	clickLocation.ycell = Math.floor(y/(height+2*(spacing)));
	clickLocation.x = x;
	clickLocation.y = y;
	return clickLocation;
}

function clickHandler(event) {
	click = getCursorPosition(event);
	//alert(click.xcell + " " + click.ycell);
	towerarray.push(new Tower(Math.random(), click.xcell, click.ycell));
	document.getElementById("sidebar").innerHTML = JSON.stringify(towerarray);
	return;
}

function moveHandler(event) {
	pos = getCursorPosition(event);
	document.getElementById("output").innerHTML = pos.xcell + ", " + pos.ycell;
	mousex = pos.xcell;
	mousey = pos.ycell;
}


function getKeypress(event) {
	return;
}


function gameLoop(can) {
	//document.getElementById("sidebar").innerHTML = "00000";
	//Clear screen
	can.fillStyle = "#000000";
	can.fillRect(0,0,1000,1000);
	drawSquare(mousex, mousey, can);
	for (i = 0; i < towerarray.length; i++) {
		towerarray[i].draw(can);
	}
}

function main() {
	//Set width and height
	document.getElementById("can").height = (height + 2*spacing) * 20;
	document.getElementById("can").width = (width + 2*spacing) * 20;

	//Add event listeners
	document.getElementById("can").addEventListener("click", clickHandler, false);
	document.getElementById("can").addEventListener("mousemove", moveHandler, false);
	document.getElementById("can").addEventListener("keypress", getKeypress, false);

	c = document.getElementById("can").getContext("2d");
	c.rect(00,00,1000,1000);
	c.fillRect(0,0,1000,1000);
	/*fillsquare (5, 5, c);
	fillsquare (5, 6, c);
	fillsquare (6, 6, c);
	fillsquare (6, 5, c);
	for (i = 0; i < 30; i++) {
		for (j = 0; j < 20; j++) {
			fillsquare(i,j,c);
		}
	}*/

	var i = setInterval("gameLoop(c)", 30);

}
