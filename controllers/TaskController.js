const Task = require('../models/Task.js')

const TaskController = {
	async create(req, res) {
		try {
			const task = await Task.create(req.body)
			res.status(201).send({ message: 'Task created', task })
		} catch (error) {
			console.error(error)
			res.status(500).send({ message: 'error', error })
		}
	},
}

module.exports = TaskController
