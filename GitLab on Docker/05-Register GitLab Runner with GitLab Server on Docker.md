# Register GitLab Runner with GitLab Server on Docker

- In composefile add hostname same as container name for gitlab server and restart always.
- After this on same composefile create another service of gitlab runners-> *create images, container name, restart always, depends on gitlab server and volumes*.

```yaml
version: "3.8" # Specify the version of the Docker Compose file format
services:
  gitlab-server: # Define the GitLab service
    image: "gitlab/gitlab-ce" # Use the Community Edition of GitLab
    container_name: my-gitlab-server # container name
    hostname: my-gitlab-server # hostname same as container name
    restart: always # Always restart the container if it stops
    ports:
      - "8000:80" # Map host port 8000 to container port 80 (HTTP)
    environment:
      GITLAB_OMNIBUS_CONFIG: | # pipe(|) allows multi-line string
        gitlab_rails['initial_root_password'] = 'Shivam@123456789'
        puma['worker_processes'] = 0

    volumes:
      - ./config:/etc/gitlab # Configuration files store at this path on the host
      - ./logs:/var/log/gitlab # Log files store at this path on the host
      - ./data:/var/opt/gitlab # Data files store at this path on the host

  gitlab-runner: # Define the GitLab Runner service
    image: "gitlab/gitlab-runner:latest" # Use the official GitLab Runner image
    container_name: my-gitlab-runner # container name
    restart: always # Always restart the container if it stops
    depends_on:
      - gitlab-server # isme basically gitlab server pe depend kr rha hain mtlb jab tak gitlab server start nhi hoga tab tk ye start nhi hoga
    volumes:
      - ./gitlab-runner/config:/etc/gitlab-runner # Configuration files store at this path on the host
      - /var/run/docker.sock:/var/run/docker.sock # Mount Docker socket for Docker-in-Docker functionality
    privileged: true #so Runners can run docker container easily

```

- Restart the gitlab server container to apply changes.

```bash
docker-compose down
docker-compose up -d
```

- Access GitLab server using `http://localhost:8000` and login with username `root` and password `Shivam@123456789`.


## After Login
- Go to `Admin setting` .
- CI/Cd than Runner section.
- Copy the registration token.
- Than open terminal and exec into gitlab-runner container.

```bash
docker exec -it my-gitlab-runner gitlab-runner register
```
- Paste the copied registration command and follow the prompts to complete the registration process.
- After successful registration, you should see your GitLab Runner listed in the GitLab server's Runners section.
- Now your GitLab Runner is successfully registered with your GitLab Server running on Docker.
- You can now use this runner to execute your CI/CD pipelines defined in your GitLab projects.
```bash
GitLab URL: http://my-gitlab-server/
Registration token: <PASTE TOKEN HERE>
Description: docker-runner
Tags: docker
Executor: docker
Default Docker image: alpine:latest
```

- After register restart the gitlab-runner container to apply changes.

```bash
docker restart my-gitlab-runner
```
- Now execute below command to see the status of gitlab-runner.

```bash
docker exec -it my-gitlab-runner gitlab-runner list
```
