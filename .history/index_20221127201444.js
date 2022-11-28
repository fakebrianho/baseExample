const express = require('express')
let app = express()

app.use(express.json())

app.use('/', express.static('public'))

app.post('/submission', (req, res) => {
	console.log(req.body)
})

const port = process.env.PORT || 3000
app.listen(port, () => {
	console.log('listening at ', port)
})
