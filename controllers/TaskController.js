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
	async getAll(req, res) {
		try {
			const tasks = await Task.find()
			res.status(200).send({ message: 'todo ok', tasks })
		} catch (error) {
			res
				.status(500)
				.send({ message: 'Ha habido un problema al recuperar tareas' })
		}
	},
	async getById(req, res) {
		try {
			const task = await Task.findById(req.params._id)
			res.status(200).send(task)
		} catch (error) {
			res.status(500).send({ message: 'Error al recuperar tarea por id' })
		}
	},
	async delete(req, res) {
		try {
			const task = await Task.findByIdAndDelete(req.params._id)
			res.send({ task, message: 'Product deleted' })
		} catch (error) {
			console.error(error)
			res.status(500).send({
				message: 'there was a problem trying to remove the publication',
			})
		}
	},
}

module.exports = TaskController
