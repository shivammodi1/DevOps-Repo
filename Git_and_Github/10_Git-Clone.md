# Git Clone 
- It is used to create a copy of an existing Git repository.
- The command is `git clone <repository-url>`.

# Why we Prefer Git Clone rather than Downloading Zip File?
- When we download a zip fie of a repository, we only get the current snapshot of the files, without any version history or Git functionality.
But By using `git clone`, we get the entire repository along with its full history , branches and commit information.
- Cloning a repository allows us to easily collaborate with others, make changes, and push updates back to the original repository.

# Example of Git Clone
```bash
git clone <repository-url>
```
- This command creates a local copy of the repository on your machine.
- After cloning, you can navigate into the cloned repository using `cd <repository-name>`.