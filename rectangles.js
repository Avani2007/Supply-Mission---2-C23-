class Rectangle {
    constructor(x,y,w,h){
    this.body = Bodies.rectangle(x,y,w,h);
    World.add(world, this.body);
    }
    display(){
        var pos = this.body.position
        var angle = this.body.angle
        rectMode(CENTER);
        fill("red")
        rect(0,0, this.w, this.h);
    }
}