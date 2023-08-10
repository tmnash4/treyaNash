async function startAudio() {  //This code starts the audio 
  await Tone.start()
  console.log("ready")
}
let body = document.querySelector("body")


let mainGain = new Tone.Gain(0).toDestination()
// mainGain.gain = 0

let isPlaying = false

let oneLonelyCricket = new Tone.Buffer("media/OneLonelyCricket.wav");
let playCrick = new Tone.Player(oneLonelyCricket);
playCrick.connect(mainGain);
playCrick.loop = true;


// var player = new Tone.Player("data/audio/singingbird_audio.mp3").toMaster();
// var whale = new Tone.Player("data/audio/whale.mp3").toMaster();

// sync the Players to the Transport like this
playCrick.sync().start(0);
playCrick.sync().start(0);

// playCrick.volume.value = -10;
// playCrick.volume.value = 5;


let x = document.getElementById("myTopnav");
let y = document.querySelector(".sidenav")


function myFunction() {
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }



  let mainImg = document.querySelector("#mainPic");
  let button = document.querySelector("#outsideDiv")
  let num = 1



  
  mainImg.onmouseover = () => {
    mainImg.src = "media/Trey.jpg"
    if (playCrick.state == "stopped") {
      Tone.Transport.start();
      mainGain.gain.rampTo(0.1, 3);
    }
  }
 


// mainImg.onclick = () => {
//   playCricket()
// }


mainImg.onmouseout = () => {
  mainImg.src = "media/Treya_1.jpg"
  if (playCrick.state == "started") {
      Tone.Transport.pause();
      mainGain.gain = 0
  }
  
}


let myName = document.getElementById("myName");
let comp = document.getElementById("composer")

if (window.screen.width >= 1024) {

myName.onmouseover = () => {
  // myName.style.-webkit-background-clip: text;
  // myName.style.color = "-webkit-linear-gradient(#60d44f, #3a04ba)";
  myName.style.fontStyle = "italic"
}

myName.onmouseout = () => {
  // myName.style.color = "-webkit-linear-gradient(#3a04ba, #60d44f)";
  myName.style.fontStyle = "normal"
}

// comp.onmouseover = () => {
//   comp.style.on
// }

}
if (window.screen.width <= 1024) {
  mainImg.style.width = "80vw";
  console.log(window.screen.width)

  myName.ontouchstart = () => {
    // myName.style.-webkit-background-clip: text;
    // myName.style.color = "-webkit-linear-gradient(#60d44f, #3a04ba)";
    myName.style.fontStyle = "italic"
  }
  
  myName.ontouchend = () => {
    // myName.style.color = "-webkit-linear-gradient(#3a04ba, #60d44f)";
    myName.style.fontStyle = "normal"
  }
  

}

// console.log(window.screen.width)
// console.log(window.screen.height)


console.log(x.value)

let main = document.getElementById("main")
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  console.log("hellooo");
  /* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
  x.style.visibility = "hidden";
  y.style.visibility = "visible";
  main.style.visibility = "visible";

  //  document.createElement("p");
  // some code.. 
  } else {
    console.log("who")
    x.style.visibility = "visible";
    y.style.visibility = "hidden";
    main.style.visibility = "hidden"
  }

  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }

  function backToWorksFunction() {
    if (document.referrer == "http://127.0.0.1:8500/works.html") {
      history.back()
    } else {
      window.location = "http://127.0.0.1:8500/works.html"
    }
  }

  function backToRnp() {
    if (document.referrer == "http://127.0.0.1:8500/rnp.html") {
      history.back()
    } else {
      window.location = "http://127.0.0.1:8500/rnp.html"
    }
  }