'use strict';

window.onload = function() {
    let viewport = document.querySelector('html');
    window.addEventListener("wheel", function (e) {
        let delta = e.deltaY > 0 ? 100 : -100;
        console.log(delta)
        viewport.scrollLeft += delta;
    });
}
