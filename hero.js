class Hero{
   constructor(x,y, width, height){
     var options={
         isStatic:false,
         restitution:1,
         density:10
     }
     this.body = Bodies.rectangle(x, y, width, height, options);
     this.x=x;
     this.y=y;
     this.width = width;
     this.height=height;
     //this.radius=radius;
     this.image = loadImage("assets/hero.png");
     World.add(world, this.body);
   }
   display(){
       var pos = this.body.position;
       var radius = this.body.radius;
      //  rectMode(CENTER);
      //  rect(pos.x, pos.y+50, 200, 200);
       imageMode(CENTER);
       image(this.image, pos.x, pos.y+50, 200, 200)
   }

}