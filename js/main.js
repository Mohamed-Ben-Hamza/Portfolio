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