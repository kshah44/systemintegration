const express = require("express");
var path = require('path');
const axios = require('axios');
const bodyParser = require('body-parser');
const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res, next) {

    // Restaurant.find()
    // .then(data=>{
    //     res.render('index', {page:'Restaurants', menuId:'home', restaurants:data});
    // }).catch(err=>{
    //     res.json(err)
    // })

   
    // res.json({data:""});

    axios.get('http://localhost:3030/restaurant')
    .then(function (response) {
        // handle success
        // console.log(response);
        res.render('index',{page:'Restaurants', menuId:'home',restaurants:response.data});
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .finally(function () {
        // always executed
    });
  
  
  });

  app.post('/addRestaurant',function(req,res,next){

    const restaurant = {

        name: req.body.name,
        location:req.body.location,
        cuisine:req.body.cuisine
    };

    axios.post("http://localhost:3030/restaurant",restaurant)
    .then(response =>{
        console.log(response);
        
        res.redirect('/');
    })
    .catch(error=>{
        res.json(error);
    });




  });

  app.get('/delete/:id', (req,res,next)=>{
    // console.log(req.params.id);
    const params = {
        restaurant_id: req.params.id,
        user_id:"shahkush18"
    }
    axios.delete("http://localhost:3030/restaurant",{data:params})
    .then(data=>{
        res.redirect('/')

    })
    .catch(err => {
        res.json(err)
    })
    
  });

  app.get('/editRestaurant/:id',(req,res,next)=>{
    axios.get("http://localhost:3030/restaurant/"+req.params.id)
    .then(restaurant=>{
        console.log(restaurant.data);

        res.render('edit_restaurant',{page:'Edit Restaurant Details', menuId:'home',restaurant:restaurant.data})
        
    })
    .catch(err=>{
        res.json(err);
    })
    
  });

  app.post('/editRestaurant',(req,res,next)=>{
    const restaurant = {
        id:req.body.id,
        added_by: "shahkush18",
        name: req.body.name,
        location:req.body.location,
        cuisine:req.body.cuisine
    };
    console.log(restaurant);
    

    axios.put("http://localhost:3030/restaurant",restaurant)
    .then(response =>{
        console.log(response);
        
        res.redirect('/')
    })
    .catch(error=>{
        res.json(error);
    });
  });

  

 
  app.listen(3000);