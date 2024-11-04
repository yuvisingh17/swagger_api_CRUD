const express = require('express')

const router = express.Router()

//get all workouts
router.get('/', (req,res) => {
  res.json({mssg:"GET all workout"})
})

//GET a single workout
router.get('/:id',(req,res) => {
  res.json({msg:"GET a single workout"})

})
//GET two workouts
router.get('/india/:id',(req,res) => {
  res.json({msg:"GET two  workouts"})

})
//POST a workout
router.post('/',(req,res) => {
  res.json({mssg:"POST a  new workout"})
})
//DELETE a workout
router.delete('/:id',(req,res) => {
  res.json({mssg:"DELETE a  workout"})
})
//UPDATE a workout
router.patch('/:id',(req,res) => {
  res.json({mssg:"UPDATE a workout"})
})

module.exports = router