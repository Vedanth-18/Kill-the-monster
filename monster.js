class Monster{
    constructor(x,y,width, height){
        this.monster = Bodies.rectangle(x, y, width, height, {isStatic:false, restitution:1.8});
        this.x=x;
        this.y=y;
        this.width = width;
        this.height = height;
        this.image = loadImage("assets/monster.png");
        World.add(world, this.monster);
    }
    display(){
        var pos = this.monster.position;
        var radius = this.monster.radius;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, 280,370);
    }
}