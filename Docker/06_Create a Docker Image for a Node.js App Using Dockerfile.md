# Create a Docker Image for a Node.js App Using Dockerfile

- This guide will walk you through the steps to create a Docker image for a simple Node.js application using a Dockerfile.

## Step 1: Create a Simple Node.js Application

1. Create a new directory for your Node.js application:
   ```bash
   mkdir my-node-app
   cd my-node-app
   ```
2. Initialize a new Node.js project:
   ```bash
   npm init -y
   ```
3. Create an `index.js` file with a simple HTTP server:
   `` javascript
const http = require('http');
const port = 3000;
const requestHandler = (request, response) => {
    response.end('Hello, World!');
};
const server = http.createServer(requestHandler);
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
     ``
4. Install any necessary dependencies (if any). For this simple app, there are no additional dependencies.
   ```bash
   npm install
   ```

## Step 2: Create a Dockerfile

1. In the root of your project directory (`my-node-app`), create a file named `Dockerfile` (no file extension).
2. Add the following content to the `Dockerfile`:
   ```Dockerfile
   # Use the official Node.js image as the base image
   FROM node:latest

   # Set the working directory inside the container
   WORKDIR /usr/src/app

   # Copy package.json and package-lock.json to the working directory
   COPY package*.json ./

   # Install the dependencies
   RUN npm install

   # Copy the rest of the application code to the working directory
   COPY . .

   # Expose the port that the app runs on
   EXPOSE 3000

   # Define the command to run the application
   CMD ["node", "index.js"]
   ```

## Step 3: Build the Docker Image
1. Open a terminal and navigate to the project directory (`my-node-app`).
2. Run the following command to build the Docker image:
   ```bash
   docker build -t my-node-app .
   ```
   - `-t my-node-app`: Tags the image with the name `my-node-app`.
   - `.`: Specifies the current directory as the build context.

<!-- ## Step 4: Run the Docker Container
1. After the image is built, you can run a container using the following command:
   ```bash
   docker run -p 3000:3000 my-node-app
   ```
   - `-p 3000:3000`: Maps port 3000 of the container to port 3000 on your host machine.
   - `my-node-app`: Name of the Docker image you just built.                
2. Open your web browser and navigate to `http://localhost:3000`. You should see "Hello, World!" displayed in the browser.
 -->
