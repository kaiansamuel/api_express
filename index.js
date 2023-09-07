const express = require('express')
const { v4: uuid } = require('uuid')
const app = express()
app.use(express.json())
const port = 8089

const projects = []

app.get('/projects', (request, response) => {
  return response.json(projects)
})

app.post('/projects', (request, response) => {
  const { name, owner } = request.body
  const project = {
    id: uuid(),
    name,
    owner
  }
  projects.push(project)
  return response.status(201).json(project)
})

app.put('/projects/:id/:name', (request, response) => {
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
