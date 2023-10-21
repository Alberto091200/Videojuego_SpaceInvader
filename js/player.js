class Player {
	constructor(ctx, canvasW, canvasH, keys) {
		this.ctx = ctx
		this.canvasW = canvasW
		this.canvasH = canvasH
		this.keys = keys
		this.shotsFired = 0;
		this.walls = this.walls;

		this.img = new Image()
		this.img.src = 'assets/Player.png'

		this.img.frameIndex = 0
		this.img.frames = 1

		this.x0 = canvasW * 0.48
		this.y0 = canvasH * 0.90

		this.x = this.x0
		this.y = this.y0

		this.vy = 0
		this.vx = 3

		this.w = 30
		this.h = 25

		this.lives = 3;
        this.bullets = []

		this.actions = {
			RIGHT: false,
			LEFT: false,
		}

		

		this.setControls()
	}

	


	setControls() {

		const shotSound = document.getElementById("shot")

		document.addEventListener('keydown', (event) => {
			switch (event.code) {
				case this.keys.RIGHT:
                    this.actions.RIGHT = true
				    console.log('Derecha')
				break

                case this.keys.LEFT:
                    this.actions.LEFT = true
                    console.log('Izquierda')
                break

                case this.keys.SHOT:
					shotSound.pause()
					shotSound.currentTime = 0
					shotSound.volume = 0.4
					shotSound.play()
					this.shot()
                    console.log('Disparo')
                break
			}
		})

		document.addEventListener('keyup', (event) => {
			switch (event.code) {
				case this.keys.RIGHT:
					this.actions.RIGHT = false
				break

                case this.keys.LEFT:
                    this.actions.LEFT = false
                break
			}
		})
	}


    draw() {
		this.ctx.drawImage(
			this.img,
			this.img.frameIndex * (this.img.width / this.img.frames), // sx
			0,
			this.img.width / this.img.frames,
			this.img.height,
			this.x,
			this.y,
			this.w,
			this.h
		)


    /*     this.bullets = this.bullets.filter(
			(bullet) => bullet.y - bullet.radius < this.canvas
		)  */

		this.bullets.forEach((bullet) => {
			bullet.draw()
			bullet.move()
		})
	}

    shot() {
		if(this.lives > 0) {
		this.bullets.push(new Bullet(this.ctx, this.x - 15 + this.w, this.y0 - 220, this.y, this.h));
		this.shotsFired++;
		}
	}

	animateSprite(frameCounter) {
		if (frameCounter % 6 === 0) {
			this.img.frameIndex++

			if (this.img.frameIndex >= this.img.frames) {
				this.img.frameIndex = 0
			}
		}
	}

    move() {
		if (this.actions.RIGHT && this.x + this.vx + this.w < this.canvasW - 30) {
			this.x += this.vx;
		}
		if (this.actions.LEFT && this.x - this.vx > 0 + 30) {
			this.x -= this.vx;
		}
	}
}