// TYPING EFFECT CODE STARTS

var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('typewrite');
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-type');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
};

//TYPING EFFECT CODE ENDS

// BORED BUTTON CODE STARTS

var gameLinks=["https://ayu023ban.github.io/tic-tac-toe/","https://gauransh7.github.io/car-traffic/","https://kmrinal19.github.io/pocketTanks/","https://sparsh1212.github.io/Mid-sem_Assignment_Sparsh/","https://mihirsachdeva.github.io/FlappyBird/","https://aitalshashank2.github.io/ChessEngine/index.html","https://prernaswarna.github.io/Gamejavacript/","https://shreyasdoda.github.io/connect-four-hosted/","https://geekvert.github.io/Minesweeper/","https://bpraak.github.io/Memory/"]
function boredButtonClick(){
  let linkLength= gameLinks.length
  let random_num = Math.floor(Math.random()*linkLength)
  window.location.href=gameLinks[random_num]
}

// BORED BUTTON CODE ENDS