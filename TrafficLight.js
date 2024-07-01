const button = document.getElementById("btn")
const redSig = document.getElementById("red-sig")
const yellowSig = document.getElementById("yellow-sig")
const greenSig = document.getElementById("green-sig")
const colour = document.getElementsByClassName("light")
let trafficLight = "red";

button.addEventListener("click", light)

function light(e) {
    if (button.innerText.includes('On')) {
        button.innerText = "Turn Off"
        button.style.backgroundColor = "red"
        button.style.color = "white"
        button.style.fontWeight = "bold"
        color();
        signalInterval = setInterval(color, 3000)
    }
    else {
        button.innerText = "Turn On"
        button.style.backgroundColor = "greenyellow"
        button.style.color = "black"
        button.style.fontWeight = "bold"
        redSig.style.backgroundColor = "black"
        yellowSig.style.backgroundColor = "black"
        greenSig.style.backgroundColor = "black"
        clearInterval(signalInterval)
        trafficLight = "red";
    }
}


function color() {
    console.log(trafficLight);
    redSig.style.backgroundColor = "black";
    greenSig.style.backgroundColor = "black";
    yellowSig.style.backgroundColor = "black";
    if(trafficLight === "red") {
        redSig.style.backgroundColor = "red";
        trafficLight = "yellow";
    }
    else if(trafficLight === "yellow"){
        yellowSig.style.backgroundColor = "yellow";
        trafficLight = "green";
    }
    else if(trafficLight === "green") {
        greenSig.style.backgroundColor = "green";
        trafficLight = "red";
    }
}