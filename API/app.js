const express = require("express");
var path = require('path');
const app = express();
var cors = require('cors')
require('dotenv/config');

const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const Restaurant = require('./models/Restaurant');
const Review = require('./models/Review');

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// var urlencodedParser = bodyParser.urlencoded({ extended: false})
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res, next) {

  Restaurant.find()
  .then(data=>{
      res.render('index', {page:'Restaurants', menuId:'home', restaurants:data});
  }).catch(err=>{
      res.json(err)
  })


});
app.get('/about', function(req, res, next) {
  res.render('index', {page:'Menu', menuId:'about'});
});
app.get('/contact', function(req, res, next) {
  res.render('index', {page:'Menu', menuId:'contact'});
});

app.get('/restaurant/:id',(req,res,next)=>{
    var id = req.params.id;
    // console.log(id);
    Restaurant.findById(id)
    .then(restaurant=>{
        // console.log(restaurant);
        
        res.json(restaurant);
    })
    .catch(err=>{
        res.json(err);
    })

    
    
});

app.post('/restaurant',(req,res)=>{
    console.log("New Restaurant added")
    console.log(req.headers.host);

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

app.put('/restaurant',(req,res)=>{
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

app.get('/restaurant',(req,res)=>{
    Restaurant.find()
    .then(data=>{
        res.json(data)
    }).catch(err=>{
        res.json(err)
    })
})

app.delete('/restaurant',(req,res)=>{
    let restaurantId = req.body.restaurant_id;
    let userId = req.body.user_id;

    Restaurant.findById(restaurantId)
    .then(restaurant=>{
        // console.log(restaurant);
        
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
app.listen(3030);
