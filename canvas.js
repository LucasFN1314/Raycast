let canvas, context = null;
let halfwidth, halfHeight;

function setCanvas(identifier) {
    canvas = getElement(identifier);
    context = canvas.getContext("2d");
}

function createCanvas(identifier, classes = null) {
    appendElement("container", createElement("canvas", identifier, classes));
    setCanvas(identifier.replace("#", ''));
    resize();
}

function resize() {
    let winSize = windowSize();
    canvas.width = winSize.width;
    canvas.height = winSize.height;

    halfwidth = winSize.width/2;
    halfHeight = winSize.height/2;
}

function drawRect(properties) {
    context.fillStyle = properties.color;
    context.fillRect(properties.x, properties.y, properties.width, properties.height);
}

function drawCircle() {

}

function drawText(properties) {
    context.fillStyle = properties.color;
    context.font = properties.font;
    context.fillText(properties.text, properties.x, properties.y);
}

function clear() {
    drawRect(
        {
            color: "black",
            x: 0,
            y: 0,
            width: canvas.width,
            height: canvas.height
        });
}