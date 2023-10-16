class Player {
	constructor(ctx, canvasW, canvasH, keys) {
		this.ctx = ctx
		this.canvasW = canvasW
		this.canvasH = canvasH
		this.keys = keys

		this.img = new Image()
		this.img.src = 'assets/Player.png'

		this.img.frameIndex = 0
		this.img.frames = 1

		this.x = canvasW * 0.53
		this.y = canvasH * 0.77

		this.vx = 3

		this.w = 25
		this.h = 20

        this.bullets = []

		this.actions = {
			RIGHT: false,
			LEFT: false,
		}

        

		this.setControls()
	}

	setControls() {
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

        this.bullets = this.bullets.filter(
			(bullet) => bullet.y - bullet.radius < this.canvasW
		)

		this.bullets.forEach((bullet) => {
			bullet.draw()
			bullet.move()
		})
	}

    shot() {
        const y0 = this.y;

        this.bullets.push(new Bullet(this.ctx, this.x + this.w / 2, y0, this.y, this.h));
	}
	
    move() {
  
        const leftLimit = this.canvasW * 0.25;
       
        const rightLimit = this.canvasW * 0.85;
    
        if (this.actions.RIGHT && this.x + this.vx + this.w < rightLimit) {
            this.x += this.vx;
        }
        if (this.actions.LEFT && this.x - this.vx > leftLimit) {
            this.x -= this.vx;
        }
    }
    

}