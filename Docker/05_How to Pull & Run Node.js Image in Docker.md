# How to Pull & Run Node.js Image in Docker
- This guide will walk you through the steps to pull and run a Node.js image using Docker.

## Pulling the Node.js Image
1. Open Docker Desktop and Search for "node" in the Docker Hub.
2. Select the official Node.js image from the search results.
3. Click on the "Pull" button to download the image to your local machine.
    - Alternatively, you can use the command line to pull the image:
    ```bash
    docker pull node
    ```

## Running a Node.js Container
1. Once the image is pulled, you can run a container using the following command:
    ```bash
    docker run -it --name my-node-app -p 3000:3000 node
    ```
    - `-it`: Runs the container in interactive mode with a terminal.
    - `--name my-node-app`: Names the container "my-node-app".
    - `-p 3000:3000`: Maps port 3000 of the container to port 3000 on your host machine.
2. This command will start a Node.js REPL (Read-Eval-Print Loop) inside the container. You can now run Node.js commands directly.
3. To exit the Node.js REPL, type `.exit` and press Enter.
4. To stop the container, you can use the following command:
    ```bash
    docker stop my-node-app
    ```
5. To start the container again, use:
    ```bash
    docker start -i my-node-app
    ```
## Conclusion
- You have successfully pulled and run a Node.js image in Docker. You can now develop and test your Node.js applications within the Docker container.