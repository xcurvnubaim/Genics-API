# Simple Ecommerce API

This repository provides a basic boilerplate for creating a REST API using Express and MongoDB. The repository includes the necessary dependencies and a pre-defined folder structure to get you up and running smoothly.

## Table of Contents
1. [Basic Requirements](#basic-requirements)
2. [Getting Started](#getting-started)
3. [Database](#database)
4. [Application Structure](#application-structure)

## Basic Requirements

To run this API, you need to have the following software installed on your machine:

- [Node.js](https://nodejs.org) (version >= 12.0.0)
- [MongoDB](https://www.mongodb.com/) (either a local installation or an online database service)

## Getting Started

To install and run this repository, follow these steps:

1. Clone the repository to your local machine using the following command:

   ```bash
   git clone https://github.com/your-username/your-repo.git
   ```

2. Change into the project directory:

   ```bash
   cd your-repo
   ```

3. Install the dependencies by running the following command:

   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory of the project and specify the following environment variables:

   ```
   PORT=3000
   MONGODB_URI=<your-mongodb-uri>
   ```

   Replace `<your-mongodb-uri>` with the connection URI for your MongoDB database.

5. Start the application by running the following command:

   ```bash
   npm start
   ```

   The API will now be running at `http://localhost:3000`.

## Database

This API uses MongoDB as its database. You can either set up a local MongoDB installation or use an online database service such as [MongoDB Atlas](https://www.mongodb.com/cloud/atlas). To connect to your database, provide the MongoDB connection URI in the `.env` file as mentioned in the Getting Started section.

## Application Structure

The folder structure of this repository follows a recommended best practice for organizing Express applications:

```
├── controllers/       # Contains route handlers (controllers)
├── models/            # Defines the data models (Mongoose schemas)
├── routes/            # Defines the API routes
├── services/          # Contains business logic and interactions with the database
├── middlewares/       # Custom middleware functions
├── utils/             # Utility functions
├── app.js             # Entry point of the application
├── config.js          # Configuration file
├── .env               # Environment variables (ignored by version control)
├── package.json       # Project dependencies and scripts
└── README.md          # Project documentation
```

- The `controllers` directory contains route handlers responsible for handling requests and returning responses.
- The `models` directory defines the data models using Mongoose schemas, which map to MongoDB collections.
- The `routes` directory defines the API routes and associates them with the appropriate controller methods.
- The `services` directory contains business logic and interactions with the database.
- The `middlewares` directory holds custom middleware functions used in the application.
- The `utils` directory includes utility functions that can be used throughout the project.
- The `app.js` file is the entry point of the application where Express is initialized.
- The `config.js` file stores configuration variables.
- The `.env` file should be created and populated with environment-specific variables as mentioned in the Getting Started section.
- The `package.json` file lists the project dependencies