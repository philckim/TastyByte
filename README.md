# ![TastyByte Logo](https://i.imgur.com/0MMJKej.png) TastyByte, a Foodie Social Network
AD410 Project Group A (Alex Sutherland, Andy Wilson, Paul Briones, Phil Kim)

Welcome to TastyByte :cucumber: :carrot: :broccoli: :onion: :plate_with_cutlery:, a social network for foodies to share their favorite recipes. Built with React, Node, Express, and MongoDB. 

## Deploy Locally
`backend` folder contains backend Express app. To run this server:
1. open new terminal
2. cd into `backend` directory
3. run the following command:
    ```shell
    npm install
    ```
4. run the following command:
    ```shell
    node server.js
    ```

`client` folder contains frontend React app. To run this server:
1. open new terminal
2. cd into `client` directory
3. run the following command:
    ```shell
    npm install
    ```
4. run the following command:
    ```shell
    npm start
    ```
    
## Style Guide
1. ES6 JavaScript (let, arrow functions)
2. Constants are in all caps
3. Components are capitalized
4. Use camelCase whenever possible

## API Testing With Postman
The following routes can be used to test and retreive data via Postman:

#### GET
```shell
http://localhost:8080/api/recipe/
```
Returns all recipe objects 

#### POST
```shell
http://localhost:8080/api/recipe/
```
Insert recipe object into database like below; customize values as desired
```shell
{
    "name": "Recipe Name",
    "author": "Recipe Author",
    "description": "Recipe Description",
    "instructions": "Recipe Instructions",
    "ingredients": [
        "Ingredient 1",
        "Ingredient 2",
        "Ingredient 3"
    ],
    "photo": "Photo URL",
    "tags": [
        "tag1",
        "tag2",
        "tag3"
    ]
}
```