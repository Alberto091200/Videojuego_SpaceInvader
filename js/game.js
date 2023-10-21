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
    lives : 5,

    enemy1: [],
    enemy1lives: 1,
    
    enemy2: [],
    enemy2lives: 2,

    enemy3: [],
    enemy3lives : 3,


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

        this.enemy1.push(new Alien1(Game.ctx, 50, 50, this.enemy1lives));
        this.enemy1.push(new Alien1(Game.ctx, 75, 50, this.enemy1lives));
        this.enemy1.push(new Alien1(Game.ctx, 100, 50, this.enemy1lives));
        this.enemy1.push(new Alien1(Game.ctx, 125, 50, this.enemy1lives));
        this.enemy1.push(new Alien1(Game.ctx, 150, 50, this.enemy1lives));
        this.enemy1.push(new Alien1(Game.ctx, 175, 50, this.enemy1lives));
        this.enemy1.push(new Alien1(Game.ctx, 200, 50, this.enemy1lives));
        this.enemy1.push(new Alien1(Game.ctx, 225, 50, this.enemy1lives));


        this.enemy2.push(new Alien2(Game.ctx, 50, 80, this.enemy2lives));
        this.enemy2.push(new Alien2(Game.ctx, 75, 80, this.enemy2lives));
        this.enemy2.push(new Alien2(Game.ctx, 100, 80, this.enemy2lives));
        this.enemy2.push(new Alien2(Game.ctx, 125, 80, this.enemy2lives));
        this.enemy2.push(new Alien2(Game.ctx, 150, 80, this.enemy2lives));
        this.enemy2.push(new Alien2(Game.ctx, 175, 80, this.enemy2lives));
        this.enemy2.push(new Alien2(Game.ctx, 200, 80, this.enemy2lives));
        this.enemy2.push(new Alien2(Game.ctx, 225, 80, this.enemy2lives));


        this.enemy3.push(new Alien3(Game.ctx, 50, 110, this.enemy3lives));
        this.enemy3.push(new Alien3(Game.ctx, 75, 110, this.enemy3lives));
        this.enemy3.push(new Alien3(Game.ctx, 100, 110, this.enemy3lives));
        this.enemy3.push(new Alien3(Game.ctx, 125, 110, this.enemy3lives));
        this.enemy3.push(new Alien3(Game.ctx, 150, 110, this.enemy3lives));
        this.enemy3.push(new Alien3(Game.ctx, 175, 110, this.enemy3lives));
        this.enemy3.push(new Alien3(Game.ctx, 200, 110, this.enemy3lives));
        this.enemy3.push(new Alien3(Game.ctx, 225, 110, this.enemy3lives));

        this.enemy1Direction = true;
        this.enemy2Direction = true;

        this.enemy1Y = 50;
        this.enemy2Y = 80;
        this.enemy3Y = 110;

        this.reset()
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
            this.CollisionAlien1()
            this.CollisionAlien2()
            this.CollisionAlien3()
            this.CollisionBalaEnemyWall()
            this.Collision5()

            if (this.enemy1.length === 0 && this.enemy2.length === 0 && this.enemy3.length === 0) {
                const musicStart = document.getElementById("musicMain")
                musicStart.pause()
                const victorySound = document.getElementById("victory")
                victorySound.pause()
                victorySound.currentTime = 0
                victorySound.volume = 0.5
                victorySound.play()
                alert('¡Has ganado!');
                this.reset(); // Reinicia el juego cuando se gana
            }
            
		}, 1000 / this.fps)

       
    },

    reset: function () {
        console.log('Reset');
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
   
        this.walls = [];
        this.enemy1 = [];
        this.enemy2 = [];
        this.enemy3 = [];

        const wallWidth = 60;
        const wallHeight = 35;

        this.walls.push(new Wall(this.ctx, 40, 375 - wallHeight, wallWidth, wallHeight, this.lives));
        this.walls.push(new Wall(this.ctx, 180, 375 - wallHeight, wallWidth, wallHeight, this.lives));
        this.walls.push(new Wall(this.ctx, 330, 375 - wallHeight, wallWidth, wallHeight, this.lives));
        this.walls.push(new Wall(this.ctx, 465, 375 - wallHeight, wallWidth, wallHeight, this.lives));
    
        this.enemy1.push(new Alien1(this.ctx, 50, 50, this.enemy1lives));
        this.enemy1.push(new Alien1(this.ctx, 75, 50, this.enemy1lives));
        this.enemy1.push(new Alien1(Game.ctx, 100, 50, this.enemy1lives));
        this.enemy1.push(new Alien1(Game.ctx, 125, 50, this.enemy1lives));
        this.enemy1.push(new Alien1(Game.ctx, 150, 50, this.enemy1lives));
        this.enemy1.push(new Alien1(Game.ctx, 175, 50, this.enemy1lives));
        this.enemy1.push(new Alien1(Game.ctx, 200, 50, this.enemy1lives));
        this.enemy1.push(new Alien1(Game.ctx, 225, 50, this.enemy1lives));


        this.enemy2.push(new Alien2(Game.ctx, 50, 80, this.enemy2lives));
        this.enemy2.push(new Alien2(Game.ctx, 75, 80, this.enemy2lives));
        this.enemy2.push(new Alien2(Game.ctx, 100, 80, this.enemy2lives));
        this.enemy2.push(new Alien2(Game.ctx, 125, 80, this.enemy2lives));
        this.enemy2.push(new Alien2(Game.ctx, 150, 80, this.enemy2lives));
        this.enemy2.push(new Alien2(Game.ctx, 175, 80, this.enemy2lives));
        this.enemy2.push(new Alien2(Game.ctx, 200, 80, this.enemy2lives));
        this.enemy2.push(new Alien2(Game.ctx, 225, 80, this.enemy2lives));


        this.enemy3.push(new Alien3(Game.ctx, 50, 110, this.enemy3lives));
        this.enemy3.push(new Alien3(Game.ctx, 75, 110, this.enemy3lives));
        this.enemy3.push(new Alien3(Game.ctx, 100, 110, this.enemy3lives));
        this.enemy3.push(new Alien3(Game.ctx, 125, 110, this.enemy3lives));
        this.enemy3.push(new Alien3(Game.ctx, 150, 110, this.enemy3lives));
        this.enemy3.push(new Alien3(Game.ctx, 175, 110, this.enemy3lives));
        this.enemy3.push(new Alien3(Game.ctx, 200, 110, this.enemy3lives));
        this.enemy3.push(new Alien3(Game.ctx, 225, 110, this.enemy3lives));
    
        this.enemy1Direction = true;
        this.enemy2Direction = true;
        this.enemy3Direction = true;

        this.enemy1Y = 50;
        this.enemy2Y = 80;
        this.enemy3Y = 110;

        this.player = new Player(this.ctx, this.canvasW, this.canvasH, this.keys);
    
        this.score = 0;
        this.scoreboard.init(this.ctx);

        

        this.start();
    },
    



    drawAll() {
		this.player.draw(this.frameCounter)
        this.walls.forEach(wall => wall.draw());
        this.enemy1.forEach(enemy1 => enemy1.draw(this.frameCounter));
        this.enemy2.forEach(enemy2 => enemy2.draw(this.frameCounter));
        this.enemy3.forEach(enemy3 => enemy3.draw(this.frameCounter));
        this.scoreboard.update(this.score)
        this.drawLives()
	},

    moveAll: function () {
        this.player.move();
        this.moveAlien1();
        this.moveAlien2();
        this.moveAlien3();
    },

    clear: function () {
		this.ctx.clearRect(0, 0, this.canvasW, this.canvasH)
	},

    moveAlien1 () {
        for (let i = 0; i < this.enemy1.length; i++) {
        const alien1 = this.enemy1[i];
        
        if (this.enemy1Direction === true) {
            alien1.x += 1;
  
            if (alien1.x + alien1.width >= this.canvasW) {
                this.enemy1Y += alien1.height;
                this.enemy1Direction = false;
                
            } 
        } else{
            alien1.x -= 1
            if (alien1.x == 0){
                this.enemy1Direction = true;
                this.enemy1Y += alien1.height;
            } 
        }

        alien1.y = this.enemy1Y;
    }
    },

    moveAlien2 () {
        for (let i = 0; i < this.enemy2.length; i++) {
        const alien2 = this.enemy2[i];
        
        if (this.enemy2Direction === true) {
            alien2.x += 1;
  
            if (alien2.x + alien2.width >= this.canvasW) {
                this.enemy2Y += alien2.height;
                this.enemy2Direction = false;
                
            } 
        } else{
            alien2.x -= 1
            if (alien2.x == 0){
                this.enemy2Direction = true;
                this.enemy2Y += alien2.height;
            } 
        }

        alien2.y = this.enemy2Y;
    }
    },

    moveAlien3 () {
        for (let i = 0; i < this.enemy3.length; i++) {
        const alien3 = this.enemy3[i];
        
        if (this.enemy3Direction === true) {
            alien3.x += 1;
  
            if (alien3.x + alien3.width >= this.canvasW) {
                this.enemy3Y += alien3.height;
                this.enemy3Direction = false;
                
            } 
        } else{
            alien3.x -= 1
            if (alien3.x == 0){
                this.enemy3Direction = true;
                this.enemy3Y += alien3.height;
            } 
        }

        alien3.y = this.enemy3Y;
    }
    },

    drawLives() {
        this.ctx.fillStyle = "green";
        this.ctx.font = "5 Arial";
        this.ctx.fillText("Vidas: " + this.player.lives, 500, 30);
      },

    Collision:function(){
        return this.walls.some((wall) => this.player.bullets.some((bullet) => {

            const Collision = 
            bullet.x - bullet.radius < wall.x + wall.w &&
            bullet.x + bullet.radius > wall.x &&
            bullet.y + bullet.radius > wall.y &&
            bullet.y - bullet.radius < wall.y + wall.h

            if (Collision) {
                wall.lives -= 1
                this.player.bullets = this.player.bullets.filter ((b) => b !== bullet)

                if (wall.lives <= 0) {
                    this.walls = this.walls.filter((w) => w !== wall)
                }
            }
        })
    )},

    CollisionAlien1:function(){
        return this.enemy1.some((Alien1) => this.player.bullets.some((bullet) => {

            const CollisionAlien1 = 
            bullet.x - bullet.radius < Alien1.x + Alien1.w &&
            bullet.x + bullet.radius > Alien1.x &&
            bullet.y + bullet.radius > Alien1.y &&
            bullet.y - bullet.radius < Alien1.y + Alien1.h
            
            if (CollisionAlien1) {
                Alien1.enemy1lives -= 1
                console.log(Alien1.enemy1lives)
                this.player.bullets = this.player.bullets.filter ((b) => b !== bullet)

                if (Alien1.enemy1lives <= 0) {
                    this.enemy1 = this.enemy1.filter((al1) => al1 !== Alien1)

                }
            }
        })
    )},

    CollisionAlien2:function(){
        return this.enemy2.some((Alien2) => this.player.bullets.some((bullet) => {

            const CollisionAlien2 = 
            bullet.x - bullet.radius < Alien2.x + Alien2.w &&
            bullet.x + bullet.radius > Alien2.x &&
            bullet.y + bullet.radius > Alien2.y &&
            bullet.y - bullet.radius < Alien2.y + Alien2.h
            
            if (CollisionAlien2) {
                Alien2.enemy2lives -= 1
                console.log(this.enemy2lives)
                this.player.bullets = this.player.bullets.filter ((b) => b !== bullet)

                if (Alien2.enemy2lives <= 0) {
                    this.enemy2 = this.enemy2.filter((al2) => al2 !== Alien2)

                }
            }
        })
    )},

    CollisionAlien3:function(){
        return this.enemy3.some((Alien3) => this.player.bullets.some((bullet) => {

            const CollisionAlien3 = 
            bullet.x - bullet.radius < Alien3.x + Alien3.w &&
            bullet.x + bullet.radius > Alien3.x &&
            bullet.y + bullet.radius > Alien3.y &&
            bullet.y - bullet.radius < Alien3.y + Alien3.h
            
            if (CollisionAlien3) {
                Alien3.enemy3lives -= 1
                console.log(this.enemy3lives)
                this.player.bullets = this.player.bullets.filter ((b) => b !== bullet)

                if (Alien3.enemy3lives <= 0) {
                    this.enemy3 = this.enemy3.filter((al3) => al3 !== Alien3)

                }
            }
        })
    )},

    CollisionAlien3:function(){
        return this.enemy3.some((Alien3) => this.player.bullets.some((bullet) => {

            const CollisionAlien3 = 
            bullet.x - bullet.radius < Alien3.x + Alien3.w &&
            bullet.x + bullet.radius > Alien3.x &&
            bullet.y + bullet.radius > Alien3.y &&
            bullet.y - bullet.radius < Alien3.y + Alien3.h
            
            if (CollisionAlien3) {
                Alien3.enemy3lives -= 1
                console.log(this.enemy3lives)
                this.player.bullets = this.player.bullets.filter ((b) => b !== bullet)

                if (Alien3.enemy3lives <= 0) {
                    this.enemy3 = this.enemy3.filter((al3) => al3 !== Alien3)
                    
                }
            }
        })
    )},

    CollisionBalaEnemyWall: function() {
        this.walls.forEach((wall) => {
            this.enemy1.forEach((alien1) => {
                alien1.bulletsEnemy.forEach((bulletEnemy, index) => {

                    const collision =
                        bulletEnemy.x - bulletEnemy.radius < wall.x + wall.w &&
                        bulletEnemy.x + bulletEnemy.radius > wall.x &&
                        bulletEnemy.y + bulletEnemy.radius > wall.y &&
                        bulletEnemy.y - bulletEnemy.radius < wall.y + wall.h;

                    if (collision) {
                            wall.lives -= 1;
                            alien1.bulletsEnemy.splice(index, 1);

                            if (wall.lives <= 0) {
                                this.walls = this.walls.filter((w) => w !== wall);
                            }
                    }
                });
            });
        });
    },

    Collision5() {
        this.enemy1.forEach((alien1) => {
            alien1.bulletsEnemy.forEach((bulletEnemy, index) => {
                const collision5 = bulletEnemy.x - bulletEnemy.radius < this.player.x + this.player.w &&
                    bulletEnemy.x + bulletEnemy.radius > this.player.x &&
                    bulletEnemy.y + bulletEnemy.radius > this.player.y &&
                    bulletEnemy.y - bulletEnemy.radius < this.player.y + this.player.h;
    
                if (collision5) {
                    alien1.bulletsEnemy.splice(index, 1);
                    this.player.lives--;
    
                    if (this.player.lives <= 0) {
                        const musicStart = document.getElementById("musicMain")
                        musicStart.pause()
                        alert('¡Has perdido!');
                        this.reset()
                    }
                }
            });
        });
    }
      
}