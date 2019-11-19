const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema({
    userid:{
        type:String,
       default:"shahkush18"
    } ,
    title:{
        type:String,
        required: true
    
    },
    repeat:{
        type: Boolean,
        default: false

    }
});

module.exports = mongoose.model('Task',TaskSchema);