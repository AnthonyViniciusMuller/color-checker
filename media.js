import { colors, getVideoCenterColor } from "./colors.js"

const utterance = new SpeechSynthesisUtterance();

const video = document.querySelector('video');
const h1 = document.querySelector('#color');
const circle = document.querySelector('#circle');
let formerColorName = "";

export const playText = (text) => {
    speechSynthesis.resume();
    
    utterance.text = text;
    utterance.rate = 1;
    speechSynthesis.speak(utterance);
}

export const startWebCam = () => {
    navigator.mediaDevices.getUserMedia({
        video: {width: 300, height: 300},
        audio: false
    }).then(stream => {
        video.srcObject = stream;
    });
}

export const startColorRecongnization = () => {
    setInterval(async () => {
        const rgbColor = getVideoCenterColor(video);
        const colorName = color2name.closest(rgbColor, colors).name;
    
        if (colorName != formerColorName) {
            formerColorName = colorName;
    
            h1.innerText = colorName;
            h1.style.color = rgbColor;
            circle.style.borderColor = rgbColor;
            document.body.style.background = rgbColor;
    
            playText(colorName);
        }
    }, 2000);
}