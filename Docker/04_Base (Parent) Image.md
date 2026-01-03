## 🐳 Base (Parent) Image — Easy Explanation

### 🔹 What is a Base Image?
- A **Base (Parent) Image** is the **starting point** for building a Docker image.  
It already contains some basic software so you don’t have to install everything from scratch.

👉 Think of it like a **ready-made foundation** for your application.

- It can be Official images.
- A Dockerfile inherits from a base image using the `FROM` keyword.
(Iska matlab hai ki aap apne Dockerfile mein `FROM` likh kar base image specify karte hain.)
### 🔹 Example of a Base Image
```Dockerfile
From node:14
```
In this example, `node:14` is the base image that includes Node.js version 14 and some essential tools.

---

# Docker Hub :
- It is a *cloud-based repository* for Docker images.
- It allows you to **store, share, and manage** your Docker images.
- It provides pre-built images.
- Here developers can **push and pull** images.