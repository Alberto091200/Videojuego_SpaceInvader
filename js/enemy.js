class Enemy {
	constructor(ctx, x, y, spriteSrc, life, speed, canShoot) {
		this.ctx = ctx;
		this.x = x;
		this.y = y;
		this.sprite = new Image();
		this.sprite.src = spriteSrc;
		this.life = life;
		this.speed = speed;
		this.canShoot = canShoot;
		this.bullets = [];
	}

	draw() {
		// Dibuja al enemigo con su sprite
		this.ctx.drawImage(this.sprite, this.x, this.y);
	}	
}

class Alien1 extends Enemy {
	constructor(ctx, x, y) {
		super(ctx, x, y, 'assets/Alien1.png', 1, 1, true); // Aguanta 1 bala, dispara
	}
}

class Alien2 extends Enemy {
	constructor(ctx, x, y) {
		super(ctx, x, y, 'assets/Alien2.png', 1, 1, false); // Aguanta 1 bala, no dispara
	}
}

class Alien3 extends Enemy {
	constructor(ctx, x, y) {
		super(ctx, x, y, 'assets/Alien3.png', 2, 1, false); // Aguanta 2 balas, no dispara
	}
}

