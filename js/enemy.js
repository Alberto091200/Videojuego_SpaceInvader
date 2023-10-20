class Enemy {
	constructor(ctx, x, y, width, height, spriteSrc,speed, canShoot, enemy1lives) {
		this.ctx = ctx;
		this.x = x;
		this.y = y;
		this.sprite = new Image();
		this.sprite.src = spriteSrc;
		this.speed = speed;
		this.canShoot = canShoot;


		this.img = new Image();
		this.img.src = spriteSrc;
		this.img.frameIndex = 0;
		this.img.frames = 2;

		this.width = width;
		this.height = height;
		this.w = this.width;
		this.h = this.height;
		this.enemy1lives = enemy1lives


		this.bulletsEnemy = [];
	}

	animateSprite(frameCounter) {
		if (frameCounter % 20 === 0) {
			this.img.frameIndex++;

			if (this.img.frameIndex >= this.img.frames) {
				this.img.frameIndex = 0;
			}
		}
	}

	

}




class Alien1 extends Enemy {
	constructor(ctx, x, y, enemy1lives) {
		super(ctx, x, y, 25, 15, 'assets/Alien1.png', 1, enemy1lives) // Aguanta 1 bala, dispara
	}

	draw(frameCounter) {
		this.ctx.drawImage(
			this.img,
			this.img.frameIndex * (207 / this.img.frames),
			0,
			this.img.width / this.img.frames,
			this.img.height,
			this.x,
			this.y,
			this.width,
			this.height
		);
		this.animateSprite(frameCounter);

	}

	// alien1Shot1Bullet() {
	// 	this.bulletsEnemy.push(new BulletEnemy(this.ctx, this.x, this.y, this.w, this.h))
	// }
}




class Alien2 extends Enemy {
	constructor(ctx, x, y) {
		super(ctx, x, y, 21, 15, 'assets/Alien2.png', 1, 1, false); // Aguanta 1 bala, no dispara
	}

	draw(frameCounter) {
		this.ctx.drawImage(
			this.img,
			this.img.frameIndex * (this.img.width / this.img.frames),
			0,
			this.img.width / this.img.frames,
			this.img.height,
			this.x,
			this.y,
			this.width,
			this.height
		);

		this.animateSprite(frameCounter);
	}
}





class Alien3 extends Enemy {
	constructor(ctx, x, y) {
		super(ctx, x, y, 25, 15, 'assets/Alien3.png', 2, 1, false); // Aguanta 2 balas, no dispara
	}

	draw(frameCounter) {
		this.ctx.drawImage(
			this.img,
			this.img.frameIndex * (222 / this.img.frames),
			0,
			this.img.width / this.img.frames,
			this.img.height,
			this.x,
			this.y,
			this.width,
			this.height
		);

		this.animateSprite(frameCounter);
	}
}
