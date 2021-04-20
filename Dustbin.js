class Dustbin {
  constructor(x, y) {
    var options = {
        'isStatic': true
    }
    this.dwidth = 200;
    this.dheight = 350;
    this.thickness = 20;
    this.bodyb = Bodies.rectangle(x, y, 200,250, options);
    this.image = loadImage("dustbingreen.png")
    World.add(world,this.bodyb);

    //this.bodyl = Bodies.rectangle(x-100,y-10,this.thickness,this.dheight,options);
    //World.add(world,this.bodyl);
    //this.bodyr = Bodies.rectangle(x+100,y-10,this.thickness, this.dheight, options);
    //World.add(world,this.bodyr);

    this.bodyb.width = width;
    this.bodyb.height = height;
    
    
  }
  display(){
    push ();
    translate(this.bodyb.position.x,this.bodyb.position.y); 
    imageMode(CENTER);
    image(this.image,0,0-95,200,250);
    pop ();
  }
};