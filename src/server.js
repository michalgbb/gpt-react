const PORT = 8000
const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())

console.log('hii')

app.listen(PORT, () => console.log('Your serwer is on PORT 8000 ' + PORT))