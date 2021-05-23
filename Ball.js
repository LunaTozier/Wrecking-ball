class Ball {
    constructor(x, y, r) {
        var options = {
            'restitution':0.5,
            'friction':1.0,
            'density':1.3
        }
        this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var ballpos=this.body.position;		
			push()
			translate(ballpos.x, ballpos.y);
			rectMode(CENTER)
			strokeWeight(2);
			stroke("black");
			fill("blue");
			ellipse(0,0,this.r,this.r);

			pop()
	}

}