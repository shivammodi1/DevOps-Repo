# Setup & Run GitLab on Docker

- Jab hum GihLab ko Docker me run karte hain, to hum GitLab ke liye ek isolated environment create karte hain.
- Now we can use Gitlab on our local machine without affecting the host system.
- No need to worry about plans and pricing for local development and testing.
- Docker container me GitLab run karne ke liye hum Docker images ka use karte hain jo GitLab ke official repository se milti hain.

## Prerequisites:
- Docker installed on your machine.
- Basic knowledge of Docker commands.

## Steps to Setup & Run GitLab on Docker:
1. **Pull the GitLab Docker Image:**
```bash
   docker pull gitlab/gitlab-ce:nightly
```
- Yeh command GitLab Community Edition ka latest Docker image download karega.

2. **Run the GitLab Image in a container**
```bash
    docker run -p 8000:80 gitlab/gitlab-ce:nightly # it take 10-15 mins ti start
```

3. Open *http://localhost:8000/users/sign_in* on your browser

4. Now open second terminal and find the container id using below command:
```bash
   docker ps -l
```

5. Get the initial root password using below command:
```bash
   docker exec -it <container_id> cat /etc/gitlab/initial_root_password 
    # replace <container_id> with your container id 1916a2ba8b83
```

6. Copy the password and use it to login on the GitLab web interface.
7. And userName is `root`.
