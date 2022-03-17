let mouseMoved = false;
console.log("hi");
//window.open("steam://rungameid/386940","self");
document.onmousedown = function() {
    if(!mouseMoved){
        window.open("steam://rungameid/386940");
        mouseMoved = true;
    }
}