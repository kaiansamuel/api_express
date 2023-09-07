const express = require('express')
const app = express()
const port = 8089

app.get('/', (request, response) => {
  return response.json({
    message: 'Deus é BOM!'
  })
})
app.listen(port, () => console.log('Jesus é maravilhoso!'))
