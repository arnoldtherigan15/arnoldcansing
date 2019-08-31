var userSong = '';
var usersongArr = [];
var jawaban = document.querySelector('.soal1')
var slideSource = document.getElementById('level-title');
document
    .getElementById('tes')
    .onclick = function () {
        slideSource
            .classList
            .add('fade');
        document
            .querySelector('.soal1')
            .innerHTML = '1234<span>|</span>53168<span>|</span>76546<span>|</span>5431<span>|</span>2432' +
                    '1';
        document
            .querySelector('.soal1')
            .classList
            .add('fadeSoal');
    }
var buttonArr = document.querySelectorAll('.sing');
for (var i = 0; i < buttonArr.length; i++) {
    buttonArr[i].addEventListener('click', function () {
        var buttonInner = this.innerHTML;
        userSong += buttonInner;
        makeSound(buttonInner);
        buttonAnimation(buttonInner);
    })
}
var indeks = 0;
function makeSound(key) {
    if (key === '1') {
        var doo = new Audio('sounds/play/do.wav');
        doo.play();
        indeks++;
    } else if (key === '2') {
        var re = new Audio('sounds/play/re.wav');
        re.play();
        indeks++;
    } else if (key === '3') {
        var mi = new Audio('sounds/play/mi.wav');
        mi.play();
        indeks++;
    } else if (key === '4') {
        var fa = new Audio('sounds/play/fa.wav');
        fa.play();
        indeks++;
    } else if (key === '5') {
        var sol = new Audio('sounds/play/sol.wav');
        sol.play();
        indeks++;
    } else if (key === '6') {
        var la = new Audio('sounds/play/la.wav');
        la.play();
        indeks++;
    } else if (key === '7') {
        var si = new Audio('sounds/play/si.wav');
        si.play();
        indeks++;
    } else if (key === '8') {
        var du = new Audio('sounds/play/du.wav');
        du.play();
        indeks++;
    }
    var jawabanSoal1 = '12345316876546543124321';
    if (userSong[indeks - 1] === jawabanSoal1[indeks - 1]) {} else {
        var audio = new Audio("sounds/wrong.mp3");
        audio.play();
        setInterval(function () {
            window
                .location
                .assign('kartini.html')
        }, 500);
    }
    if (indeks === 23 && userSong[indeks - 1] === jawabanSoal1[indeks - 1]) {
        alert('Arnold Can Sing');
        alert('Lets Sing Ibu Kita Kartini');
        var how = new Audio('sounds/play/kartini.mp3');
        how.playbackRate = 1.5;
        how.play();
    }
}
function buttonAnimation(currentKey) {
    var activeButton = document.querySelector('.' + currentKey);
    activeButton
        .classList
        .add('pressed');
    setTimeout(function () {
        activeButton
            .classList
            .remove('pressed');
    }, 150)
}
