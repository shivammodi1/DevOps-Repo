# GitLab Server with Docker Volumes for Data Persistence

- We use Docker Volumes because without volumes, if the GitLab container is removed or recreated, *all data inside the container is also removed*. This means we would lose all our Git repositories, configurations, and user data.
- *Docker Volumes* Provide the storage mechanism , so it will store the data outside the container on the *host machine*.
- This way, even if the container is deleted or recreated, the data remains intact and can be reused by a new container.

## Using Compose file with Volumes
Here is an example of a `docker-compose.yml` file that sets up a GitLab server with Docker volumes for data persistence:

```yaml
version: '3.8'    # Specify the version of the Docker Compose file format
services:
  gitlab-server:                            # Define the GitLab service
    image: 'gitlab/gitlab-ce'               # Use the Community Edition of GitLab
    container_name: my-gitlab-server        # container name
    ports:
      - '8000:80'                           # Map host port 8000 to container port 80 (HTTP)
    environment:
      GITLAB_OMNIBUS_CONFIG: |               # pipe(|) allows multi-line string
        gitlab_rails['initial_root_password'] = 'Shivam@123456789'
        puma['worker_processes'] = 0
    
    volumes:
      - ./gitlab/config:/etc/gitlab    # Configuration files store at this path on the host
      - ./gitlab/logs:/var/log/gitlab  # Log files store at this path on the host
      - ./gitlab/data:/var/opt/gitlab # Data files store at this path on the host

```
- In this example:
  - We define a service named `gitlab-server` using the `gitlab/gitlab-ce` image.
  - We map port `8000` on the host to port `80` in the container, allowing access to GitLab via `http://localhost:8000`.
  - We set environment variables to configure GitLab, including setting an initial root password.
  - We define three volumes to persist configuration files, log files, and data files on the host machine under the `./gitlab/` directory.

- To start the GitLab server with this configuration, run the following command in the directory where the `docker-compose.yml` file is located:
```bash
docker-compose up 
```

- This command will create and start the GitLab container, and the data will be stored in the specified volumes on the host machine, ensuring persistence across container restarts or recreations.

