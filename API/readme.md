# Restaurnt Repository 

This is a Rest API for  adding and getting list of your favourite restaurants. I have used mongoDB ATLAS as the database and this will be hosted on AWS EC2 Ubuntu server, back-end of the application is in NODE Js.

--- 

## These are the following end-points of the API.

- ***Get Restaurants - This returns list of all stored reataurants in JSON format***
    - **URL** : http://3.90.186.240:3030/restaurant

    - **METHOD** : `GET`

    - **URL Parameters**: *None* 

    - **Data Parameters** : *None*

    - **Success Response**:
        ***Status code***: `200`
        Array[2][
            {
                "addedBy": "shahkush18",
                "_id": "5dd345f0a3e0bb46140f8e70",
                "name": "Godavari",
                "location": "Tenessee",
                "cuisine": "Indian",
                "reviews": Array[3][
                {
                    "userid": "shahkush18",
                    "_id": "5dd34636a3e0bb46140f8e71",
                    "rating": 3
                },
                {
                    "userid": "shahkush18",
                    "_id": "5dd3463da3e0bb46140f8e72",
                    "rating": 4
                },
                {
                    "userid": "shahkush18",
                    "_id": "5dd34643a3e0bb46140f8e73",
                    "rating": 5
                }
                ],
                "__v": 0
            },
            {
                "addedBy": "shahkush18",
                "_id": "5ddadc81dee0f71d34bd6808",
                "name": "Thai House",
                "location": "Charlotte",
                "cuisine": "Thai",
                "reviews": Array[0][
                
                ],
                "__v": 0
            }

        ]
    - **Error Response**: 
        ***Status code***: `500`

- ***Add Restaturant - This will add the new Restaurant to the list of your favourite restaurant***
    - **URL** : http://3.90.186.240:3030/restaurant

    - **METHOD** : `POST`

    - **URL Parameters**: *None* 

    - **Data Parameters** : 
        {
            addedBy:{
                type:String,
                default:"shahkush18"
            } ,
            name:{
                type:String,
                required: true
            
            },

            location:{
                type:String,
                required: true
            },
            cuisine:{
                type:String,
                required:true
        }


    - **Success Response**:
        ***Status code***: `200`
            {
                "addedBy": "shahkush18",
                "_id": "5dee9a3bae4ec028c2ed25f2",
                "name": "Trial 456",
                "location": "Charlotte",
                "cuisine": "Asian",
                "reviews": [],
                "__v": 0
            }
    - **Error Response**: 
        ***Status code***: `500`


- ***Get Restaurant Details by ID - This will return all the information about the restaurant you are looking for if it exists in the list***
    - **URL** : http://3.90.186.240:3030/restaurant/:id

    - **METHOD** : `POST`

    - **URL Parameters**: id - type[mongoose.Schema.Types.ObjectId] 

    - **Data Parameters** : *None*

    - **Success Response**:
        ***Status code***: `200`
            {
                "addedBy": "shahkush18",
                "_id": "5dee9a3bae4ec028c2ed25f2",
                "name": "Trial 456",
                "location": "Charlotte",
                "cuisine": "Asian",
                "reviews": [],
                "__v": 0
            }
    - **Error Response**: 
        ***Status code***: `500`

- ***Delete Restaurant - This will delete the specified restaurant form the list of favourite restaurants***

    - **URL** : http://3.90.186.240:3030/restaurant

    - **METHOD** : `DELETE`

    - **URL Parameters**: *None* 

    - **Data Parameters** :
             {
                restaurant_id: {
                    type: string,
                    required: true
                },
                user_id:{
                    type: string,
                    required:true,
                    default:"shahkush18"
                }
            }


    - **Success Response**:
        ***Status code***: `200`
            {
                "addedBy": "shahkush18",
                "_id": "5dee9a3bae4ec028c2ed25f2",
                "name": "Trial 456",
                "location": "Charlotte",
                "cuisine": "Asian",
                "reviews": [],
                "__v": 0
            }
    - **Error Response**: 
        ***Status code***: `500`

- ***Edit Restaurant Details: This api can be used to edit details of the restaurant already in the list***

    - **URL** : http://3.90.186.240:3030/restaurant

    - **METHOD** : `PUT`

    - **URL Parameters**: *None* 
    
    - **Data Parameters** :
             {
                restaurant_id: {
                    type: string,
                    required: true
                },
                user_id:{
                    type: string,
                    required:true,
                    default:"shahkush18"
                }
            }


    - **Success Response**:
        ***Status code***: `200`
            {
                "addedBy": "shahkush18",
                "_id": "5dee9a3bae4ec028c2ed25f2",
                "name": "Trial 456",
                "location": "Charlotte",
                "cuisine": "Asian",
                "reviews": [],
                "__v": 0
            }
    - **Error Response**: 
        ***Status code***: `500`
    









    
                    
                    





