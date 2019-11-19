const mongoose = require('mongoose');

const ReviewSchema = mongoose.Schema({
    userid:{
        type:String,
        default:"shahkush18"
    } ,
   
    rating:{
        type:Number,
        required: Boolean
    }
});

module.exports = mongoose.model('Review',ReviewSchema);