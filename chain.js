class chain {
    constructor(birdbody,bodyB){
        var options={
            bodyA:birdbody,
            bodyB:bodyB,
            length:10,
            stiffness:0.04
        };
        this.chain=Matter.Constraint.create(options);
        World.add(world,this.chain)
    }
display(){
strokeWeight(5);
var x1=this.chain.bodyA.position.x;
var y1=this.chain.bodyA.position.y;
var x2=this.chain.bodyB.position.x;
var y2=this.chain.bodyB.position.y;
line(x1,y1,x2,y2)
}
}






