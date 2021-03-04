class Box {
    constructor(x,y) {
      var options = {
         
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x,y,30,50,options);
      this.width = 30;
      this.height = 50;
      World.add(world, this.body);
    }
    display(colour){
     
    if(this.body.speed<5){
      var angle=this.body.angle;
      var pos=this.body.position;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
        rectMode(CENTER);
        fill(colour);
        rect(0, 0, this.width, this.height);
        pop();
       
      }
      else{
        World.remove(world,this.body);
       push();
        this.visibility=this.visibility-2
        tint(250,this.visibility);
       pop();
       
      }
     
    }
    
  };
