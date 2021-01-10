class Dot{
    constructor(x,y,color){
        var options={
            isStatic:true
        };

        this.x = x;
        this.y = y;
        this.color = color;
        this.body = Bodies.rectangle(x,y,10,10,options);
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        stroke("white");
        fill(this.color);
        ellipse(0,0,10,10);
        pop();
    }
}