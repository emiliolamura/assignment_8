value = 0
u = 0
u2 = 0

function preload() {
  
  immagine1= loadImage('assets/1.png')
  immagine1a= loadImage('assets/1a.png')
  immagine1b= loadImage('assets/1b.png')
  immagine2= loadImage('assets/2.png')
  immagine3= loadImage('assets/3.png')
  immagine3a= loadImage('assets/3a.png')
  start= loadImage('assets/start.png')
  win= loadImage('assets/win.png')
  over= loadImage('assets/over.png')
  gallina= loadSound('assets/c.mp3')
  gold= loadSound('assets/gold.mp3')
  
}

function setup() {
  createCanvas(windowWidth,windowHeight)
  angleMode(DEGREES)
}


function draw() {
  background(2,200,200)
  setShakeThreshold(1+u2)


  if (u === 30) {
  uovo = immagine3a
} else{
  uovo = immagine3
}
  
  image(uovo,width/2-75,height/2+value)
  image(immagine2,width/2-175,height/2-100)
  strokeWeight(50)
  stroke(200)
  var ff = map(accelerationX/5, 0, 50, 0, width)
  var gg = map(accelerationY/2, 0, 50, 0, 400)
  
  line(width/2,height/2+29,ff+width/2,gg+height/2+1)


if(mouseX > width/2-50 && mouseX < width/2+50 ){
  e = -rotationZ +90
} else {
    e = -rotationZ
}

if(u >= 10){
  testa = immagine1a
} else{
  testa = immagine1
}

if(u >= 20){
  testa = immagine1b
}

  push()
    translate(width/2,height/2)
    rotate(e)
    x = ff-175
    y = gg-200
    image(testa,x,y)
  pop()
  
image(immagine3,-10,-5,70,70)  
noStroke()
fill(255)
textSize(20)
text(u,40,40)

image(immagine3a,-10,+40,70,70)  
noStroke()
fill(240,220,0)
textSize(20)
text(u2,45,90)

if ( u ===30) {
  gallina.pause()
  gold.play()
}

if (u > 30) {
  fill(2,200,200)
  rect(0,0,width,height)
  image(win,width/2-175,height/2-250,350,500)
}

if (u === 0) {
  fill(2,200,200,240)
  rect(0,0,width,height)
  image(start,width/2-150,height/2-200,300,400)
}

if (u2 >= 3) {
  fill(0)
  rect(0,0,width,height)
  image(over,width/2-150,height/2-250,300,500)
}
  
}



function deviceShaken() {
  value = value + 5;
  
  if (value === 60){
      gallina.play()
  }
  
  if (value === 240){
    u = u+1

    if (u>31){
      u = 1
      u2 = u2+1
    }
  }
  
  if (value > 240) {
    value = 0;
  }
  
}
