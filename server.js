const express = require('express')
const workoutRoutes =require('./routes/workouts')

//swagger 
const swaggerUi = require('swagger-ui-express');

//file handleling in javascript
const fs = require('fs');
const yaml = require('js-yaml');
//exress app
const app = express()

//PORT
const PORT = 4004

//load Swagger YAML file
const swaggerDocument = yaml.load(fs.readFileSync('./swagger.yaml', 'utf8'));



// Serve Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//routes
app.use('/api/workouts/',workoutRoutes)

//middleware
app.use((req, res, next)=>{
  console.log("hi i am middle ware")
  console.log(req.path, req.method)
  next()
})



//litening for request or start the server
app.listen(PORT,() => {
  console.log('listening port 4004!!')
  
})