const ScoreBoard = {
	init: function (ctx) {
		this.ctx = ctx
	},

	update: function (score) {
		this.ctx.font = '15px Arial'
		this.ctx.fillStyle = 'green'
		this.ctx.fillText(Math.floor(score), 10, 30)
	},
}
