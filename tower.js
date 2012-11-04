//Object for tower
//

//Tower Properties object
function TowerProperties() {
	this.range = 0;
	this.health = 0;
	this.damage = 0;
	this.color = 0;
	this.shape = 0;
	return this;
}

//Tower object
function Tower(id, x, y, name) {
	this.id = id
	this.name = name;
	this.x = x;
	this.y = y
	this.connections = new Array();

	//Properties
	//Each tower should have polyshape/colour based on attributes/properties
	//Should be dynamically (randomly) Generated with mutations happening in future
	this.properties = new Object();
	this.properties.range = Math.floor(Math.random() * 200) + 50;
	this.properties.damage = Math.floor(Math.random() * 30) + 1;
	this.properties.health = Math.floor(Math.random() * 100) + 10;

	//Randomize properties

	//Functions 
	this.draw = draw;

	return this;
}

function draw(can) {
	can.fillStyle = "#ffffff";
	//can.fillRect(this.x, this.y, 1,1);
	can.fillRect(width*this.x+spacing*this.x+spacing*(this.x+1), height*this.y+spacing*this.y+spacing*(this.y+1), width, height);
	//alert("Drawn");
	return;
}

function makeDrawProperties() {
	//Generate colour and shape based on other tower properties
}

function randomize(prop) {
	prop.range = Math.floor(Math.random() * 200) + 50;
	prop.damage = Math.floor(Math.random() * 30) + 1;
	prop.health = Math.floor(Math.random() * 100) + 10;
}

	
