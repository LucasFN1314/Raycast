class Raycast {
    constructor() {
        this.MAP_SIZE = 16;
        this.MAP_SCALE = 10; // || Escalado de cada punto del mapa
        this.MAP_SPEED = (this.MAP_SCALE / 2) / this.MAP_SCALE;
        this.MAP_RANGE = this.MAP_SIZE * this.MAP_SCALE;

        this.MAP_X_OFFSET = 0;
        this.MAP_Y_OFFSET = 0;

        this.TILES_COLORS = {
            0: '#aaa',
            1: '#555'
        };

        this.MAP = [
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        ];

        this.player = new Player({
            x: this.MAP_SCALE *3 - this.MAP_SCALE/2 + .5, 
            y: this.MAP_SCALE *10 + this.MAP_SCALE/2 + .5,
            playerAngle: 0, 
            rotationSpeed: .1,
            playerSpeed: this.MAP_SPEED * 2
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
        for (let row = 0; row < this.MAP_SIZE; row++) {
            for (let col = 0; col < this.MAP_SIZE; col++) {
                let tile = row * this.MAP_SIZE + col;
                drawRect({
                    color: this.tileColor(this.MAP[tile]),
                    x: col * this.MAP_SCALE,
                    y: row * this.MAP_SCALE,
                    width: this.MAP_SCALE,
                    height: this.MAP_SCALE
                });
                drawRect({
                    color: 'black',
                    x: col * this.MAP_SCALE,
                    y: row * this.MAP_SCALE,
                    width: 1,
                    height: this.MAP_SCALE
                });
                drawRect({
                    color: 'black',
                    x: col * this.MAP_SCALE,
                    y: row * this.MAP_SCALE,
                    width: this.MAP_SCALE,
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