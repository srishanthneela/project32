class Ground{

    constructor(){
        var ground_options={
            isStatic : true
          }
        
          this.ground = Bodies.rectangle(900,790,1800,20,ground_options)
          World.add(world,this.ground);
    }
    display(){
        strokeWeight(5);
        fill("brown");
        rectMode(CENTER);
        rect(this.ground.position.x,this.ground.position.y,1800,20);
    }
}