// {todo_index, todo_create, todo_delete todo_update todo_count}
const Task = require('../models/todoschema')


const todo_index = async(req,res)=>{
    let allitems = await Task.find()
    res.send(allitems);
}

const todo_create = async (req,res)=>{
    let newitem = new Task({
        item: req.body.item,
        completed: false
    })
    await newitem.save()
    .then(result=>{
        console.log("Saved Successfully")
        res.send(result);
    })
    .catch(err=>console.log(err))
    
}

const todo_delete = async(req,res)=>{
    let id = req.params.id;
    console.log(id);
    await Task.findByIdAndDelete(id)
    .then(result=>{
        console.log("Deleted Successfully")
        res.sendStatus(200);
    })
    .catch(err=>console.log(err))
}

const todo_count = async(req,res)=>{
    await Task.find({completed:true})
    .then(response=>{
        console.log(response.length)
        res.json(response.length)
    })
}


const todo_update = async(req,res)=>{
    let id = {_id: req.params.id};
    console.log(id);
    await Task.findOne(id)
    .then(async(response)=>{
        let prevValue = response.completed;
        console.log(prevValue);
        let updateData = {completed: !prevValue};        
        await Task.updateOne(id, updateData)
        .then(result=>{
            console.log('updated success')
            res.sendStatus(200);
        })
    })
    .catch(err=>console.log(err))
}


module.exports = {todo_index, todo_create, todo_delete, todo_update, todo_count};