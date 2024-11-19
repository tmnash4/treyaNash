let halloweenButton = document.getElementById("halloween-button");
halloweenButton.addEventListener("click", halloween)


const halloweenEmojis = ["🎃", "👻", "🕷️", "🕸️", "🍬", "🍭", "💀", "🧟", "🧙‍♀️", "🧛‍♂️", "🧛‍♀️", "👽", "☠️", "🧹", "🦇", "🕯️", "⚰️", "🧠", "👁️"];

let panValue = 0; 

let social = document.querySelector(".social-icons");
let hallo = 1;
let isHalloweenActive = false; // Flag to track Halloween mode



// Create a spooky synth in Tone.js


// Create a vibrato effect with random depth and frequency
let emojiDisplayTime = 1000;

// Connect the synth to the vibrato effect
let noo = 1
let lowP = 300;
let highP = 350;
function createEmoji() {
  const spookyPanner = new Tone.Panner(0).toDestination(); // Start centered
  const vibrato = new Tone.Vibrato({
  frequency: getRandomFloat(4, 8), // Random frequency for vibrato
  depth: getRandomFloat(0.5, 1), // Random depth for vibrato
}).connect(spookyPanner);

spookyPanner.pan.value = panValue;

const lowPassFilter = new Tone.Filter({
  frequency: 500, // Adjust the cutoff frequency as needed
  type: "lowpass", // Low-pass filter type
  rolloff: -12, // Roll-off of -12 dB/octave
}).connect(vibrato)
  let spookySynth1 = new Tone.Synth({
  oscillator: {
    type: "triangle", // Change to sine for a smoother sound
  },
  envelope: {
    attack: 0.5,
    decay: 0.3,
    sustain: 0.5,
    release: 1,
  },
}).connect(lowPassFilter)
  emojiDisplayTime = getRandomInt(200, 1000); // Random time for the emoji to stay
  const randPitch = getRandomFloat(lowP, highP) // Random pitch for the spooky synth
  setInterval(() => {
    if (noo == 1) {
      lowP = 300
      noo = 2
      console.log("noo")
    } else if (noo == 2) {
      lowP = 400;
      highP = 450;
      noo = 3
      console.log("woo")
    }  else if (noo == 3) {
      lowP = 200;
      highP = 250;
      noo = 4
    }  else if (noo == 4) {
      lowP = 200;
      highP = 550;
      noo = 5
    }  else if (noo == 5) {
      lowP = 300;
      highP = 500;
      noo = 6
    }  else if (noo == 6) {
      lowP = 200;
      highP = 201;
      noo = 7
    }  else if (noo == 7) {
      lowP = 200;
      highP = 350;
      noo = 1
    }
  }, 20000)
  const emojiIndex = Math.floor(Math.random() * halloweenEmojis.length); // Select a random emoji

  // Create the emoji
  let div = document.createElement("div");
  div.classList.add("div-class");
  div.innerHTML = halloweenEmojis[emojiIndex];
  let randomPos = getRandomInt(5, 95)
  div.style.left = `${randomPos}vw`;
  div.style.top = `${getRandomInt(10, 90)}vh`;
  div.style.transform = `scale(${getRandomFloat(0.5, 5)}) rotate(${getRandomInt(0, 360)}deg)`;
  document.body.appendChild(div);

  // Play spooky synth sound
  spookySynth1.triggerAttackRelease(randPitch, (emojiDisplayTime / 1000) - 0.1); // Start the synth sound
  panValue = (randomPos / 100) * 2 - 1; // Convert percentage to panning range
spookyPanner.pan.value = panValue
// Update panner's position
console.log(panValue)

}


function createEmojisWithRandomInterval() {
  if (!isHalloweenActive) return; // Stop if Halloween mode is not active

  const emojiCreationInterval = getRandomInt(500, 3000); // Random interval time

  setTimeout(() => {
    createEmoji(); // Create an emoji
    createEmojisWithRandomInterval(); // Recursively call to create more emojis
 
  }, emojiCreationInterval);
}

function halloween() {
  if (hallo == 1) {
    // Starting Halloween mode
    hallo = 0; // Set the hallo flag to indicate Halloween mode is active
    isHalloweenActive = true; // Set the flag to true

    createEmojisWithRandomInterval(); // Start creating emojis with random intervals

    document.body.style.backgroundColor = "black";
    social.style.backgroundColor = "black";
    social.style.color = "white";
    myName.id = "myName1";
    comp.id = "composer1";
    x.style.backgroundImage = "linear-gradient(to right, #6100b7, #ff8a07"
    y.style.background = "-webkit-linear-gradient(#6100b7, #ff8a07)";
    halloweenButton.style.border = "2px #ff8a07 solid";
    halloweenButton.style.color = "#6100b7"
    halloweenButton.style.backgroundColor = "#ffe1bc"
    halloweenButton.innerHTML = "End Halloween :'(";
    mainImg1.src = "media/bioImgs/TH1.png"
    linkArray = ["media/bioImgs/TH2.png","media/bioImgs/TH3.png","media/bioImgs/TH4.png","media/bioImgs/TH5.png","media/bioImgs/TH6.png","media/bioImgs/TH7.png","media/bioImgs/TH8.png","media/bioImgs/TH9.png","media/bioImgs/TH10.png","media/bioImgs/TH11.png", "media/bioImgs/TH10.png", "media/bioImgs/TH9.png","media/bioImgs/TH8.png","media/bioImgs/TH7.png","media/bioImgs/TH6.png","media/bioImgs/TH5.png","media/bioImgs/TH4.png","media/bioImgs/TH3.png","media/bioImgs/TH2.png","media/bioImgs/TH1.png"]
    playCrick.connect(reverb)
  } else {
    // Exiting Halloween mode
    isHalloweenActive = false; // Set the flag to false
    clearEmojis(); // Remove all div-class elements
    playCrick.disconnect(reverb)
    // playCrick.connect(mainGain)
    document.body.style.backgroundColor = "white";
    social.style.backgroundColor = "white";
    x.style.backgroundImage = "linear-gradient(to right, #3a04ba, #60d44f)"
    mainImg1.src = "media/bioImgs/T1.png"
    y.style.background = "-webkit-linear-gradient(#60d44f, #3a04ba)";
    halloweenButton.innerHTML = "Click for Halloween!";
    myName.id = "myName";
    comp.id = "composer";
    halloweenButton.style.border = "2px rgb(2, 175, 117) solid";
    halloweenButton.style.color = "rgb(54, 22, 171)"
    halloweenButton.style.backgroundColor = "rgb(214, 255, 241)"
    hallo = 1; // Reset the hallo flag
    linkArray = ["media/bioImgs/T2.png","media/bioImgs/T3.png","media/bioImgs/T4.png","media/bioImgs/T5.png","media/bioImgs/T6.png","media/bioImgs/T7.png","media/bioImgs/T8.png","media/bioImgs/T9.png","media/bioImgs/T10.png","media/bioImgs/T11.png", "media/bioImgs/T10.png", "media/bioImgs/T9.png","media/bioImgs/T8.png","media/bioImgs/T7.png","media/bioImgs/T6.png","media/bioImgs/T5.png","media/bioImgs/T4.png","media/bioImgs/T3.png","media/bioImgs/T2.png","media/bioImgs/T1.png"]

    // Stop the spooky synth when exiting Halloween mode
    // spookySynth.triggerRelease();
  }
}

// Function to clear all emojis
function clearEmojis() {
  const emojis = document.querySelectorAll('.div-class'); // Select all emojis
  console.log(`Clearing ${emojis.length} emojis`); // Log number of emojis
  emojis.forEach(emoji => emoji.remove()); // Remove each emoji from the DOM
  console.log(`Emojis cleared`); // Log after clearing
}


// #halloween-button {
//     font-family: inherit;
//     margin-top: 15px;
//     margin-bottom: -20px;
//     border: 2px rgb(2, 175, 117) solid;
//     color: rgb(54, 22, 171);
//     background-color: rgb(214, 255, 241)
//   }
//   #halloween-button:hover {
//     background-color: white;
 
//   }

  