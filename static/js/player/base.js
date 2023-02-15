import {AcGameObject} from '/static/js/ac_game_object/base.js';


export class Player extends AcGameObject {
    constructor(root, info) {
        super();
        this.root = root;

        this.id = info.id;
        this.x = info.x;
        this.y = info.y;
        this.width = info.width;
        this.height = info.height;
        this.color = info.color;

        this.direction = 1;

        this.vx = 0;
        this.vy = 0;

        this.speedx = 400;  // ground move speed
        this.speedy = 1000;  // jump initial speed

        this.gravity = 50;

        this.ctx = this.root.game_map.ctx;
        this.status = 3;
        // 0: idle, 1: fromt, 2: back, 3: jump, 4: atk, 5: hit, 6: dead
    }

    start() {

    }

    move() {
        this.vy += this.gravity;

        this.x += this.vx * this.timedelta / 1000;
        this.y += this.vy * this.timedelta / 1000;

        if (this.y > 450) {
            this.y = 450;
            this.vy = 0;
        }
    }

    update() {
        this.move();

        this.render();
    }

    render() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}
