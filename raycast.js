class Raycast {
    constructor() {
        /*
        this.MAP_SIZE = 16;
        this.MAP_SCALE = 10; // || Escalado de cada punto del mapa
        this.MAP_SPEED = (this.MAP_SCALE / 2) / this.MAP_SCALE;
        this.MAP_RANGE = this.MAP_SIZE * this.MAP_SCALE;*/

        this.MAP_X_OFFSET = 0;
        this.MAP_Y_OFFSET = 0;

        this.TILES_COLORS = {
            0: '#aaa',
            1: '#555'
        };

        

        this.player = new Player({
            x: MAP_SCALE *3 - MAP_SCALE/2 + .5, 
            y: MAP_SCALE *10 + MAP_SCALE/2 + .5,
            playerAngle: 0, 
            rotationSpeed: .1,
            playerSpeed: MAP_SPEED * 2
        });
        this.minimapPlayer = {x: this.MAP_X_OFFSET + this.player.x, y: this.MAP_Y_OFFSET + this.player.y};


    }
    render() {
        this.minimap();
        this.player.render();
    }
    update() {
        this.player.update();
        this.minimapPlayer = {x: this.MAP_X_OFFSET + this.player.x, y: this.MAP_Y_OFFSET + this.player.y};
    }

    minimap() {
        for (let row = 0; row < MAP_SIZE; row++) {
            for (let col = 0; col < MAP_SIZE; col++) {
                let tile = row * MAP_SIZE + col;
                drawRect({
                    color: this.tileColor(MAP[tile]),
                    x: col * MAP_SCALE,
                    y: row * MAP_SCALE,
                    width: MAP_SCALE,
                    height: MAP_SCALE
                });
                drawRect({
                    color: 'black',
                    x: col * MAP_SCALE,
                    y: row * MAP_SCALE,
                    width: 1,
                    height: MAP_SCALE
                });
                drawRect({
                    color: 'black',
                    x: col * MAP_SCALE,
                    y: row * MAP_SCALE,
                    width: MAP_SCALE,
                    height: 1
                });
            }
        }
        // || Player
        drawCircle({
            color: 'red',
            x: this.minimapPlayer.x,
            y: this.minimapPlayer.y,
            radius:4,
            startangle: 0,
            endangle: Math.PI*2
        });
        // || Player Angle
        drawLine({
            color: 'Red',
            width: 1,
            moveToX: this.minimapPlayer.x,
            moveToY: this.minimapPlayer.y,
            lineToX: this.minimapPlayer.x + Math.sin(this.player.playerAngle) * 20,
            lineToY: this.minimapPlayer.y + Math.cos(this.player.playerAngle) * 20
        });
    }

    tileColor(index) {
        return this.TILES_COLORS[index] ??= "white";
    }
}