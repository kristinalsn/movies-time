# Movies-Time
Movie Time

Movie Time is a full-stack project built on Angular for the frontend, and Node.js, Express, and MongoDB for the backend. It allows users to interact with a database of movies and cinemas.

Features

Movies: Users can retrieve all movies, get details of a single movie, create a new movie, update an existing movie, and delete a movie.
Cinemas: Users can retrieve all cinemas, get details of a single cinema, and retrieve all movies that belong to a certain cinema.
Getting Started

Prerequisites
Node.js
MongoDB
Angular CLI
Postman (for testing the API endpoints)
Installation

Clone this repository:
git clone https://github.com/kristinalsn/movies-time.git

Navigate to the backend project folder:

cd movies-time/backend

Install the dependencies:

npm install

Now, navigate to the frontend project folder:

cd ../frontend

Install the Angular dependencies:

npm install

Usage

Backend

Run the server:

npm start

Once the server is running, you can use Postman or any API client to test the API endpoints.
The server is running on http://localhost:3000.

Frontend

Run the Angular application:

ng serve

Then you can access the application in your web browser at http://localhost:4200.

API Endpoints

Movies

GET /movies: Retrieve all movies

GET /movies/:id: Get details of a specific movie

POST /movies: Create a new movie

PUT /movies/:id: Update a movie

DELETE /movies/:id: Delete a movie

Cinemas

GET /cinemas: Retrieve all cinemas

GET /cinemas/:id: Get details of a specific cinema

GET /cinemas/:id/movies: Retrieve all movies in a specific cinema

Frontend Routes

/ or /home: Home page

/movies: List all movies

/movies/new: Add a new movie

License


This project is licensed under the MIT License - see the LICENSE file for details.

Contact

GitHub: @kristinalsn
Feel free to reach out if you have any questions or if you want to contribute.
