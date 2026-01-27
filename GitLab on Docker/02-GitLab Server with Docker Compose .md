# GitLab Server with Docker Compose
- Docker Compose ka use karke hum multiple services ko easily manage kar sakte hain, jaise ki GitLab server aur uske dependencies.
- Isse hum apne GitLab server ko ek single configuration file se define aur run kar sakte hain.
## Prerequisites:
- Docker aur Docker Compose installed on your machine.
- Basic knowledge of Docker Compose.

## Steps to Setup GitLab Server with Docker Compose:
1. **Create a `docker-compose.yml` file:**
```yaml
version: '3.8'    # Specify the version of the Docker Compose file format
services:
  gitlab-server:                            # Define the GitLab service
    image: 'gitlab/gitlab-ce'               # Use the Community Edition of GitLab
    container_name: my-gitlab-server        # container name
    ports:
      - '8000:80'                       # Map host port 8000 to container port 80 (HTTP)
    environment:
      - GITLAB_OMNIBUS_CONFIG: |        # pipe(|) allows multi-line string
          gitlab_rails['initial_root_password'] = 'Shivam@123456789';
          puma['worker_processes'] = 0;    
```
## 🧩 Docker Compose Configuration Explanation

### 🔹 `version: '3.8'`
- Yeh Docker Compose file format ka version hota hai  
- Docker ko batata hai kaunsa syntax aur features use karne hain

---

### 🔹 `services`
- `services` section me hum containers define karte hain  
- Har service ek Docker container ko represent karti hai

---

### 🔹 `gitlab-server`
- Yeh GitLab service ka logical naam hai  
- Docker Compose isi naam se GitLab container ko identify karta hai

---

### 🔹 `image: gitlab/gitlab-ce`
- GitLab Community Edition ka official Docker image use hota hai  
- Yeh GitLab ka open-source version hai

---

### 🔹 `container_name: my-gitlab-server`
- Container ka fixed naam set karta hai  
- Isse container ko manage karna easy ho jaata hai (start, stop, exec commands)

---

### 🔹 `ports`
- Host system aur container ke beech port mapping define karta hai  

#### `8000:80`
- Host machine ka port **8000** container ke port **80** se map hota hai  
- Browser me `http://localhost:8000` open karke GitLab access kiya jaata hai

---

### 🔹 `environment`
- GitLab ke configuration options environment variables ke through pass kiye jaate hain  
- GitLab Omnibus configuration yahin se apply hoti hai

---

### 🔹 `GITLAB_OMNIBUS_CONFIG`
- Yeh GitLab ka main configuration block hota hai  
- `|` (pipe) ka use multi-line configuration likhne ke liye hota hai  
- Yeh internally `/etc/gitlab/gitlab.rb` file ki tarah kaam karta hai

---

### 🔹 `gitlab_rails['initial_root_password']`
- GitLab ka **initial root user password** set karta hai  
- Yeh password sirf **first time startup** par apply hota hai  
- Baad me GitLab UI se password change kiya ja sakta hai

---

### 🔹 `puma['worker_processes'] = 0`
- Puma GitLab ka application server hota hai  
- `0` ka matlab:
  - Puma **single-process mode** me chalega  
  - Cluster mode disable ho jaata hai  

#### 💡 Reason:
- Docker aur low-resource systems me multi-worker Puma kabhi-kabhi instability create karta hai  
- Isliye worker processes ko `0` set kiya jaata hai taaki GitLab stable rahe

---

## Running the GitLab Server:
- `docker-compose up` command run karke GitLab server ko background me start karein
- Browser me `http://localhost:8000` open karke GitLab access karein
- Initial root password ke liye `Shivam@123456789` use karein
- First login ke baad password change karna na bhoolen!
## To delete all images and containers
```bash
docker-compose down --rmi all
```