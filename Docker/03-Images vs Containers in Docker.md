# Docker Images
- Docker Image is a *Blueprint (Template) of our actual project (Clone copy of our application)*.
- It contains everything needed to run an application (Code, Runtime, Libraries, Environment Variables, Config Files).
- Images are *read-only (Immutable)*.
- We store docker images in a *Docker Hub Or private registry* for reuse(means we can use the same image multiple times without rebuilding it).


# Docker Containers
- Docker Container is a *Running instance of a Docker Image*.
(After creating an images(blueprint), we need to run it, so it's create a running instance of that image which is called container).
- Containers are *Isolated, lightweight and portable* environment where applications run.
- Containers can be *Started, Stopped, Moved and Deleted*.

## Important questions:
**1. Why container are called isolated?**
- Without disturbing the host system it will manage its own dependencies and environment.
- Becuase each container runs independently and does not interfere with other containers or the host system.

**2. Can we have multiple containers from the same image?**
- Yes, we can create multiple containers from the same image. Each container will be a separate instance with its own state and data.

**3. Are changes made to a container reflected in the image?**
- No, changes made to a container do not affect the original image. If you want to save changes, you need to create a new image from the modified container.

**4. Why Docker containers are lightweight?**
- Beacause yeh host system ke kernel ko share karte hain, jisse resources ka efficient use hota hai aur fast startup times milte hain.

## Real Life Example:
- Let's suppose I want to cook a dish (application).
- The *recipe* for the dish is like a *Docker Image* (blueprint/template).
- When I follow the recipe and cook the dish, the *cooked dish* is like a *Docker Container* (running instance of the image).
- If I want to cook the same dish again, I can use the same recipe (image) without rewriting it.

 ________________                ________________                       _______________
|                |              |                |                     |               |
|                |   Build      |                |      Run            |    Docker     |
|   Docker File  |  -------->   |  Docker Image  | ---------------->   |   Container   |
|                |              |                |                     |               |
|________________|              |________________|                     |_______________|
