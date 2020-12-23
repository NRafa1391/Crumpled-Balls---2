class Paper {
	constructor(x, y) {
		var options={
			'isStatic':false,
			'restitution':0.3,
			'density':1.2,
			'friction':0.5

		}
		this.body = Bodies.circle(x, y, 35, options);
		this.radius = 35;

		this.image = loadImage ("sprites/paper.png");

		World.add(world, this.body);
	}

	display(){
		var pos = this.body.position;
		ellipse(pos.x, pos.y, this.radius*2);
		imageMode(CENTER);
		image(this.image, pos.x, pos.y, this.width, this.height);
		image.scale = 0.25;
		
	}
}