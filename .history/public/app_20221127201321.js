const btn = document.querySelector('.submit')
console.log(btn)
btn.addEventListener('click', function () {
	const input = document.querySelector('#critique')
	const inputData = input.value
	const submission = { interpretation: inputData }
	fetch('/submission', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify(submission),
	})
		.then((response) => response.json())
		.then((data) => {
			console.log(data)
		})
})

// fetch('/submit', {
// 	method: 'POST',
// 	headers: {
// 		'Content-Type': 'application/json;charset=utf-8',
// 	},
// 	body: JSON.stringify(obj),
// })
