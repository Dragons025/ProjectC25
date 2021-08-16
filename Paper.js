class Paper{
	constructor(x,y,r)
	{
		var options={
            'isStatic':false,
			'restitution':0.3,
			'friction':0,
			'density':1.2
		}
		this.x=x;
		this.y=y;
		this.r=r
        this.image = loadImage("paper.png");
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var paperpos=this.body.position;		
			push()
			translate(paperpos.x, paperpos.y);
			imageMode(CENTER)
            noFill(this.body);
            noStroke(this.body);
			ellipse(0,0,this.r,this.r);
			pop()
            image(this.image,paperpos.x-20,paperpos.y-20,this.r,this.r);
	}

}