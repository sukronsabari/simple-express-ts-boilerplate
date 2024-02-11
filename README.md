# Boiler Plate ExpressJs Typscript Eslint
This is a simple boilerplate for setting up an Express.js server with TypeScript. It provides a basic structure to kickstart your backend development.

## Features
-   Express.js server setup with TypeScript
-   Basic folder structure
-   Security middleware setup

## Prerequisites
Before you begin, ensure you have met the following requirements:

-   Node.js installed on your local machine
-   npm or yarn package manager installed

## Getting Started
To get started with this boilerplate, follow these steps:

1.  Navigate to the project directory:
        
    ```
      cd express-typescript-boilerplate
    ```
    
3.  Install dependencies:
    
    ```
    npm install
    ``` 
    
    or
    
    ```
    yarn
    ``` 
    
5.  Start the development server:
    
    ```
    npm run start:dev
    ``` 
    
    or
    
    ```
    yarn start:dev
    ``` 
    
7.  Open your browser and navigate to `http://localhost:5000` to see the server running.


## Directory Structure
```
express-typescript-boilerplate/
│
├── src/                     # Source files
│   ├── controllers/         # Controller functions
│   ├── middleware/          # Custom middleware
│   ├── routes/              # Express routes
│   ├── app.ts               # Main application file
│   └── server.ts            # Server initialization
│
├── .gitignore               # Specifies intentionally untracked files to ignore
├── package.json             # Project metadata and dependencies
├── tsconfig.json            # TypeScript configuration
└── README.md                # Project documentation
```
