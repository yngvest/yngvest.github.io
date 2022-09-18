'use strict';

window.onload = function() {
    let viewport = document.querySelector('html');
    let scroll = 0;
    window.addEventListener("wheel", function (e) {
        let d = e.deltaY + e.deltaX;
        scroll = clamp(scroll + d, -99999, 0)
        viewport.style.transform = 'translateX(' + scroll + 'px)';
    });
}

function clamp(x, min, max) {
    if(x >= min && x <= max) {
        return x
    }
    return x > max ? max : min;
}