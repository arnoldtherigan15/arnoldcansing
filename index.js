var buttonArr = document.querySelectorAll('.sing');
for (var i = 0; i < buttonArr.length; i++) {
    buttonArr[i].addEventListener('click',function(){
    var buttonInner = this.innerHTML;
    console.log(buttonInner);
    
    makeSound(buttonInner);
    buttonAnimation(buttonInner);
    })
}

document.addEventListener('keypress', function(event) {
   
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound (key) {
    if (key === '1') {
        var doo = new Audio ('sounds/do.mp3');
        doo.playbackRate = 2;
        doo.play();
    } else if (key === '2') {
        var re = new Audio ('sounds/re.mp3');
        re.playbackRate = 2;
        re.play();
    } else if (key === '3') {
        var mi = new Audio ('sounds/mi.mp3');
        mi.playbackRate = 2;
        mi.play();
    } else if (key === '4') {
        var fa = new Audio ('sounds/fa.mp3');
        fa.playbackRate = 2;
        fa.play();
    } else if (key === '5') {
        var sol = new Audio ('sounds/sol.mp3');
        sol.playbackRate = 1.5;
        sol.play();
    } else if (key === '6') {
        var la = new Audio ('sounds/la.mp3');
        la.playbackRate = 2;
        la.play();
    } else if (key === '7') {
        var si = new Audio ('sounds/si.mp3');
        si.playbackRate = 2;
        si.play();
    } else if (key === '8') {
        var du = new Audio ('sounds/du.mp3');
        du.playbackRate = 2;
        du.play();
    }
}
function buttonAnimation (currentKey) {
    var activeButton = document.querySelector('.'+currentKey);
    activeButton.classList.add('pressed');
    setTimeout(function(){
        activeButton.classList.remove('pressed');
    },150)
}
var i = 0;
var txt = 'Arnold Can Sing!'
var speed = 110;

function typeWriter() {
  if (i < txt.length) {
    document.querySelector('#title').innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();

document.querySelector('.start').addEventListener('click',function(){
    var start = new Audio ('sounds/start.mp3');
    start.playbackRate = 1;
    start.play();
})





