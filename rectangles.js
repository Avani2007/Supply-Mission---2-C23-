class Rectangle {
    constructor(x,y,w,h){
        var options
    this.body = Bodies.rectangle(x,y,w,h);
    this.w=w
    this.h=h
    World.add(world,this.body);
    }
    display(){
        var pos = this.body.position
        rectMode(CENTER);
        fill("red")
        rect(pos.x, pos.y, this.w, this.h);
    }
}