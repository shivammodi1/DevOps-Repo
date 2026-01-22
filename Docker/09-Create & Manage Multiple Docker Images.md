# Create & Manage Multiple Docker Images

## After adding some changes to ypur Application code, you need to rebuild the Docker image (Not a best practice to create multiple images for same application)
```bash
docker build -t <your_image_name>:<tag> .
```
## But we can also create versions of the same image with different tags rather cretating multiple images(Best practice)
```bash
docker build -t my-app:1.0 .
docker build -t my-app:latest .
```



## To delete all images and containers
```bash
docker system prune -a
```
- this will delete all stopped containers, all unused networks, all dangling images, and all build cache.
- Be cautious when using this command as it will remove a lot of data.

## To delete a specific Docker image
```bash
docker rmi <image_id>
```
- Replace `<image_id>` with the actual ID of the Docker image you want to delete.

## To list all Docker images
```bash
docker images
```
