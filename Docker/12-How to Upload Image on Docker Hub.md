# How to Upload Image on Docker Hub
- first we need to build our docker image using the command below
```bash
docker build -t shivammodi1/my-node-app .
```
- Here `shivammodi1` is my docker hub username and `my-node-app` is the name of my image.

- After building the image we need to push it to docker hub using the command below
```bash
docker push shivammodi1/my-node-app
```
- Before pushing the image make sure you are logged in to your docker hub account using the command below
```bash
docker login
```
- It will ask for your docker hub username and password.
- After successful login you can push your image to docker hub.
- Once the image is pushed successfully you can see it in your docker hub account.
- Now you can pull this image from any other machine using the command below
```bash
docker pull shivammodi1/my-node-app
```


