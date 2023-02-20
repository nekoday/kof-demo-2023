import { AcGameObject } from "/static/js/ac_game_object/base.js";
import { Controller } from "/static/js/controller/base.js";

export class GameMap extends AcGameObject {
    constructor(root) {
        super();

        this.root = root;
        this.$canvas = $(
            '<canvas width="1280px" height="720px" tabindex=0></canvas>'
        );
        this.ctx = this.$canvas[0].getContext("2d");
        this.root.$kof.append(this.$canvas);
        this.$canvas.focus();

        this.controller = new Controller(this.$canvas);

        this.root.$kof.append(
            $(
                `<div class="kof-head">
                    <div class="kof-head-hp-0"><div></div></div>
                    <div class="kof-head-timer">60</div>
                    <div class="kof-head-hp-1"><div></div></div>
                </div>`
            )
        );
    }

    start() {}

    update() {
        this.render();
    }

    render() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        // this.ctx.fillStyle = 'black';
        // this.ctx.fillRect(0, 0, this.$canvas.width(), this.$canvas.height());
    }
}
