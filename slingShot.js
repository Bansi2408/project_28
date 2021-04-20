class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB=pointB;
        this.slingshot = Matter.Constraint.create(options);
        World.add(world, this.slingshot);
    }

    display(){
        if(this.slingshot.bodyA)
        {
        var pointA = this.slingshot.bodyA.position;
       
        strokeWeight(4);
        line(pointA.x, pointA.y, this.pointB.x, this.pointB.y);
        }
    }
    fly()
    {
        this.slingshot.bodyA=null;
    }
    
}