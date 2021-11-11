class Drops{
    constructor(x,y){
        super(x,y,50,50);
        this.image = loadImage("");
        friction:0,1;
        this.trajectory =[];
        ellipse(x,y,60,60);
      }
      update(){
          if(this.rain.position.y>height){
              Matter.Body.setPosition(this.rain,{x:random(0,400),y:random(0,400)})
          }
      }
      

}