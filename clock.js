class Clock {
    constructor(){

    }
    
    display(){
        var scAngle = this.sc.angle
        angleMode(DEGREES);
        scAngle = map(sc, 0, 60, 0, 360);
        
    }
}