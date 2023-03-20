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
    }
    
    render() {

    }

    update() {
        this.xOffset = Math.sin(this.playerAngle);
        this.yOffset = Math.cos(this.playerAngle);

        this.rotate();    
        this.move();

        //console.log(keys); // 87w 83s
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
        
        this.y += this.yOffset * this.moveY * this.playerSpeed;
        this.x += this.xOffset * this.moveY * this.playerSpeed;
    }


}