const express = require("express");

const app = express();
require('dotenv/config');

const bodyParser = require('body-parser');

const mongoose = require('mongoose');
const Task = require('./models/Task');
const Restaurant = require('./models/Restaurant');
const Review = require('./models/Review');

app.use(bodyParser.json());

app.post('/addRestaurant',(req,res)=>{
    console.log("New Restaurant added")
    const restaurant = new Restaurant({
        
        name: req.body.name,
        location:req.body.location,
        cuisine:req.body.cuisine
    });
    restaurant.save()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json({message:err})
    })
});

app.put('/editRestaurantDetails',(req,res)=>{
    var id = req.body.id;
    var addedBy = req.body.added_by
    var location = req.body.location
    var cuisine = req.body.cuisine
    var name = req.body.name
    Restaurant.findById(id)
    .then(restaurant=>{
        if(restaurant.addedBy === addedBy){
            Restaurant.findOneAndUpdate({_id:id, addedBy:addedBy},{location:location,cuisine:cuisine,name:name},{new:true})
            .then(data=>{
                res.json(data)
            }).catch(err=>{
                res.json(err)
            })
        }
    })
    .catch(err => {
        console.log(err)
    })

});

app.get('/getRestaurants',(req,res)=>{
    Restaurant.find()
    .then(data=>{
        res.json(data)
    }).catch(err=>{
        res.json(err)
    })
})

app.delete('/deleteRestaurant',(req,res)=>{
    let restaurantId = req.body.restaurant_id;
    let userId = req.body.user_id;

    Restaurant.findById(restaurantId)
    .then(restaurant=>{
        if(restaurant.addedBy === userId){
            Restaurant.deleteOne({_id:restaurantId})
            .then(data=>{
                res.json(data)
            })
            .catch(err=>{
                res.json(err);
            })
        }
    })
})

app.post('/addReview',(req,res)=>{

   if(req.body.rating > 5 || req.body.rating < 0){

        res.json({message:'Invalid Rating'})
    
        
   }

    const review = {
        rating: req.body.rating
    }

    Restaurant.findOneAndUpdate({_id:req.body.id},{$push:{reviews:review}},{new:true})
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json({message:err})
    })

 
});

app.put('/editReview',(req,res)=>{
    const restaurantId = req.body.restaurant_id
    const reviewId = req.body.review_id

});

app.get('/getRestaurantRating',(req,res)=>{
    let restaurant
    Restaurant.find({_id:req.body.id})
    .then(data =>{
        
        let total = 0;
        restaurant = data[0]
        let reviews = restaurant.reviews;
        reviews.forEach( review =>{

            total += review.rating
        }
        )

        

        var rating = {
            rating: total/reviews.length
        }
        res.json(rating);

    }).catch(err=>{
        res.json(err)
    })
});

app.delete('/deleteReview',(req,res)=>{
    let restaurantId = req.body.restaurant_id;
    let reviewId = req.body.review_id;
    let userId = req.body.user_id;

    

    var review = {
        _id:reviewId,
       
        
    }

    Restaurant.findOneAndUpdate({_id:restaurantId},{$pull:{reviews:review}},{new:true})
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json({message:err})
    })


   
})




mongoose.connect(process.env.DB_CONNECTION, {useUnifiedTopology: true, useNewUrlParser:true,useFindAndModify:false})
.then(()=>{
    console.log('Db connected')

})
.catch((err)=>{
    console.log(err)
})

// mongoose.connect(process.env.DB_CONNECTION,{ useUnifiedTopology: true, useNewUrlParser: true},()=>{
//     console.log('Db Connected.')
// })
app.listen(3000); 