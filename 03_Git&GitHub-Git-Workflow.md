# Git WorkFlow :
- Untracked files : files jo git track nahi karta hai.
- Tracked files : files jo git track karta hai.
- Modified files : tracked files jo change ho chuke hain.
- Staged files : files jo commit ke liye ready hote hain.
- Committed files : files jo git repository mein save ho chuke hain.

``` Repository```
    - It is location where all the files and their history are stored.
    - It can be local or remote.
    - Tracks all changes to your projects files.

``` Working Directory```
    - It is Location where you work on your code.
    - Changes made here are not yet saved in Git's history.
    - You can edit, add, or delete files here.

``` Local Repository ```
    - The version of your repository that is stored on your computer.
    - We use it to make commits and view the version history.
    - It is created when you initialize a Git repository using `git init`.

``` Remote Repository ```
    - A version of your repository that is hosted on a server or cloud service (like GitHub, GitLab, Bitbucket).
    - It allows collaboration with others by sharing code and changes.
    - You can push your local commits to the remote repository and pull changes made by others.


# Git Workflow Steps:

               ┌────────────────────────┐
               │   Working Directory    │
               │ (Where you write code) │
               └──────────┬─────────────┘
                    git add <file>
                          |  
                          V
               ┌────────────────────┐
               │    Staging Area    │
               │ (Ready for commit) │
               └──────────┬─────────┘
                          |
                git commit -m "message"
                          |  
                          V
               ┌────────────────────┐
               │  Local Repository  │
               │ (Commits stored)   │
               └──────────┬─────────┘
                          |
                     git push origin main
                          |
                          V
               ┌────────────────────┐
               │ Remote Repository  │
               │  (GitHub, GitLab)  │
               └────────────────────┘


# Key Git Commands in Workflow:
- `git add <file>` : Stages changes in the working directory for the next commit.
- `git commit -m "message"` : Commits the staged changes to the local repository with a descriptive message.
- `git push origin <branch>` : Pushes committed changes from the local repository to the remote repository.
- `git pull origin <branch>` : Fetches and merges changes from the remote repository to the local repository.
- `git status` : Checks the status of files in the working directory and staging area.
- `git log` : Views the commit history in the local repository.
- `git clone <repository_url>` : Clones a remote repository to your local machine.
- `git checkout <branch_name>` : Switches to a different branch in the local repository.
- `git merge <branch_name>` : Merges changes from one branch into the current branch.
- `git branch` : Lists all branches in the local repository.
- `git remote add origin <repository_url>` : Adds a remote repository to your local repository.


# Git-Ignore :
- A special file named `.gitignore` is used to tell Git which files or directories to ignore in a project.
- It helps to avoid committing unnecessary files like build files, temporary files, or sensitive information.
- You can create a `.gitignore` file in the root directory of your project and list the files or patterns you want Git to ignore.
- Example of `.gitignore` file:
  ```
  # Ignore all .log files
  *.log

  # Ignore the build directory
  /build/

  # Ignore sensitive files
  config/secrets.yml
  ```   

