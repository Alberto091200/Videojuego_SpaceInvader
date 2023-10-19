class Wall {
    constructor(ctx, x, y, width, height, lives) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.w = this.width;
        this.h = this.height;
        this.image = new Image();
        this.image.src = 'assets/Muro.png';
        this.lives = lives;
    }


    draw() {
        this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}
