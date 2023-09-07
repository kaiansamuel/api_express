const express = require('express')
const { v4: uuid } = require('uuid')
const app = express()
app.use(express.json())
const port = 8089

const projects = []

const logRoutes = (request, response, next) => {
  const { method, url } = request
  const route = `${method.toUpperCase()} ${url}`
  console.log(route)
  return next()
}

app.use(logRoutes)

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

app.put('/projects/:id', (request, response) => {
  const {id} = request.params
  const { name, owner } = request.body
  const projectIndex = projects.findIndex(p => p.id === id)

  if(projectIndex < 0){
    return response.status(404).json({ error: 'Project not found!' })
  }
  if (!name || !owner){
    return response.status(400).json({ error:'Name and owner are required!' })
  }

  const project = {
    id,
    name,
    owner
  }

  projects[projectIndex] = project
  return response.json(project)

})

app.delete('/projects/:id', (request, response) => {
  const { id } = request.params
  const projectIndex = projects.findIndex(p => p.id === id)
  if(projectIndex < 0){
    return response.status(404).json({ error: 'Project not found!' })
  }
  projects.splice(projectIndex)
  return response.status(204).send()
})
app.listen(port, () => console.log('Jesus é maravilhoso!'))
