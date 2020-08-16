// require schema
const todo = require('../models/todoSchema');

// add todo in the database
module.exports.add = function(req, res) {

    // add todo

    todo.create(req.body, function(err, user) {     // additional fields in req.body will not be saved
        if(err) { console.log('error in saving data', err); return;}

        // req.flash('success', 'Added to database successfully.');
        return res.redirect('back');
    });
};

// delete todo from the database
module.exports.delete = function(req, res) 
{
    // extract id
    let id = req.query.id;

    // find the contact in the database using id and delete
    todo.findByIdAndDelete(id, function(err) {
        if(err) {
            console.log('Error in detecting an object from database');
            return;
        }

        return res.redirect('back');
    }) ;  
};