// Render home page
const todo = require('../models/todoSchema');

// render all the todo
module.exports.home = function(req, res) {

    todo.find({}, function(err, todo) {
        if(err)
        {
            console.log('Error in fetching todos');
            return;
        }

        return res.render('home', {     // context
            title : "Todo list",
            todo : todo
        });
    });
};