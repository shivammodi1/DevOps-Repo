# Git Diff Command
- It is basically used for comparing changes between commits, branches, files, etc.
- It shows the differences line by line, indicating what has been added, removed, or modified.

##vHow to Use Git Diff
```bash
git diff [options] [<commit>] [--] [<path>...]
```
example:
```bash
git diff HEAD~1 HEAD
```
- This command compares the changes between the last commit (HEAD) and the commit before it (HEAD~1).
- You can also compare changes between branches:
```bash
git diff main feature-branch
```
- This command compares the changes between the `main` branch and the `feature-branch`.
- To see changes in a specific file:
```bash
