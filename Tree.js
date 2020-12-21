class Tree {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.x = x;
      this.y = y;
      this.width = 350;
      this.height = 400;
      this.wallThickness=10;

      this.image = loadImage("sprites/tree.png")

      this.body = Bodies.rectangle(x,y,width,height,options);
      this.bottomBody = Bodies.rectangle(this.x, this.y, this.width, this.wallThickness, {isStatic: true});
      this.leftWallBody = Bodies.rectangle(0,this.y-this.height/2, this.wallThickness, this.height, {isStatic: false});
      this.rightWallBody = Bodies.rectangle(this.x+this.width/2, this.y-this.height/2, this.wallThickness, this.height, {isStatic: false});

      World.add(world, this.body);
      World.add(world, this.leftWallBody);
      World.add(world, this.rightWallBody);
      World.add(world, this.bottomBody);

    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y+10);
      imageMode(CENTER);
      image(this.image,0,-this.height/2,this.width,this.height);
      pop();
    }
  };
