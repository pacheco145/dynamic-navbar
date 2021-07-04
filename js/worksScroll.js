var cover = $(".cover");
var coverHeading = $(".cover__title");
var workTitleToWhite = $(".cover__title--toWhite");
var textOverflow = $(".text-overflow");
var faja = $(".cover__transparent");

// SET INIT CSS
textOverflow.css({ overflow: "hidden" });
cover.css({ position: "fixed" });

// FIXED MEASURES
var windowHeight = window.innerHeight;
var textOverflowHeight = textOverflow.css("height");
textOverflowHeight = Number(textOverflowHeight.split("px")[0]);
// if (textOverflowHeight < 160) textOverflowHeight = 170
var percentHeightTxtCover = textOverflowHeight / window.innerHeight;

// SCROLL RELATED MEASURES
$(window).scroll(function (e) {
    var newScroll = $(document).scrollTop();
    var coverHeight = windowHeight - newScroll;
    setCover(coverHeight)
    setParagraph(coverHeight, newScroll)
    setHeadingColor(coverHeight, newScroll)
    setHeadingSize(newScroll)
    setFaja(newScroll)
});

const setCover = (coverHeight) => {
    if (coverHeight > 60) cover.css({ height: coverHeight });
    else cover.css({ position: "fixed", height: "60px", top: "0px" });
}

const setParagraph = (coverHeight, newScroll) => {
    var textOverflowNewHeight = (coverHeight - 60) * (percentHeightTxtCover) ;
    var opacityParagraph = newScroll / (250 - windowHeight) + 1;
    opacityParagraph = opacityParagraph.toFixed(2);
    
    if (coverHeight > 60)  textOverflow.css({ height: textOverflowNewHeight, opacity: opacityParagraph});
    else textOverflow.css({ height: 0, opacity: 0 });
} 

const setHeadingColor = (coverHeight, newScroll) => {
    // y = (510 / windowHeight) * newScroll - 127.5
    let color = (510 / windowHeight) * newScroll - 128
    if (color > 255) color = 255
    let rgbValues = `rgb(${color},${color},${color})`;

    if (coverHeight > 90) workTitleToWhite.css({ color: rgbValues });
}

const setHeadingSize = (newScroll) => {
    var fontSize = (12 * newScroll) / (60 - windowHeight) + 30;
    if (fontSize >= 28) coverHeading.css({ "font-size": fontSize })
	else coverHeading.css({ "font-size": "28px" })
}

const setFaja = (newScroll) => {
    var opacityFaja = newScroll / (250 - windowHeight) + 1;
    opacityFaja = opacityFaja.toFixed(2);
    if (opacityFaja >= 0) faja.css({ opacity: opacityFaja })
    else faja.css({ opacity: 0 })
}