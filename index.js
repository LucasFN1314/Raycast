let fps, aps, fpsCounter = 0;

let MS_POR_SEGUNDO = 1000;
let APS_OBJETIVO = 60;
let MS_POR_ACTUALIZACION = MS_POR_SEGUNDO / APS_OBJETIVO;

let ref_act = performance.now();
let ref_cont = performance.now();

let tiempo_transcurrido = 0;
let delta = 0;

function init() {
    fps = 0;
    aps = 0;
    lastTime = performance.now();

    createCanvas("main_canvas");
    window.onresize = () => {
        resize();
    };

    setInterval(gameLoop, APS_OBJETIVO);
}

function gameLoop() {

    let inicioBucle = performance.now();
    tiempo_transcurrido = inicioBucle - ref_act;
    ref_act = inicioBucle;

    delta += tiempo_transcurrido / MS_POR_ACTUALIZACION;

    while (delta>= 1) {
        update();
        render();
        delta--;
    }

    if(performance.now() - ref_cont > MS_POR_SEGUNDO) {
        fpsCounter = fps;
        ref_cont = performance.now();
        fps = 0;
        aps = 0;
    }
}

function update() {
    aps++;
}

function render() {
    clear();

    fps++;
    drawText({color: "white", x: 30, y: 30, font: '16px Monospace', text: `FPS: ${fpsCounter}`});
}

window.onload = init;