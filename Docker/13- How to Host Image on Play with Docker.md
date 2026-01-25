# This command is used to build an image for amd64 architecture on Play with Docker:
```bash
docker buildx build --platform linux/amd64 -t shivammodi1/my-node .
```
- where `shivammodi1` is your docker hub username and `my-node` is the name of your image.
- linux/amd64 is the architecture used by Play with Docker.

# After creating the image we need to push it on Docker Hub using the command below:
```bash
docker push shivammodi1/my-node
```

--------------------------------------------------------------------------------------------------------------------------------------------
#  How to Host Image on Play with Docker
- It is a platform where we can run or host out docker images online for free.
- First, we need to create an account on Play with Docker by visiting the website: *https://labs.play-with-docker.com/*
- Now after login we need to create a new instance by clicking on the `+ NEW INSTANCE` button.
- After creating a new instance we will get a terminal where we can run our docker commands.
- Now we need to pull our docker image from Docker Hub using the command below:
```bash
docker pull shivammodi1/my-node
```
- After pull run the image using the command below:
```bash
docker run -p 3000:3000 shivammodi1/my-node
```
- After running the image we can access our application by clicking on the `3000` port button on the right side of the terminal.
- **http://ip172-18-0-12-d5qqrd8l2o90008m3k40-3000.direct.labs.play-with-docker.com/** Now we can see our application is running successfully on Play with Docker.
--------------------------------------------------------------------------------------------------------------------------------------------