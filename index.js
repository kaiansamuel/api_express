const express = require('express')
const app = express()
app.use(express.json())
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
  const { name, owner } = request.body
  console.log(name, owner)
  return response.json([
    'Deus é BOM!', 
    "Deus é grande!",
    "Deus é Poderoso pra fazer infinitamente mais!"
  ])
})

app.put('/projects/:id/:name', (request, response) => {
  const { id } = request.params
  const { name, owner } = request.body
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
