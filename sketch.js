 //modified from https://github.com/CodingTrain by youjinSung
 
  let lang = navigator.langauge || 'en-US';
  let speechRec = new p5.SpeechRec(lang, draw);
  speechRec.start();

  function preload() {
    font = loadFont('Sprightly.otf');
  }

  function setup() {
    var slider;
    eSlider = createSlider(0, 255, 125);
    eSlider.position(80, 30);

    createCanvas(windowWidth, windowHeight);
    background(0);
    textSize(67);
    fill(255);
    noStroke();
    textFont(font);
    text("Say something...", width / 2-100, height / 2);
    text("and choose your Emotion",width / 2-150,(height / 2)+100);
    textSize(35);
    textFont(font);
    text("I will include your feeling", (width / 2)-80,
      (height / 2) + 160);


  }

  function draw() {

    if (speechRec.resultValue) {
      background(0);
      var val = eSlider.value();
     
      var S = speechRec.resultString;
      var points = font.textToPoints(S, 100, height/2, 192);
      for (var i = 0; i < points.length; i++) {
        var pt = points[i];
			
        strokeWeight(1);
        
        fill(255 - val, 0, val * 0.8);
        stroke(val);
        var my = map(val, 0, 255, 0, 30);

        if (val < 150) {

          rect(pt.x, pt.y, (30 - my) / 2, (30 - my) / 2, my / 2, my / 2, my / 2, my / 2);
        } else {

          rect(pt.x, pt.y, my / 2, my / 2, my / 2, my / 2, my / 2, my / 2);
        }
      }
      
    }
    
      textSize(20);
      text("bad", eSlider.x - 30, 35);
      text("great", eSlider.x + eSlider.width + 10, 35);
  }
  
