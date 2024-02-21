const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController')

//Routes

//display all task
router.get('/', todoController.todo_index);

//create new
router.post("/", todoController.todo_create);

//delete
router.delete('/:id', todoController.todo_delete);

//update
router.put('/:id', todoController.todo_update);

// counter request
router.get("/count", todoController.todo_count);


module.exports = router;