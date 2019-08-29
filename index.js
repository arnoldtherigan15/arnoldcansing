// document.querySelector('button').addEventListener('click',whenClick);

var buttonArr = document.querySelectorAll('.sing');
for (var i = 0; i < buttonArr.length; i++) {
    buttonArr[i].addEventListener('click',function(){
    var buttonInner = this.innerHTML;
    makeSound(buttonInner);
    buttonAnimation(buttonInner);
    })
}

document.addEventListener('keypress', function(event) {
   
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound (key) {
    if (key === 'q') {
        var doo = new Audio ('sounds/do.mp3');
        doo.playbackRate = 2;
        doo.play();
    } else if (key === 'w') {
        var re = new Audio ('sounds/re.mp3');
        re.playbackRate = 2;
        re.play();
    } else if (key === 'e') {
        var mi = new Audio ('sounds/mi.mp3');
        mi.playbackRate = 2;
        mi.play();
    } else if (key === 'r') {
        var fa = new Audio ('sounds/fa.mp3');
        fa.playbackRate = 2;
        fa.play();
    } else if (key === 't') {
        var sol = new Audio ('sounds/sol.mp3');
        sol.playbackRate = 1.5;
        sol.play();
    } else if (key === 'y') {
        var la = new Audio ('sounds/la.mp3');
        la.playbackRate = 2;
        la.play();
    } else if (key === 'u') {
        var si = new Audio ('sounds/si.mp3');
        si.playbackRate = 2;
        si.play();
    } else if (key === 'i') {
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