// Handles the TLDR toggle
let tldr = document.querySelector("#tldr .title");
tldr.addEventListener("click", (event) => {
    let tldrDesc = document.querySelector("#tldr .description");
    let tldrPlus = document.querySelector("#tldr .fa-plus");
    let tldrMinus = document.querySelector("#tldr .fa-minus");
    toggle(tldrDesc, 'hidden');
    toggle(tldrPlus, 'hidden');
    toggle(tldrMinus, 'hidden');
})

//VideoPlayer setup
let player = document.querySelector("#pickleball-video");

let play = document.querySelector("#play");
play.addEventListener("click", togglePlay);

let stop = document.querySelector("#stop");
stop.addEventListener("click", stopPlayer);

let mute = document.querySelector("#mute");
mute.addEventListener("click", toggleMute);

function togglePlay() {
    toggle(play, "fa-play", "fa-pause");
    if (player.paused) {
        player.play();
    } else {
        player.pause();
    }
}

function stopPlayer() {
    player.pause();
    player.currentTime = 0;
    play.classList.remove("fa-pause");
    play.classList.add("fa-play");
}

function toggleMute() {
    toggle(mute, "fa-volume-up", "fa-volume-off");
    player.muted = !player.muted;
}

// Utility functions

/**
 * 
 * @param {*} node the DOM object
 * @param {*} className the name of the class to toggle on or off
 * @param {*} switchClass An optional class that will switch places with the other class
 */
function toggle(node, className, switchClass) {
    if (node.classList.contains(className)){
        node.classList.remove(className);
        if (switchClass != undefined) {
            node.classList.add(switchClass);
        }
    } else {
        node.classList.add(className);
        if (switchClass) {
            node.classList.remove(switchClass);
        }
    }
}