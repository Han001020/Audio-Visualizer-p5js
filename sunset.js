
function DrawSun()
{
  fill(255,20,120)
  beginShape();
  for (let i = 0; i <= 180; i++) 
  {
    r = 250
    let x = r * cos(i);
    let y = r * -sin(i);
    vertex(x, y);
  }
  endShape();
}

function DrawWater()
{
  noStroke()
  stroke(80,130)
  fill(80,0,130)
  rect(0, height/2, width, height)
}

function Sunset(waveform)
{
  background(40,10,60)

  noFill();

  DrawWater()

  stroke(255,20,120);


  translate(width / 2 , height / 2);

  DrawSun();


  beginShape();
  for (let i = 0; i <= 180; i++) 
  {
    let index = floor(map(i, 0, 180, 0, waveform.length - 1));
    r = map(waveform[index], -1, 1, 150, 350);
    let x = r * cos(i);
    let x_ = r * -cos(i);
    let y = r * sin(i);
    vertex(x, y);
    vertex(x_, y);
    
  }
  endShape(); 
}
