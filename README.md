[Demo](https://react-bucket-list-app.herokuapp.com/)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

URL shortener
======================
The objective of this single page application is to provide a short url for the given input url.
It is built using MERN stack technologies(MongoDB, Express, React, Node).

It provides the following functionalities:
---------------------
-User can pass a URL and will receive a shortened URL.
-If the input passed, doesn't follow the valid http://www.example.com format, the response will contain an error.
-When a shortened URL is visited, it will redirect the user to the original link.

Prerequisites:
---------------------
Prerequisites:
MongoDB
Node ^ 10.0.0
npm 
nodemon

Usage
---------------------
-Clone this repository
-Install server-side dependencies 
$ npm install
-Install client-side dependencies
$ cd client/
$ npm install
-To run the application, from the project's root folder run
```
$ npm run dev
```
-The application will be up and running on localhost:3000

Project Structure
---------------------

Client - This directory hosts the frontend of the application built using React Js. It contains all the components and views in src/ folder. It uses Shards dashboard template for design.
Models - Contains a file that stores all the models for defining mongoose Schema.
Routes - This folder has the routing code for shortening or finding the already shortened url of the given url and redirecting from the short url to the original link.

Next Steps
---------------------
Emoji url
Custom url
Delete the shortened url
Show all shortened Urls
Add feature for showing the number of times a short URL has been visited
URL expiry

Screenshots of this project
---------------------
