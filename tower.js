//Object for tower
//

function Tower(id, name, range) {
	this.id = id
	this.name = name;
	this.range = range;
	this.connections = new Array();
	return this;
}
