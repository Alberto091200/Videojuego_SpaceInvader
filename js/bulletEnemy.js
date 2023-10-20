class BulletEnemy {
	constructor(ctx, x, enemyY, enemyH) {
		this.ctx = ctx

		this.radius = 3
		this.r = this.radius
		this.x = x
		this.y = enemyY + enemyH / 2

		//this.floor = playerY0 + playerH

		this.vx = 0
		this.vy = -10

		
	}

	draw() {
		this.ctx.beginPath()
		this.ctx.fillStyle = 'red'
		this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
		this.ctx.fill()
		this.ctx.closePath()
	}

	move() {

		if (this.y + this.vy + this.radius >= this.floor) {
			this.vy *= -1
		}


		this.y += this.vy
	}
}
