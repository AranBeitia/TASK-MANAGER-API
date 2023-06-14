const express = require('express')
const router = express.Router()
const TaskController = require('../controllers/TaskController')

router.post('/', TaskController.create)
router.get('/', TaskController.getAll)
router.get('/id/:_id', TaskController.getById)
router.put('/id/:_id', TaskController.complete)
router.put('/id/:_id', TaskController.updateTask)
router.delete('/id/:_id', TaskController.delete)

module.exports = router
