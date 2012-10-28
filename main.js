function getCursorPosition(event) {
	x  = event.pageX - document.getElementById("can").offsetLeft; //To cancel out padding, and relative to the element, use window.pageXOffset for relative to page
	y  = event.pageY - document.getElementById("can").offsetTop;
		
	alert (x + " " + y);
	return;
}



function main() {
	//Set width and height
	document.getElementById("can").height = 300;
	document.getElementById("can").width = 400;

	//Add event listeners
	document.getElementById("can").addEventListener("click", getCursorPosition, false);
	document.getElementById("can").addEventListener("keypress", "alert('keypress')", false);

	c = document.getElementById("can").getContext("2d");
	c.rect(00,00,1000,1000);
	c.fillRect(0,0,1000,1000);
}
