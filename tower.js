//Object for tower
//

function Tower(id, x, y, name) {
	this.id = id
	this.name = name;
	this.x = x;
	this.y = y
	this.connections = new Array();

	//Properties
	//Should be dynamically (randomly) Generated with mutations happening in future
	this.range = 0; //This should go in properties subobject
	return this;
}
