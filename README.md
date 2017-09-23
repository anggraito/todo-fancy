# TODO LIST Protoype

This is todo app prototype use node.js, express, jwt and for database use mongoose

Unique fitur, has due date (plan)

## Enpoint

Route | HTTP | Description
------------ | ------------- | ------------
/signup | POST | Create new user
/signin | POST | Login as user
/todos | GET | Show all todos(authentication user)
/todos/:id | GET | Show detail todo(authentication user)
/todos | POST | Create ne todo(authentication user)
/todos/:id | PATCH | Update todo(authentication user)
/todos/:id | DELETE | Delete todo(authentication user)


## Build with:
* [Mongoose](http://mongoosejs.com) - MongoDB Object Modeling
* [Express](https://expressjs.com/) - Enpoint and CRUD
* [Node](https://nodejs.org/en/) - Node JS

## Run this API
Clone the repository, take to folder server. Then you should install the package who's declare on this file. You just doing :
```
npm install
npm run dev
```

Running the application in your browser with :
> localhost:3000/api/<endpoint>