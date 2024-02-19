const express = require('express');
const app = express();
//HTTP verbs

// app.get all method: GET
// eg url localhost:3001/api/users
// call from frontend to Backend             Call from Backend to Database
// This is a call from url                   mysql=> SELECT * FROM users

// app.get one  method: GET  where :id is the params
// eg url localhost:3001/api/users/:id
// call from frontend to Backend             Call from Backend to Database
// This is a call from url                   mysql=> SELECT * FROM users where id=1

// app.post method: POST
// eg url localhost:3001/api/users
// call from frontend to Backend             Call from Backend to Database
// This is a call from form                  mysql=> INSERT INTO users(name,age) VALUES(“paul”, 20)

// app.put
//This is a call to update complete data of an entity

// app.patch
// This is a call to update partial data of an entity

// app.delete
// This is a call to delete an entity


app.get('/', (req, res) => {
    //Make call to database
    const result = {
        student: {
            name: 'paul iroko olawale',
            age: 20,
        },
        teacher: {
            name: "ismailawa my master",
            age: 30,
        },
    };
    //Response to frontend
    res.status(200).json(result);
});
app.listen(3001, () => {
    console.log('Server running on localhost:3001');
});