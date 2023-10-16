class Bullet {
    constructor(ctx, x, y0, y, h) {
        this.ctx = ctx;
        this.x = x;
        this.y0 = y0;
        this.y = y;
        this.h = h;


        this.w = 10; // Ancho del proyectil
        this.vy = 2; // Velocidad vertical (dispara hacia arriba)
    }

    draw() {
		this.ctx.beginPath()
        this.ctx.fillRect(this.x, this.y, this.w, this.h);
		this.ctx.fillStyle = 'red'
		this.ctx.closePath()
    }

    move() {
        this.y += this.vy;
    }
}
