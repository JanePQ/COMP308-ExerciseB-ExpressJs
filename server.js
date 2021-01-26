const express = require('express')
const app = express()
const port = 3000

//Routing
app.get('/', function(req, res) {
  res.send('Hello Cold World!')
})

app.get('/about', function(req, res) {
    res.send('About Page')
  })

  app.get('/contact', function(req, res) {
    res.send('No contact info')
  }) 

   app.get('/user/:id', function(req, res) {
    res.send(req.params)
  }) 

   app.get('*', function(req, res) {
    res.send('Error Page')
  }) 

app.listen(port, function() {
  console.log(`Example app listening at http://localhost:${port}`)
})