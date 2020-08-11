class Batman {
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      this.img =loadImage("umbrella_man-removebg-preview.png",0,0);
      World.add(world, this.image);
    }
    display(){
        imageMode(CENTER);
        //image( this.image,this.image.position.x,this.image.position.y);
  
        image( this.img,this.img.position.x,this.img.position.y);   }
  }

