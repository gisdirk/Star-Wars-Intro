const stars = 400

for (let i =0; i < stars; i++) {
    let star = document.createElement("div")
    star.className = 'stars'
    var xy = randomPosition();
    star.style.top = xy[0] + 'px'
    star.style.left = xy[1] + 'px'
    document.body.append(star)
}

function randomPosition() {
    var y = window.innerWidth
    var x = window.innerHeight
    var randomX = Math.floor(Math.random() * x)
    var randomY = Math.floor(Math.random() * y)
    return [randomX, randomY]
} 

// play animation
var play = document.querySelector("#play")
var intro = document.querySelector(".intro")
var logo = document.querySelector(".logo")
var audio = document.getElementById("audio")
//var delay = setTimeout(function(){audio.play();}, 6600)



play.addEventListener('click', function() {
	intro.style.animationPlayState = 'running';
});
play.addEventListener('click', function() {
	logo.style.animationPlayState = 'running';
});
play.addEventListener('click',function() {
	audio.play();
});

/*setTimeout(function(){
    document.getElementById("audio").play();
  }, 6600) */