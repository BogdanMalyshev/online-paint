import Brush from "./Brush";

export default class Eraser extends Brush {
    constructor(canvas) {
        super(canvas);
        this.canvasListen()
        this.prevColor = this.ctx.strokeStyle
    }

    canvasListen() {
        this.canvas.onmousedown = (e) => {
            this.ctx.strokeStyle = "#ffffff"
            this.mouseDownHandler(e)
        }
        this.canvas.onmouseup = (e) => {
            this.ctx.strokeStyle = this.prevColor
            this.mouseUpHandler(e)
        }
    }

    draw(x, y) {
        this.ctx.lineTo(x, y)
        this.ctx.stroke()
    }
}