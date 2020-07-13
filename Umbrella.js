class Boy{
    constructor(x,y){
        var options = {
            isStatic: true,
        }
        this.radius = 100;
        this.image = loadImage("boy.png");
        this.umbrella = Bodies.circle(x,y,this.radius,options);
        World.add(world, this.umbrella)
    }

    display(){
        imageMode(CENTER);
        image(this.image, this.umbrella.position.x + 10, this.umbrella.position.y + 80, 350, 400);
    }
}