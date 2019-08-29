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
        var tom1 = new Audio ('sounds/do.mp3');
        tom1.play();
    } else if (key === 'w') {
        var tom2 = new Audio ('sounds/re.mp3');
        tom2.play();
    } else if (key === 'e') {
        var tom3 = new Audio ('sounds/mi.mp3');
        tom3.play();
    } else if (key === 'r') {
        var tom4 = new Audio ('sounds/fa.mp3');
        tom4.play();
    } else if (key === 't') {
        var crash = new Audio ('sounds/sol.mp3');
        crash.play();
    } else if (key === 'y') {
        var kick = new Audio ('sounds/la.mp3');
        kick.play();
    } else if (key === 'u') {
        var snare = new Audio ('sounds/si.mp3');
        snare.play();
    } else if (key === 'i') {
        var snare = new Audio ('sounds/du.mp3');
        snare.play();
    }
}
function buttonAnimation (currentKey) {
    var activeButton = document.querySelector('.'+currentKey);
    activeButton.classList.add('pressed');
    setTimeout(function(){
        activeButton.classList.remove('pressed');
    },150)
}