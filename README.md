# Social Network API

## Description
This is a back-end API for a social network web application where users can share their thoughts, react to friends' thoughts, and manage a friend list. 

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [API Routes](#api-routes)
- [Demo](#demo)
- [Technologies Used](#technologies-used)
- [License](#license)

## Installation

### Clone the Repository
```bash
git clone git@github.com:Diana-Khalina/Social-network-api.git
cd social-network-api
```

### Install Dependencies
```bash
npm install
```

### Set Up Environment Variables
Create a `.env` file and add:
```env
MONGODB_URI=mongodb://127.0.0.1:27017/socialNetworkDB
PORT=3001
```

### Start the Server
```bash
npm run dev
```
The API will be running at `http://localhost:3001`.

## Usage
Use **Insomnia** to test the API endpoints.

## API Routes

### Users
| Method | Route                  | Description                               |
|--------|------------------------|-------------------------------------------|
| GET    | `/api/users`           | Get all users                             |
| GET    | `/api/users/:userId`   | Get a user by ID (includes thoughts & friends) |
| POST   | `/api/users`           | Create a new user                         |
| PUT    | `/api/users/:userId`   | Update a user by ID                       |
| DELETE | `/api/users/:userId`   | Delete a user & their thoughts            |

### Friends
| Method | Route                                      | Description        |
|--------|--------------------------------------------|--------------------|
| POST   | `/api/users/:userId/friends/:friendId`    | Add a friend      |
| DELETE | `/api/users/:userId/friends/:friendId`    | Remove a friend   |

### Thoughts
| Method | Route                        | Description                 |
|--------|------------------------------|-----------------------------|
| GET    | `/api/thoughts`              | Get all thoughts           |
| GET    | `/api/thoughts/:thoughtId`   | Get a single thought by ID |
| POST   | `/api/thoughts`              | Create a thought           |
| PUT    | `/api/thoughts/:thoughtId`   | Update a thought by ID     |
| DELETE | `/api/thoughts/:thoughtId`   | Delete a thought           |

### Reactions
| Method | Route                                          | Description                   |
|--------|----------------------------------------------|-------------------------------|
| POST   | `/api/thoughts/:thoughtId/reactions`        | Add a reaction to a thought  |
| DELETE | `/api/thoughts/:thoughtId/reactions/:reactionId` | Remove a reaction       |

## Demo
🎥 **[[Click here](https://drive.google.com/file/d/1KLiD5OwxQS8zbiSqDXxYtN7zuC-usxHo/view?usp=sharing)](#)** to watch a walkthrough video of the API in action!

## Technologies Used
- **Node.js**
- **Express.js**
- **MongoDB & Mongoose**
- **JavaScript**
- **Insomnia** 

## License
This project is licensed under the **MIT License**.
