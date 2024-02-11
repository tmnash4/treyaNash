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

document.addEventListener('contextmenu', event => event.preventDefault());


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
  let mainImg1 = document.querySelector("#mainPic1");
  let button = document.querySelector("#outsideDiv")
  let num = 1

  
 


let myName = document.getElementById("myName");
let comp = document.getElementById("composer")

if (window.screen.width >= 1024) {

myName.onmouseover = () => {
  // myName.style.-webkit-background-clip: text;
  // myName.style.color = "-webkit-linear-gradient(#60d44f, #3a04ba)";
  myName.innerHTML = "Neya Trash"
}

myName.onmouseout = () => {
  // myName.style.color = "-webkit-linear-gradient(#3a04ba, #60d44f)";
  myName.innerHTML = "Treya Nash"


}
// comp.onmouseover = () => {
//   comp.style.on
// }

}

let linkArray = ["media/bioImgs/T2.png","media/bioImgs/T3.png","media/bioImgs/T4.png","media/bioImgs/T5.png","media/bioImgs/T6.png","media/bioImgs/T7.png","media/bioImgs/T8.png","media/bioImgs/T9.png","media/bioImgs/T10.png","media/bioImgs/T11.png", "media/bioImgs/T10.png", "media/bioImgs/T9.png","media/bioImgs/T8.png","media/bioImgs/T7.png","media/bioImgs/T6.png","media/bioImgs/T5.png","media/bioImgs/T4.png","media/bioImgs/T3.png","media/bioImgs/T2.png","media/bioImgs/T1.png"]
let num1 = 0;
let num2 = 0;
let num11 = 0;
let num22 = 0;
let myFunc;
let myFunc1;


if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  mainImg.style.width = "100%";
  mainImg1.style.width = "100%";
  mainImg1.style.textAlign = "center"
  console.log(window.screen.width)
  mainImg.style.touchAction = "manipulation"

  myName.ontouchstart = () => {
    // myName.style.-webkit-background-clip: text;
    // myName.style.color = "-webkit-linear-gradient(#60d44f, #3a04ba)";
    myName.innerHTML = "Neya Trash"
    

  }
  
  myName.ontouchend = () => {
    // myName.style.color = "-webkit-linear-gradient(#3a04ba, #60d44f)";
    myName.innerHTML = "Treya Nash"

  }
  mainImg.ontouchstart = () => {
    startAudio()
    //mainImg.src = "media/Trey.jpg"
    if (playCrick.state == "stopped") {
      Tone.Transport.start();
      mainGain.gain.rampTo(0.1, 3);
    }
    myFunc1 = setInterval(()=> {
      mainImg1.src = linkArray[num22]
      num22++
      console.log(num22)
      if (num22 >= linkArray.length) {
        num22 = 0
      }
      console.log("hello")
    }, 100)
  
  }
 




mainImg.ontouchend = () => {
 // mainImg.src = "media/Treya_1.jpg"
 
  if (playCrick.state == "started") {
      Tone.Transport.pause();
      mainGain.gain = 0
  }
  clearInterval(myFunc1)
  console.log("ended")
}
  
 
  

} else {
  mainImg.onmouseover = () => {
   startAudio()
   myFunc = setInterval(()=> {
      mainImg1.src = linkArray[num2]
      num2++
      console.log(num2)
      if (num2 >= linkArray.length) {
        num2 = 0
      }
    }, 100)

   

    if (playCrick.state == "stopped") {
      Tone.Transport.start();
      mainGain.gain.rampTo(0.1, 3);
    }
  }
 


// mainImg.onclick = () => {
//   playCricket()
// }


mainImg.onmouseout = () => {
  clearInterval(myFunc)
  if (playCrick.state == "started") {
      Tone.Transport.pause();
      mainGain.gain = 0
  }
  
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
    if (document.referrer == (window.location.origin + "/works.html")) {
      history.back()
    } else {
      window.location = "works.html"
    }
  }

  function backToRnp() {
    if (document.referrer == "rnp.html") {
      history.back()
    } else {
      window.location = "rnp.html"
    }
  }

