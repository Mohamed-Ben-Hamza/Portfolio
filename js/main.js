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
const nav =document.getElementById('nav')
const progress= document.querySelectorAll('.progress-bar')
window.onscroll = function() {scrollFunction(),animateSkills()};


function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {

    scrollToTopBtn.style.display = "block";

    nav.classList.add('scroll')
  } else {
    scrollToTopBtn.style.display = "none";
    nav.classList.remove('scroll')
  }
}

function animateSkills(){
  if (document.body.scrollTop > 1700 || document.documentElement.scrollTop > 1700) {
  
    progress.forEach(element => {
      element.style.width=element.dataset.progres +"%"
    });
    
  } else {
    
  }
}


const btn =document.getElementById('submit')
const username= document.getElementById('name')
const mail =document.getElementById('mail')
const subject =document.getElementById('subject')
const body =document.getElementById('body')
btn.addEventListener('click',function (e) {
  e.preventDefault();

  Email.send({
    Host:"smtp.mailtrap.io",
    Username:"3dc45afde0390c",
    Password:"456c62c15141f0",
    To:"mohamedbenhamza90@gmail.com",
    From:mail.value,

    Subject : subject.value,
     Body : username.value +'<br>' +  mail.value +"<br> " +subject.value +'<br>' + body.value  + "<br>"  
  }).then(
    message => alert(message)
  )
})



var links =document.querySelectorAll('.links-nav a')

links.forEach(element => {
  element.addEventListener('click',function(e){
    links.forEach(element => {
      
    element.classList.remove('active')
    });
      e.currentTarget.classList.add('active')

    

  })

});




