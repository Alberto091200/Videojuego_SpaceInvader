window.addEventListener('load', () => {

	const musicStart = document.getElementById("musicMain")

	const startBtn = document.getElementById('start-button')

	musicStart.volume = 0.1
	

	startBtn.addEventListener('click', () => {
		musicStart.play()
		Game.init()
		
	})
})


