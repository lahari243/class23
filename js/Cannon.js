class Cannon {
constructor(x,y,width,height,angle){
    this.x = x
    this.y = y
    this.height = height
    this.width = width
    this.angle = angle
    
}
display(){
    fill("lightblue")
    push ()
    translate (this.x,this.y)
    rotate (this.angle)
   rect (-10,-20,this.width,this.height) 
   pop ()  
   arc (this.x - 30, this.y + 90,140,200,PI,TWO_PI)
   noFill ()
}

}

