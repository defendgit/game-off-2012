//Object for tower
//

//Tower Properties object
function TowerProperties() {
	this.range;
	this.health;
	this.damage;
	this.color;
	this.shape;
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
	this.range = 0; //This should go in properties subobject
	

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

function randomize() {
}
	
