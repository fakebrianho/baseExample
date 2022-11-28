const express = require('express')
let app = express()

app.use(express.json())

app.use('/', express.static('public'))

app.get('/submission', (req, res) => {
	const form = document.querySelector('#critique')
})

const port = process.env.PORT || 3000
app.listen(port, () => {
	console.log('listening at ', port)
})
