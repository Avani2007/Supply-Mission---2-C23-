class Rectangle {
    constructor(x,y,w,h){
    this.body = Bodies.rectangle(x,y,w,h);
    World.add(world, this.body);
    }
    display(){
        var pos = this.body.position
        rectMode(CENTER);
        fill("red")
        rect(pos.x, pos.y, this.w, this.h);
    }
}