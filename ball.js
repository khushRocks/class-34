class Ball{
    constructor(x,y,radius){
     var options = {
         frictionAir:0.005,
         dencity:1
    }
    this.body = Bodies.circle(x,y,radius,options);
    World.add(world,this.body);
    this.radius = radius;
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        fill("red");
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}