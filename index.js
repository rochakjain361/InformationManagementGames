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


//NAV BAR LINK SCROLL EFFECT CODE STARTS
$('#gamesLink').on('click', function(){
  scrollToElem('#element1')
});

function scrollToElem(element){
  var position = $(element).offset().top;
  var duration = getDuration(position);
  $("HTML, BODY").animate({
      scrollTop: position
  }, duration);
}

function getDuration(target) {
  var currentTop = $(window).scrollTop(), rate = 0.5, distance;
  distance = Math.abs(currentTop - target);
  return distance * rate;
}

$("#homeLink").on('click', function(){
  var duration = getDuration(0);
  $("HTML, BODY").animate({
      scrollTop: 0
  }, duration);
});

//NAV BAR LINK SCROLL EFFECT CODE ENDS

// BORED BUTTON CODE STARTS

var gameLinks=["https://ayu023ban.github.io/tic-tac-toe/","https://gauransh7.github.io/car-traffic/","https://kmrinal19.github.io/pocketTanks/","https://sparsh1212.github.io/Mid-sem_Assignment_Sparsh/","https://mihirsachdeva.github.io/FlappyBird/","https://aitalshashank2.github.io/ChessEngine/index.html","https://prernaswarna.github.io/Gamejavacript/","https://shreyasdoda.github.io/connect-four-hosted/","https://geekvert.github.io/Minesweeper/","https://bpraak.github.io/Memory/","https://rochakjain361.github.io/snakeGame/snakes.html","https://ktg-123.github.io/PingPong.html","https://ruddi10.github.io/ping-pong/","https://yash523.github.io/game.html","https://gopalgupta8216.github.io/Snake-game/","https://gagansh7171.github.io/js-game/"]
function boredButtonClick(){
  let linkLength= gameLinks.length
  let random_num = Math.floor(Math.random()*linkLength)
  window.location.href=gameLinks[random_num]
}

// BORED BUTTON CODE ENDS


//SIDENAV CODE STARTS
var sideopen = false;
$('#nav-icon3').click(function(){
  $(this).toggleClass('open');
  if(sideopen){
    closeNav();
    
  } else{
    document.getElementById("sidenav").style.width = "250px";
    sideopen = true;
  }
  
});

$('#gamesLinkS').on('click', function(){
  $('#nav-icon3').toggleClass('open');
  closeNav();
  scrollToElem('#elementsGridMobile')
});

$("#homeLinkS").on('click', function(){
  $('#nav-icon3').toggleClass('open');
  closeNav();
  var duration = getDuration(0);
  $("HTML, BODY").animate({
      scrollTop: 0
  }, duration);
});

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
  sideopen = false;
  document.getElementById("sidenav").style.width = "0";
}


//SIDENAV CODE ENDS