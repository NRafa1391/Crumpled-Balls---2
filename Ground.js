class Ground {
    constructor(x, y) {
        var options={
            'isStatic':true,
            'restitution':0.3,
            'density':1.2,
            'friction':0.5
    
        }
        this.body = Bodies.rectangle(400, 600, 800, 10, options);
        this.width = 800;
        this.height =  10;

        World.add(world, this.body)
    }

    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
    }
}