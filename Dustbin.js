class Dustbin {
	constructor(x, y) {
		var options={
			'isStatic':true,
			'restitution':0.3,
			'density':1.2,
			'friction':0.5

		}

		this.body = Bodies.rectangle(x, y, 200, 10, options);
		this.width = 200;
		this.height =  10;

		this.image = loadImage("sprites/dustbingreen.png");

		World.add(world, this.body);
	}

	display(){
		var pos = this.body.position;
		rectMode(CENTER);
		rect(pos.x, pos.y, this.width, this.height);
	}
}