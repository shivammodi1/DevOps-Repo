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