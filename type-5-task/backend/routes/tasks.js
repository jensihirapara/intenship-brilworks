const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');  // controller import

// GET all tasks
router.get('/', taskController.getAllTasks);

// POST create new task
router.post('/', taskController.createTask);

// PUT update task by id
router.put('/:id', taskController.updateTask);

// DELETE task by id
router.delete('/:id', taskController.deleteTask);

module.exports = router;
