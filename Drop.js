class drop{
    constructor(x, y){
        var options = {
            friction: 0.1,
            restitution:0.1
        }
        this.radius = 5;
        this.raindrop = Bodies.circle(x,y,this.radius,options);
        World.add(world, this.raindrop);
    }

    resetPos(){     
        if(this.raindrop.position.y > 800){
            Matter.Body.setPosition(this.raindrop, {x:random(0, 800), y:random(0, -800)})
        }
    }

    display(){
        fill("lightblue")
        noStroke();
        ellipseMode(CENTER);
        ellipse(this.raindrop.position.x, this.raindrop.position.y, this.radius, this.radius);
    }
}