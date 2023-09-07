const express = require('express')
const app = express()
const port = 8089

app.get('/projects', (request, response) => {
  const { title, owner, page } = request.query
  console.log(title, owner, page)
  return response.json([
    'Deus é BOM!', 
    "Deus é grande!"
  ])
})

app.post('/projects', (request, response) => {
  return response.json([
    'Deus é BOM!', 
    "Deus é grande!",
    "Deus é Poderoso pra fazer infinitamente mais!"
  ])
})

app.put('/projects/:id/:name', (request, response) => {
  const { id, name } = request.params
  console.log(`O id é ${id} e o nome é ${name} Glória à Deus!`)
  return response.json([
    'Deus é BOMMMM!', 
    "Deus é grande!",
    "Deus é Poderoso pra fazer infinitamente mais!"
  ])
})

app.delete('/projects/:id', (request, response) => {
  return response.json([
    "Deus é grande!",
    "Deus é Poderoso pra fazer infinitamente mais!"
  ])
})
app.listen(port, () => console.log('Jesus é maravilhoso!'))
