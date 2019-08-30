var userSong ='';
var usersongArr = [];
var started = false;
var jawaban =  document.querySelector('.soal1')
document.addEventListener('click',function(){
    if (!started) {
        $( "#level-title" ).fadeOut( 500, function() {
            // Animation complete.
          });
        jawaban.innerHTML = '1234<span>|</span>53168<span>|</span>76546<span>|</span>5431<span>|</span>24321';
        $( ".soal1" ).fadeOut( 20000, function() {
            // Animation complete.
          });
          started = true;
    }
}) 
var buttonArr = document.querySelectorAll('.sing');
for (var i = 0; i < buttonArr.length; i++) {
    buttonArr[i].addEventListener('click', function () {
        var buttonInner = this.innerHTML;
        userSong += buttonInner;

        console.log(userSong);

        makeSound(buttonInner);
        buttonAnimation(buttonInner);
    })

}

// document.addEventListener('keypress', function(event) {
//    console.log(event.key);
   
//     makeSound(event.key);
//     buttonAnimation(event.key);
// });
var indeks = 0;
function makeSound (key) {
    if (key === '1') {
        var doo = new Audio ('sounds/play/do.wav');
        doo.play();
        indeks++;
    } else if (key === '2') {
        var re = new Audio ('sounds/play/re.wav');
        re.play();
        indeks++;
    } else if (key === '3') {
        var mi = new Audio ('sounds/play/mi.wav');
        mi.play();
        indeks++;
    } else if (key === '4') {
        var fa = new Audio ('sounds/play/fa.wav');
        fa.play();
        indeks++;
    } else if (key === '5') {
        var sol = new Audio ('sounds/play/sol.wav');
        sol.play();
        indeks++;
    } else if (key === '6') {
        var la = new Audio ('sounds/play/la.wav');
        la.play();
        indeks++;
    } else if (key === '7') {
        var si = new Audio ('sounds/play/si.wav');
        si.play();
        indeks++;
    } else if (key === '8') {
        var du = new Audio ('sounds/play/du.wav');
        du.play();
        indeks++;
    } 
    var jawabanSoal1 = '12345316876546543124321';
    console.log('ini adalah i = '+ indeks);
    
    
    // for (var i = 0; i < jawabanSoal1.length; i++ ) {
        if (userSong[indeks-1] === jawabanSoal1[indeks-1]) {
            console.log(userSong[indeks-1] + '---' + jawabanSoal1[indeks-1]);
            
        }
      
         else {
            var audio = new Audio("sounds/wrong.mp3");
            audio.play();
            console.log("wrong");
      
      
      $("body").addClass("game-over");
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);
      setInterval(function(){window.location.assign('kartini.html')},1000);
    
          }

    if (indeks === 23 && userSong[indeks-1] === jawabanSoal1[indeks-1]) {
        alert('Arnold Can Sing');
        alert('Lets Sing Ibu Kita Kartini');
        var how = new Audio ('sounds/play/kartini.mp3');
        how.playbackRate = 1.5;
        how.play();
        // userSong = '';
        // document.querySelector('.soal2').innerHTML = 'erti<span>|</span>tetwe<span>|</span>rwtre<span>|</span>qqyyuit<span>|</span>ertrewq';
        // $( ".soal2" ).fadein( 1000, function() {
        //     // Animation complete.
        //   });
     }
    
}
function buttonAnimation (currentKey) {
    var activeButton = document.querySelector('.'+currentKey);
    activeButton.classList.add('pressed');
    setTimeout(function(){
        activeButton.classList.remove('pressed');
    },150)
}


