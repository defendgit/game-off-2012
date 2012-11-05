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

var runInterval;

var money = 1000;
var score = 0;

function fillSquare(x, y, can, fillstyle) {
	if (typeof(fillstyle) === 'undefined') {
		fillstyle = "#ffffff";
	}
	can.fillStyle = fillstyle;
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

function getCellFromPxl(x, y) {
	var clickLocation = new Object();
	clickLocation.xcell = Math.floor(x/(width+2*(spacing)));
	clickLocation.ycell = Math.floor(y/(height+2*(spacing)));
	//clickLocation.x = x;
	//clickLocation.y = y;
	return clickLocation;
}

function getPxlFromCell(cellx, celly) {
	var x = width*cellx+spacing*cellx+spacing*(cellx+1);
	var y = height*celly+spacing*celly+spacing*(celly+1);
	return [x,y];
}

function getCursorPosition(event) {
	//To cancel out padding, and relative to the element, use window.pageXOffset for relative to page
	var x  = event.pageX - document.getElementById("can").offsetLeft; 
	var y  = event.pageY - document.getElementById("can").offsetTop;
		
	var clickLocation = new Object();
	clickLocation.xcell = Math.floor(x/(width+2*(spacing)));
	clickLocation.ycell = Math.floor(y/(height+2*(spacing)));
	clickLocation.x = x;
	clickLocation.y = y;
	return clickLocation;
}

function clickHandler(event) {
	var click = getCursorPosition(event);
	//alert(click.xcell + " " + click.ycell);
	

	//See what user clicked on
	//See if user clicked on tower
	var i;
	var selectedtower = -1; // -1 signifies no tower selected
	for (i = 0; i < towerarray.length; i++) {
		if (click.xcell == towerarray[i].x && click.ycell == towerarray[i].y) {
			//User clicked on tower
			selectedtower = towerarray[i].id;
			break;
		} else {
			//No tower selected;
		}
	} 

	//See if user clicked on path
	var selectedpath = [];
	for (i = 0; i < pathlist.length; i++) {
		if (click.xcell == pathlist[i][0] && click.ycell == pathlist[i][1]) {

			//User clicked on path
			selectedpath = [click.xcell, click.ycell];
			break;
		} else {
			//Path not selected
			selectedpath = [-1,-1];
		}
	}


	//Add tower if nothing selected
	if (selectedtower == -1	&& selectedpath[0] == -1 && money >= 100) {
		var towerid;
		//Find new tower id
		if (towerarray.length == 0) {
			//No towers exist
			towerid = 0;
		} else {
			towerid = towerarray[towerarray.length-1].id + 1;
		}
		//Get id of next tower by incrementing last tower's id by 1
		towerarray.push(new Tower(towerid, click.xcell, click.ycell));
		document.getElementById("sidebar").innerHTML = JSON.stringify(towerarray);
		money -= 100;
	}
	return;
}

function moveHandler(event) {
	var pos = getCursorPosition(event);
	var pxl = getPxlFromCell(pos.xcell, pos.ycell);
	document.getElementById("output").innerHTML = pos.xcell + ", " + pos.ycell + "\n";
	document.getElementById("output").innerHTML += pxl[0] + ", " + pxl[1];
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

	//Draw objects to canvas
	drawPath();
	for (i = 0; i < towerarray.length; i++) {
		towerarray[i].draw(can);
		towerarray[i].search(can);
	}
	for (i = 0; i < enemylist.length; i++) {
		enemylist[i].draw(can);
		enemylist[i].update();
		if (enemylist[i].health <= 0) {
			//Remove dead enemy
			enemylist.splice(i,1);
			
			//Get dead enemy money
			money += 10;

			//Add score
			score += 1;
		}
	}
	drawSquare(mousex, mousey, can);
	document.getElementById("underbar").innerHTML = JSON.stringify(enemylist);
	document.getElementById("money").value = "Money: " + money;
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

	runInterval = setInterval("gameLoop(c)", 30);
	genPathWrapper();

}
