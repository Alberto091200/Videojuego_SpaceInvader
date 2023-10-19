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
    lives :5,

    init: function () {
        console.log('Test');
        const canvas = document.querySelector('canvas');
        this.ctx = canvas.getContext('2d');

        this.canvasW = canvas.width;
        this.canvasH = canvas.height;

        const wallWidth = 60;
        const wallHeight = 35;
   


        this.walls.push(new Wall(Game.ctx, 40, 375 - wallHeight, wallWidth, wallHeight, this.lives));
        this.walls.push(new Wall(Game.ctx, 180, 375 - wallHeight, wallWidth, wallHeight, this.lives));
        this.walls.push(new Wall(Game.ctx, 330, 375 - wallHeight, wallWidth, wallHeight, this.lives));
        this.walls.push(new Wall(Game.ctx, 465, 375 - wallHeight, wallWidth, wallHeight, this.lives));

        this.reset()
    },


    reset: function () {
        console.log('Reset');

        this.player = new Player(this.ctx, this.canvasW, this.canvasH, this.keys);

 

        this.score = 0
        this.scoreboard.init(this.ctx)

        this.start()
    },

    start: function () {

		this.frameCounter = 0

		this.intervalId = setInterval(() => {
			this.clear()

			this.frameCounter++

			this.score += 0.03

			this.drawAll()
			this.moveAll()

            
            this.Collision()
            


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

    clear: function () {
		this.ctx.clearRect(0, 0, this.canvasW, this.canvasH)
	},

    // reduceLife() {
    //     this.lives -= 1 ;

    //     if(this.lives <= 0){
    //     this.walls = this.walls.filter((w) => w !== this.wall)
    //     }
    //     console.log(this.lives)
    // },

    Collision:function(){
        return this.walls.some((wall) => this.player.bullets.some((bullet) => {

            const Collision = 
            bullet.x - bullet.radius < wall.x + wall.w &&
            bullet.x + bullet.radius > wall.x &&
            bullet.y + bullet.radius > wall.y &&
            bullet.y - bullet.radius < wall.y + wall.h

            if (Collision) {
                // this.reduceLife()
                wall.lives -= 1
                this.player.bullets = this.player.bullets.filter ((b) => b !== bullet)


   
                if (wall.lives <= 0) {
                    this.walls = this.walls.filter((w) => w !== wall)
                }



            }
          
          
          
       

        })
    )},

    





}