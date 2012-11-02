//Define some variables that may change
var width = 16;
var height = 16;
var spacing = 1;


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
	alert(click.xcell + " " + click.ycell);
	return;
}


function getKeypress(event) {
	return;
}

function fillsquare(x, y, can) {

	can.fillStyle = "#ffffff";
	can.fillRect(width*x+spacing*x+spacing*(x+1), height*y+spacing*y+spacing*(y+1), width, height);
	return;
}


function main() {
	//Set width and height
	document.getElementById("can").height = (height + 2*spacing) * 20;
	document.getElementById("can").width = (width + 2*spacing) * 20;

	//Add event listeners
	document.getElementById("can").addEventListener("click", clickHandler, false);
	document.getElementById("can").addEventListener("keypress", getKeypress, false);

	c = document.getElementById("can").getContext("2d");
	c.rect(00,00,1000,1000);
	c.fillRect(0,0,1000,1000);
	fillsquare (5, 5, c);
	fillsquare (5, 6, c);
	fillsquare (6, 6, c);
	fillsquare (6, 5, c);
	for (i = 0; i < 30; i++) {
		for (j = 0; j < 20; j++) {
			fillsquare(i,j,c);
		}
	}

}
