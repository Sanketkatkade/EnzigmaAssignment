const express = require('express');
const { getTasks, createTask, updateTask, deleteTask } = require('../controllers/taskController');
const router = express.Router();

router.get('/task', getTasks);

router.post('/task', createTask);

router.put('/task/:id', updateTask);

router.delete('/task/:id', deleteTask);

module.exports = router;
