# Volumes
- It is a storage mechanism.

- When we create a container from an image all the data inside the container is ephemeral (temporary).

- When the container is removed all the data inside the container is also removed.

- To persist data we use volumes along with containers.

- Volumes stored the data separately from the container filesystem.

- And working with volumes when we made changes to the application code we don't need to rebuild the image or recreate the container.
- It will automatically reflect the changes.