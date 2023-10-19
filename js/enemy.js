class Enemy {
	constructor(ctx, x, y, width, height, spriteSrc, life, speed, canShoot) {
		this.ctx = ctx;
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.w = this.width;
        this.h = this.height;
		this.sprite = new Image();
		this.sprite.src = spriteSrc;
		this.life = life;
		this.speed = speed;
		this.canShoot = canShoot;
		this.bullets = [];
	}

	draw() {
		// Dibuja al enemigo con su sprite
		this.ctx.drawImage(this.sprite, this.x, this.y, this.width, this.height);
	}
}

class Alien1 extends Enemy {
	constructor(ctx, x, y) {
		super(ctx, x, y, 50, 20, 'assets/Alien1.png', 1, 1, true); // Aguanta 1 bala, dispara
	}
}

class Alien2 extends Enemy {
	constructor(ctx, x, y) {
		super(ctx, x, y, 20, 20, 'assets/Alien2.png', 1, 1, false); // Aguanta 1 bala, no dispara
	}
}

class Alien3 extends Enemy {
	constructor(ctx, x, y) {
		super(ctx, x, y, 20, 20, 'assets/Alien3.png', 2, 1, false); // Aguanta 2 balas, no dispara
	}
}

