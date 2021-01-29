class Drop {
    constructor(x,y,r){

        this.body=Bodies.circle(this.x,this.y,this.r/2,options)

        this.x=x;
        this.y=y;
        this.r=r;

        World.add(world,this.body);
 
    }

    display(){


    }
}