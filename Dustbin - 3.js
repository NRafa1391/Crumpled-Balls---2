class Dustbin3 {
	constructor(x, y) {
		var options={
			'isStatic':true,
			'restitution':0.3,
			'density':1.2,
			'friction':0.5

		}
		this.body = Bodies.rectangle(x, y, 10, 100, options);
		this.width = 10;
		this.height =  100;

		World.add(world, this.body);
	}

	display(){
		var pos = this.body.position;
		rectMode(CENTER);
		rect(pos.x, pos.y, this.width, this.height);
	}
}