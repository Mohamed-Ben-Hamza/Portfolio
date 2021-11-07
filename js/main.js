var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(2000)
  .typeString('Front-End developer')
  .pauseFor(300)
  .deleteChars(19)
  .typeString('Back-Eend developer  ')
  .deleteChars(30)
  .typeString('Wordpress developer')
  .pauseFor(1000)
  .start();



var config= document.querySelector('.pics');
var mixer= mixitup(config)
var mixer = mixitup(config, {
    selectors: {
        target: '.blog-item'
    },
    animation: {
        duration: 200
    }
});

var scrollToTopBtn = document.getElementById("scrollToTopBtn");
var rootElement = document.documentElement;

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
  
    scrollToTopBtn.style.display = "block";
    
  } else {
    scrollToTopBtn.style.display = "none";
  }
}