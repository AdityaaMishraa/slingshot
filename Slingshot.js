class Slingshot{
    constructor(body,point){
        var options=
    {
        bodyA:body,
        pointB:point,
        length:50,
        stiffness:0.04

    }

        this.constraint=Constraint.create(options);
        World.add(world,this.constraint);
        this.pointB=point;
    }
    display(){
        if(this.constraint.bodyA){
        var pointB=this.constraint.pointB;
        var pointA=this.constraint.bodyA.position;

        if(this.constraint.pointB){
        strokeWeight(1);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
    }
    fly(){
        this.constraint.pointB=null;
        
    }

    attach(){
        this.constraint.pointB=this.pointB;
    }

}