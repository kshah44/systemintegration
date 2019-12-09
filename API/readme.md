# Restaurnt Repository 

This is a Rest API for  adding and getting list of your favourite restaurants. I have used mongoDB ATLAS as the database and this will be hosted on AWS EC2 Ubuntu server, back-end of the application is in NODE Js.

--- 

## These are the following end-points of the API.

- ***Get Restaurants - This returns list of all stored reataurants in JSON format***
    - **URL** : http://3.90.186.240:3030/restaurant

    - **METHOD** : `GET`

    - **URL Parameters**: *None* 

    - **Data Perameters** : *None*

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

    - **Data Perameters** : *None*

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






    
                    
                    





