var song
var fft

function preload()
{
  song = loadSound('music/The Lake Of Oblivion.mp3')
  song.setLoop(true)
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  fft =new p5.FFT()
}

function draw() {
  background(0)
  stroke(255)
  noFill()
  var wave = fft.waveform()

  beginShape()
  for(var i = 0; i < width; i++)
  {
    var index = floor(map(i,0,width,0,wave.length))

    var x = i
    var y = wave[index] * 200 + height / 2
    vertex(x,y)
  }

  endShape()
}

function mouseClicked()
{
  if(song.isPlaying())
  {
    song.pause()
    noLoop()
  }
  else
  {
    song.play()
    loop()
  }
}