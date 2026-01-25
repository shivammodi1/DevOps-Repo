# Compose File in Docker
- It is a tool for managing multiple containers easily.

- It uses a YAML configuration file for defining multi-container Docker applications.

- Use YAML syntax to define services, networks, and volumes.

- YAML(Yet Another Markup Language) is human-readable and easy to understand.


### Compose file command
To start the services defined in the `docker-compose.yaml` file, use the following command:
```bash
docker-compose up
```
### To stop the services, use:
```bash
docker-compose down
```

### Example of a simple `docker-compose.yaml` file:
```yaml
services:
    img:
        build: .
        container_name: my_container
        ports:
            - 3000:3000
```
- yeh code ko jiska images create karna hain usme 1 file compose.yaml bana kar upar wala code likhna hain.
- phir terminal me ja kar jaha yeh file hain waha ja kar `docker-compose up` command run karna hain.
