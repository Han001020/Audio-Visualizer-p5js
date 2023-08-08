var song
var fft

function preload() 
{
  song = loadSound('music/The Lake Of Oblivion.mp3')
  song.setLoop(true)
}

function setup() 
{
  createCanvas(windowWidth, windowHeight)
  fft = new p5.FFT()
}

function draw() 
{
  let waveform = fft.waveform();

  angleMode(DEGREES)

  Sunset(waveform)
}

function mouseClicked() 
{
  if (song.isPlaying()) 
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

function windowResized() 
{
  resizeCanvas(windowWidth, windowHeight);
}
