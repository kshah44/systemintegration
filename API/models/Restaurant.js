const mongoose = require('mongoose');
// const review = require('./Review');

const ReviewSchema = mongoose.Schema({
    userid:{
        type:String,
        default:"shahkush18",
        
    } ,
   
    rating:{
        type:Number,
        required: Boolean
    }
});

const RestaurantSchema = mongoose.Schema({
    addedBy:{
        type:String,
       default:"shahkush18"
    } ,
    name:{
        type:String,
        required: true
    
    },
    reviews:{
        type:[ReviewSchema],
        default:[]
    },
   
    location:{
        type:String,
        required: true
    },
    cuisine:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('Restaurant',RestaurantSchema);