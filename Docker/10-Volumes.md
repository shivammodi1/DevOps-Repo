# Volumes
- It is a storage mechanism.

- When we create a container from an image all the data inside the container is ephemeral (temporary).

- When the container is removed all the data inside the container is also removed.

- To persist data we use volumes along with containers.

- Volumes stored the data separately from the container filesystem.

- And working with volumes when we made changes to the application code we don't need to rebuild the image or recreate the container.
- It will automatically reflect the changes.


## Creating a Volume
- We can create a volume using the following command:
```
 docker run --name my-container -p 3000:3000 --rm -v "C:/DevOps/Docker/Docker-Image:/app" my-node-app
```
- Here the `-v` flag is used to create a volume.
- my-node-app is the image name.
- C:/DevOps/Docker/Docker-Image is the path on the host machine.
- /app is the path inside the container where the volume is mounted.
- my-container is the name of the container.
- 3000:3000 is used to map the port 3000 of the host machine to the port 3000 of the container.

- --rm flag is used to automatically remove the container when it exits.

**And we need to update the Dockerfile to set the working directory to /app to match the volume mount point.**

**Also add RUN npm install to install dependencies inside the container.**