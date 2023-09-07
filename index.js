const express = require('express')
const app = express()
const port = 8089

app.get('/projects', (request, response) => {
  return response.json([
    'Deus é BOM!', 
    "Deus é grande!"
  ])
})
app.listen(port, () => console.log('Jesus é maravilhoso!'))
