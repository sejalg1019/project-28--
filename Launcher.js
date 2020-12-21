class Launcher{
    constructor(bodyA, pointB){ 
        var options = {
            bodyA: bodyA, 
            pointB: pointB, 
            length: 1, 
            stiffness: 0.4 
        }
        this.bodyA = bodyA;
        this.pointB = pointB;
        this.launcher = Constraint.create(options); 
        World.add(world, this.launcher); 
    }

    fly(){
        this.launcher.bodyA = null;
    }

    attach(bodyA){
        this.launcher.bodyA = bodyA;
    }
    display(){
        if(this.launcher.bodyA){
            var pointA = this.bodyA.position; 
            var pointB = this.pointB; 
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
        

    }
}