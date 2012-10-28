function getCursorPosition(event) {
	//To cancel out padding, and relative to the element, use window.pageXOffset for relative to page
	x  = event.pageX - document.getElementById("can").offsetLeft; 
	y  = event.pageY - document.getElementById("can").offsetTop;
		
	alert (x + " " + y);
	return;
}

function getKeypress(event) {
	return;
}

function fillsquare(x, y, can) {
	var width = 16;
	var height = 16;
	var spacing = 2;

	can.fillStyle = "#ffffff";
	can.fillRect(width*x+spacing*x, height*y+spacing*y, width, height);
	return;
}


function main() {
	//Set width and height
	document.getElementById("can").height = 300;
	document.getElementById("can").width = 400;

	//Add event listeners
	document.getElementById("can").addEventListener("click", getCursorPosition, false);
	document.getElementById("can").addEventListener("keypress", getKeypress, false);

	c = document.getElementById("can").getContext("2d");
	c.rect(00,00,1000,1000);
	c.fillRect(0,0,1000,1000);
	fillsquare (5, 5, c);
	fillsquare (5, 6, c);
	fillsquare (6, 6, c);
	fillsquare (6, 5, c);

}
