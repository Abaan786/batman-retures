class Umbrella {
constructor(x,y){
    var options = {

isStatic:true,
    }

this. Image = loadImage("Images/WalkingFrame/walking_1.png");
this.umbrella = Bodies .circle (x,y,50,options);
this.radius = 50
World.add(world,this.umbrella);
}
display(){
    var pos = this.umbrella.position;
    imageMode(CENTER);
    image(this.image,tos.x,pos.y+70,300,300);
}


}