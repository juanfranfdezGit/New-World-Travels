
// VARIABLES PARA EFECTO PARALLAX
let tituloParallax = document.querySelector("#parallax h2");
let avion = document.querySelector("#avion");
let skyline = document.querySelector("#skyline");
let coliseo = document.querySelector("#coliseo");
let eiffel = document.querySelector("#eiffel");
let bigBen = document.querySelector("#bigben");

// EFECTO PARALLAX
window.addEventListener("scroll", function(){
    let valor = window.scrollY;

    tituloParallax.style.bottom = -20 + valor * 0.20 + '%';
    avion.style.left = 14 + valor * 0.08 + 'vw';
    avion.style.top = 60 + valor * -0.08 + 'vh';
    avion.style.width = 8 + valor * 0.06 + 'vw';
    coliseo.style.width = 35 + valor * -0.02 + 'vw';
    eiffel.style.width = 17 + valor * -0.01 + 'vw';
    eiffel.style.left = 40 + valor * -0.01 + 'vw';
    bigBen.style.rigth = 5 + valor * -0.08 + 'vw';
    bigBen.style.width = 40 + valor * -0.02 + 'vw';
    skyline.style.width = 100 + valor * 0.02 + 'vw'
})

