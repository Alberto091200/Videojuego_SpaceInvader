const Game = {
    ctx: undefined,
    canvasW: undefined,
    canvasH: undefined,
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

        this.start()
    },

    start: function () {

		let frameCounter = 0

        this.intervalId = setInterval(() => {
			frameCounter++
            this.ctx.clearRect(0, 0, this.canvasW, this.canvasH);

            this.player.draw(frameCounter);
			this.player.move();
            
            this.walls.forEach(wall => wall.draw());


        }, 1000 / this.fps);
    },


};