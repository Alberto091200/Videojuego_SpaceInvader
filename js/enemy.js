class Enemy {
	constructor(ctx, x, y, width, height, spriteSrc,speed, canShoot, enemy1lives, enemy2lives, enemy3lives) {
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
		this.enemy2lives = enemy2lives
		this.enemy3lives = enemy3lives


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
		super(ctx, x, y, 25, 15, 'assets/Alien1.png', 1,null, enemy1lives) // Aguanta 1 bala, dispara
		this.bulletsEnemy = [];
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

		if (Math.random() < 0.005) {
			this.alien1Shot1Bullet()
		}

		this.bulletsEnemy.forEach((bulletEnemy) => {
			bulletEnemy.draw()
			bulletEnemy.move()
		})

	}

	 alien1Shot1Bullet() {
		this.bulletsEnemy.push(new BulletEnemy(this.ctx, this.x +11, this.y +5, this.h));
	}
	
	
}

class Alien2 extends Enemy {
	constructor(ctx, x, y, enemy2lives) {
		super(ctx, x, y, 21, 15, 'assets/Alien2.png', 1, null, null, enemy2lives); // Aguanta 1 bala, no dispara
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
}

class Alien3 extends Enemy {
	constructor(ctx, x, y, enemy3lives) {
		super(ctx, x, y, 25, 15, 'assets/Alien3.png', 2,null, null, null, enemy3lives); // Aguanta 2 balas, no dispara
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
