// Personalize this measures as you want:
const initialFontSize = 30;
const finalFontSize = 28;
const initCoverHeight = window.innerHeight;
const navHeight = 60;
const finalHeadingColor = {
    r: 255,
    g: 201,
    b: 112,
}
const initialHeadingColor = {
    r: 69,
    g: 91,
    b: 153,
}

// Choose elements you want to change dynamically
var cover = document.querySelector(".cover");
var coverHeading = document.querySelector(".cover__title");
var workTitleToWhite = document.querySelector(".cover__title--toWhite");
var textOverflow = document.querySelector(".text-overflow");
var faja = document.querySelector(".cover__transparent");


// Don't change below this line

// FIXED MEASURES
var windowHeight = window.innerHeight;
var initOverflowHeight = getComputedStyle(textOverflow).height
initOverflowHeight = Number(initOverflowHeight.split("px")[0]);
var percentHeightTxtCover = initOverflowHeight / window.innerHeight;



window.addEventListener('scroll', function (e) {
    // console.log(percentHeightTxtCover)

    var newScroll = window.pageYOffset
    // var coverHeight = windowHeight - newScroll;
    setCover(newScroll)
    setParagraph(newScroll)
    setHeadingColor(newScroll)
    setHeadingSize(newScroll)
    setFaja(newScroll)
});

const setCover = (newScroll) => {
    let coverHeight = (navHeight - initCoverHeight) * newScroll / windowHeight + initCoverHeight
    if (coverHeight > navHeight) cover.style.height = `${coverHeight}px`;
    else cover.style.height = `${navHeight}px`;
}

const setParagraph = (newScroll) => {
    let textOverflowHeight = (- initOverflowHeight) * 2 * newScroll / initCoverHeight + initOverflowHeight;
    var textOverflowOpacity = newScroll / (250 - windowHeight) + 1;
    textOverflowOpacity = textOverflowOpacity.toFixed(2);
    
    if (newScroll < initCoverHeight)  {
        textOverflow.style.height = `${textOverflowHeight}px`
        textOverflow.style.opacity = `${textOverflowOpacity}`
    }
    else {
        textOverflow.style.height = 0
        textOverflow.style.opacity = 0
    }
} 

const setHeadingColor = (newScroll) => {
    let colorR = setRGBValue(newScroll, initialHeadingColor.r, finalHeadingColor.r)
    let colorG = setRGBValue(newScroll, initialHeadingColor.g, finalHeadingColor.g)
    let colorB = setRGBValue(newScroll, initialHeadingColor.b, finalHeadingColor.b)
    // console.log(colorR, colorG, colorB)
    let rgbValues = `rgb(${colorR},${colorG},${colorB})`;
    workTitleToWhite.style.color = rgbValues;
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

const setFaja = (newScroll) => {
    var opacityFaja = newScroll / (250 - windowHeight) + 1;
    opacityFaja = opacityFaja.toFixed(2);
    if (opacityFaja >= 0) faja.style.opacity = opacityFaja
    else faja.style.opacity = 0
}



const initialSettings = () => {
    setHeadingColor(0)
    setHeadingSize(0)
}

document.onload = initialSettings()