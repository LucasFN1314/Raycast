class Player {
    constructor(properties = null) {
        this.attributes = ['x', 'y', 'playerAngle', 'rotationSpeed', 'playerSpeed'];
        this.attributes.map((attr) => {
            this[attr] = properties[attr];
        });

        this.moveAngle = 0;
        this.moveX = 0;
        this.moveY = 0;

        this.xOffset = 0;
        this.yOffset = 0;

        this.mapTarget = {x: 0, y: 0};
    }
    
    render() {

    }

    update() {
        this.xOffset = Math.sin(this.playerAngle);
        this.yOffset = Math.cos(this.playerAngle);

        this.collision();
        this.rotate();    
        this.move();

    }

    rotate() {
        this.moveAngle = 0;
        if(keys[65]) {this.moveAngle = +1;}
        if(keys[68]) {this.moveAngle = -1;}

        this.playerAngle += this.moveAngle * this.rotationSpeed;
    }

    move() {
        this.moveY = 0;

        if(keys[87]) this.moveY = 1;
        if(keys[83]) this.moveY = -1;
        
        if(this.moveY && MAP[this.mapTarget.y] == 0) {
            this.y += this.yOffset * this.moveY * this.playerSpeed;
        }
        if(this.moveY && MAP[this.mapTarget.x] == 0) {
            this.x += this.xOffset * this.moveY * this.playerSpeed;
        }
    }
    collision() {
        this.mapTarget.x = Math.floor(this.y / MAP_SCALE) * MAP_SIZE + Math.floor((this.x + this.xOffset * this.moveY) / MAP_SCALE);
        this.mapTarget.y = Math.floor((this.y + (this.yOffset * this.moveY)) / MAP_SCALE) * MAP_SIZE + Math.floor(this.x / MAP_SCALE);
    }

}