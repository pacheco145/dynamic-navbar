// Personalize this measures as you want:
let initialFontSize = 30;
let finalFontSize = 24;
let initCoverHeight = window.innerHeight;
let navHeight = 60;
const finalHeadingColor = {
    r: 255,
    g: 255,
    b: 255,
}
const initialHeadingColor = {
    r: 71,
    g: 64,
    b: 86,
}


// Changes related to responsive window size
if (window.innerWidth < 600) {
    initialFontSize = 26
    finalFontSize = 20
}


// Choose elements you want to change dynamically
var cover = document.querySelector(".cover");
var coverHeading = document.querySelector(".cover__title");
var overflowElem = document.querySelector(".cover__overflow");
var transparentElem = document.querySelector(".cover__transparent");







// Don't change below this line

// FIXED MEASURES
var windowHeight = window.innerHeight;
var initOverflowHeight = getComputedStyle(overflowElem).height
initOverflowHeight = Number(initOverflowHeight.split("px")[0]);
var percentHeightTxtCover = initOverflowHeight / window.innerHeight;



window.addEventListener('scroll', function (e) {
    // console.log(e)
    setElements()
});

const setElements = () => {
    
    var newScroll = window.pageYOffset

    setCover(newScroll)
    setParagraph(newScroll)
    setHeadingColor(newScroll)
    setHeadingSize(newScroll)
    setTransparentElem(newScroll)
}

const setCover = (newScroll) => {
    let coverHeight = (navHeight - initCoverHeight) * newScroll / windowHeight + initCoverHeight
    if (coverHeight > navHeight) cover.style.height = `${coverHeight}px`;
    else cover.style.height = `${navHeight}px`;
}

const setParagraph = (newScroll) => {
    let overflowElemHeight = (- initOverflowHeight) * 2 * newScroll / initCoverHeight + initOverflowHeight;
    var overflowElemOpacity = newScroll / (250 - windowHeight) + 1;
    overflowElemOpacity = overflowElemOpacity.toFixed(2);
    
    if (newScroll < initCoverHeight)  {
        overflowElem.style.height = `${overflowElemHeight}px`
        overflowElem.style.opacity = `${overflowElemOpacity}`
    }
    else {
        overflowElem.style.height = 0
        overflowElem.style.opacity = 0
    }
} 

const setHeadingColor = (newScroll) => {
    let colorR = setRGBValue(newScroll, initialHeadingColor.r, finalHeadingColor.r)
    let colorG = setRGBValue(newScroll, initialHeadingColor.g, finalHeadingColor.g)
    let colorB = setRGBValue(newScroll, initialHeadingColor.b, finalHeadingColor.b)
    // console.log(colorR, colorG, colorB)
    let rgbValues = `rgb(${colorR},${colorG},${colorB})`;
    coverHeading.style.color = rgbValues;
}


const setRGBValue = (newScroll, initialColor, finalColor) => {
    let rgbToReturn = (2 * (finalColor - initialColor) * newScroll) / windowHeight + initialColor
    let reachesFinalColor = (rgbToReturn > finalColor && finalColor > initialColor) || (rgbToReturn < finalColor && finalColor < initialColor)
    if (reachesFinalColor) rgbToReturn = finalColor
    return rgbToReturn
}


const setHeadingSize = (newScroll) => {
    
    let fontSize = (2 * (finalFontSize - initialFontSize) * newScroll) / windowHeight + initialFontSize
    let reachesFinalSize = (fontSize > finalFontSize && finalFontSize > initialFontSize) || (fontSize < finalFontSize && finalFontSize < initialFontSize)
    if (reachesFinalSize) fontSize = finalFontSize
    coverHeading.style.fontSize = `${fontSize}px` 
    
}

const setTransparentElem = (newScroll) => {
    // To give initial or final opacity different from 0 or 1 better use color-opacity
    var opacityTransparentElem = newScroll / (250 - windowHeight) + 1;
    opacityTransparentElem = opacityTransparentElem.toFixed(2);
    if (opacityTransparentElem >= 0) transparentElem.style.opacity = opacityTransparentElem
    else transparentElem.style.opacity = 0
}

document.onload = setElements()