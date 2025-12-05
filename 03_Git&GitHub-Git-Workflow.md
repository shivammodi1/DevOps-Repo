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
