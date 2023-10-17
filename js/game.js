const Game = {
    ctx: undefined,
    canvasW: undefined,
    canvasH: undefined,
    scoreboard: ScoreBoard,
    fps: 60,
    keys: {
        RIGHT: 'KeyD',
        LEFT: 'KeyA',
        SHOT: 'KeyL',

    },

    walls:[],


    init: function () {
        console.log('Test');
        const canvas = document.querySelector('canvas');
        this.ctx = canvas.getContext('2d');

        this.canvasW = canvas.width;
        this.canvasH = canvas.height;

        const wallWidth = 50;
        const wallHeight = 50;

        this.walls.push(new Wall(Game.ctx, 140, 480 - wallHeight, wallWidth, wallHeight));
        this.walls.push(new Wall(Game.ctx, 250, 480 - wallHeight, wallWidth, wallHeight));
        this.walls.push(new Wall(Game.ctx, 350, 480 - wallHeight, wallWidth, wallHeight));


  

       

        this.reset()
    },


    reset: function () {
        console.log('Reset');

        this.player = new Player(this.ctx, this.canvasW, this.canvasH, this.keys);

        this.obstacles = []

        this.score = 0
        this.scoreboard.init(this.ctx)

        this.start()
    },


/*     start: function () {

		let frameCounter = 0

        this.intervalId = setInterval(() => {
			frameCounter++
            this.ctx.clearRect(0, 0, this.canvasW, this.canvasH);

            this.player.draw(frameCounter);
			this.player.move();


            console.log(this.player.bullets.length)
            
            this.player.bullets.forEach((bullet) => {
                bullet.draw()
                bullet.move()
            })
             
            this.walls.forEach(wall => wall.draw());


        }, 1000 / this.fps); 
    },*/



    start: function () {
		// loop de render

		this.frameCounter = 0

		this.intervalId = setInterval(() => {
			this.clear()

			this.frameCounter++

			this.score += 0.03
			// this.bso.playbackRate += 0.001
			// Se genera obstáculo cada x frames


			this.drawAll()
			this.moveAll()


		}, 1000 / this.fps)
    },



    drawAll() {
		this.player.draw(this.frameCounter)
        this.walls.forEach(wall => wall.draw());

        this.scoreboard.update(this.score)
	},

    moveAll() {
		this.player.move()
	},

    gameOver: function () {
		// para el intervalo que implementa el loop de animación
		clearInterval(this.intervalId)

		if (confirm('GAME OVER! ¿Volver a jugar?')) {
			this.reset()
		}
	},

    clear: function () {
		this.ctx.clearRect(0, 0, this.canvasW, this.canvasH)
	},
};