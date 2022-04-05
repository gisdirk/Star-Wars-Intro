// stars randomly generated

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

// 3D Scene

const scene = new THREE.Scene();
			const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

			const renderer = new THREE.WebGLRenderer({alpha:true});
			renderer.setSize( window.innerWidth, window.innerHeight );
			document.body.appendChild( renderer.domElement );
			
			//Star Destroyer 3D model
			const loader = new THREE.GLTFLoader();
  			loader.load(
  			  "models/star_destroyer/scene.gltf",
   			 function (object) {
			object.scene.scale.x = 2;
			object.scene.scale.y = 2;
			object.scene.scale.z = 2;
			object.scene.position.z = 100;
			object.scene.position.y = 5;
			object.scene.rotation.y= Math.PI *0.5;
			scene.add(object.scene);
				}
			);

			//CR90 Corvette 3D model
			const loader2 = new THREE.GLTFLoader();
  			loader2.load(
			"models/cr90_corvettefixed/cr90b.gltf",
   			 function (object) {
			object.scene.scale.x = 0.08;
			object.scene.scale.y = 0.08;
			object.scene.scale.z = 0.06;
			object.scene.position.z = 0;
			object.scene.position.y = 10;
			object.scene.position.x = 5;
			object.scene.rotation.y= Math.PI;
			scene.add(object.scene);
				}
			);
			

			// Lighting
			var ambientLight = new THREE.AmbientLight(0xffffff, 1.3);
			scene.add(ambientLight);

			var pointLight1 = new THREE.PointLight(0xf9eac8, 3, 100);
			pointLight1.position.set(-10, 10, 0);
			pointLight1.castShadow = true;
			pointLight1.shadow.camera.top = 20;
			scene.add(pointLight1);

			// Camera settings
			camera.lookAt(scene.position);
			camera.position.y = -0.5;
			camera.position.x = -3;
			camera.rotation.x = Math.PI * 0.05;

			function animate() {
			requestAnimationFrame(animate);
			renderer.render(scene, camera);
			}

			animate();

// GSAP animation put into a function to embed in button for onclick event
var runIntro = function(){
   
   const timeline = gsap.timeline
   ();

   timeline
   
   .to('.intro',{opacity:1,duration:2})
   .to('.intro',{opacity:0,duration:1}, "+=2")
   .set('.logo',{opacity:1}, "+=2")
   .to('.logo',{scale:0,duration:15})
   .to('.logo',{opacity:0,duration:2}, "-=3")
   .to('.text',{top:"-700%",duration:130},"-=7")
   .to('.background',{top:"10%",duration:15},91)
   .to('.stars',{y:-200,duration:10},"<")
   .to('.stars',{y:0,duration:30},110)
   .to(camera.position,{z:100,duration:8},102)
   .to(camera.position,{z:150,duration:30},">-1")
   .to(camera.position,{z:2000,duration:2},135)
   .to('canvas',{opacity:0},">-1")
   .to('.background',{opacity:0,duration:1},">")
   .to('.ending',{opacity:1,duration:0.1},137)
   ;
   gsap.to("#play", {opacity: 0,duration:1});
   gsap.to(".disclaimer", {opacity: 0,duration:1});
};


// audio pieces that are timed and embedded in onclick event button
var audio_xwing = new Audio('audio/XWing flyby 5.mp3');

function xwing(){
  
  setTimeout(function(){
    audio_xwing.play();
  }, 102000);
};

var audio_laser = new Audio('audio/sw_laser.mp3');

function laser(){
  
  setTimeout(function(){
    audio_laser.play();
  }, 108000);
};


var audio_hyperspace = new Audio('audio/Jump to lightspeed.mp3');

var hyperspace = function(){
 
  setTimeout(function(){
    audio_hyperspace.play();
  }, 130000);
};

var audio = new Audio('audio/swmain2.ogg');

var playAudio = function(){
 
  setTimeout(function(){
    audio.play();
  }, 6500);
};

var audio_ending = new Audio('audio/sw_ending.mp3');

var ending = function(){
 
  setTimeout(function(){
    audio_ending.play();
  }, 136500);
};

// onclick event embedded in PRESS START button
var play = document.querySelector("#play");
play.addEventListener('click', runIntro);
play.addEventListener('click', playAudio);
play.addEventListener('click', xwing);
play.addEventListener('click', laser);
play.addEventListener('click', hyperspace);
play.addEventListener('click', ending);

