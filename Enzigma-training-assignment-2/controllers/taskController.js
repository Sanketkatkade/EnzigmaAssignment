const Task = require('../models/task');

const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createTask = async (req, res) => {
    try {
      const { title, description, completed } = req.body;
      const newTask = new Task({ title, description, completed });
      
      const task = await newTask.save();
      res.status(201).json(task);  
    } catch (error) {
      res.status(400).json({ error: error.message });  
    }
  };


const getTaskById = async (req, res) => {
    const { id } = req.params;
    try {
        const task = await Task.findById(id);
        if (!task) {
            return res.status(404).json({ message: "Task not found." });
        }
        res.json(task);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateTask = async (req, res) => {
    const { id } = req.params;
    console.log('Updating task with ID:', id); 
  
    const { title, description } = req.body;
  
    if (!title || !description) {
      return res.status(400).json({ error: "Title and description are required." });
    }
  
    try {
      const task = await Task.findByIdAndUpdate(id, { title, description }, { new: true });
      if (!task) {
        return res.status(404).json({ message: "Task not found." });
      }
      res.json(task);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
const deleteTask = async (req, res) => {
    const { id } = req.params;

    try {
        const task = await Task.findByIdAndDelete(id);
        if (!task) {
            return res.status(404).json({ message: "Task not found." });
        }
        res.status(200).json({ message: "Task deleted successfully." });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


module.exports = { getTasks, createTask, getTaskById, updateTask, deleteTask };
