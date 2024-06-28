# Modi's Blog

Welcome to Modi's Blog, a personal blogging application built with the MERN stack (MongoDB, Express, React, Node.js).

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Folder Structure](#folder-structure)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication (login/signup)
- Create, read, update, and delete blog posts
- Comment on blog posts
- Like and dislike blog posts
- Responsive design

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (>=14.x)
- npm or yarn
- MongoDB

## Installation

1. **Clone the repository:**

    ```sh
    git clone https://github.com/Nitishmodi/modis-blog.git
    cd modis-blog
    ```

2. **Install dependencies for both the server and client:**

    ```sh
    cd api
    npm install
    ```

    ```sh
    cd ../client
    npm install
    ```

## Running the Application

1. **Set up environment variables:**

    Create a `.env` file in the `api` directory and add the following variables:

    ```env
    PORT=5000
    MONGODB_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    ```

2. **Start the server:**

    ```sh
    cd api
    npm start
    ```

    The server will be running on `http://localhost:5000`.

3. **Start the client:**

    ```sh
    cd ../client
    npm start
    ```

    The client will be running on `http://localhost:3000`.

## Folder Structure

```plaintext
modis-blog/
├── api/                # Server-side code
│   ├── controllers/    # Controllers for handling requests
│   ├── models/         # Mongoose models
│   ├── routes/         # API routes
│   ├── middleware/     # Custom middleware
│   └── index.js        # Entry point of the server
├── client/             # Client-side code
│   ├── public/         # Public assets
│   ├── src/            # React application source code
│   │   ├── components/ # React components
│   │   ├── pages/      # React pages
│   │   ├── services/   # Services for API calls
│   │   └── App.js      # Entry point of the client
├── .gitignore          # Git ignore file
├── README.md           # This file
└── package.json        # Project metadata and scripts
