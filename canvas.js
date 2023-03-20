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

function resize(scale = 1) {
    let winSize = windowSize();
    canvas.width = winSize.width * scale;
    canvas.height = winSize.height * scale;

    halfwidth = winSize.width/2;
    halfHeight = winSize.height/2;
}

function drawRect(properties) {
    context.fillStyle = properties.color;
    context.fillRect(properties.x, properties.y, properties.width, properties.height);
}

function drawCircle(properties) {
    context.fillStyle = properties.color;
    context.beginPath();
    context.arc(properties.x, properties.y, properties.radius, properties.startangle, properties.endangle);
    context.fill();
}

function drawLine(properties) {
    context.strokeStyle = properties.color;
    context.lineWidth = properties.width;
    context.beginPath();
    context.moveTo(properties.moveToX, properties.moveToY);
    context.lineTo(properties.lineToX, properties.lineToY);
    context.stroke();

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