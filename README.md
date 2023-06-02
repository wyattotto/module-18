
# Social Network API
This project implements the backend functionality of a social network web application using Node.js, Express.js, and MongoDB. The application provides a RESTful API for creating, reading, updating, and deleting users, posts, reactions, and friend relationships.

## Functionality
 ### User Management: Users can sign up, update their information, and delete their account. They can also view all users or a single user by their ID.

 ### Friend Management: Users can add and remove friends from their friend list.

 ### Post Management: Users can create, update, and delete posts. They can also view all posts or a single post by its ID.

 ### Reaction Management: Users can add and remove reactions to posts.

## Endpoints and Methods
The API includes the following endpoints and HTTP methods:

### User Routes

GET /api/users: Fetches all users.
GET /api/users/:id: Fetches a single user by their ID.
POST /api/users: Creates a new user.
PUT /api/users/:id: Updates a user by their ID.
DELETE /api/users/:id: Deletes a user by their ID.
POST /api/users/:userId/friends/:friendId: Adds a friend to a user's friend list.
DELETE /api/users/:userId/friends/:friendId: Removes a friend from a user's friend list.
Post Routes

GET /api/posts: Fetches all posts.
GET /api/posts/:id: Fetches a single post by its ID.
POST /api/posts: Creates a new post.
PUT /api/posts/:id: Updates a post by its ID.
DELETE /api/posts/:id: Deletes a post by its ID.
Reaction Routes

POST /api/posts/:postId/reactions: Adds a reaction to a post.
DELETE /api/posts/:postId/reactions/:reactionId: Removes a reaction from a post.

## How to Use
Clone the repository to your local machine.
Navigate to the project directory in your terminal.
Run npm install to install the necessary dependencies.
Run npm start or node server.js to start the server.
Use a tool like Postman or Insomnia to interact with the API endpoints.

## Technologies Used
Node.js
Express.js
MongoDB
Mongoose
Please note that this project is a backend application. There is no frontend interface, and interactions with the API must be done through tools capable of sending HTTP requests.