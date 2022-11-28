const btn = document.querySelector('.submit')
btn.addEventListener('click', function () {
	const input = document.querySelector('#critique')
	const inputData = input.value
	const submission = { interpretation: inputData }
	fetch('/submission')
		.then((response) => response.json)
		.then((data) => {
			console.log(data)
		})
})
