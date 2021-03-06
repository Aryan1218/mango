class mango {
    constructor(x,y,r) {
      var options = {
          isStatic: true,
          restitution:0
      }
      this.image=loadImage("mango.png")
      this.body = Bodies.circle(x,y,r,options);
      this.r = r;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push()
      translate(pos.x, pos.y)
      rotate(this.body.angle)
      imageMode(CENTER);
      fill(255,0,255);
      ellipseMode(CENTER)
      image(this.image, 0, 0, this.r*2, this.r*3);
      pop()
    }
  };