# Git Diff Command
- It is basically used for comparing changes between commits, branches, files, etc.
- It shows the differences line by line, indicating what has been added, removed, or modified.

## How to Use Git Diff
```bash
git diff [options] [<commit>] [--] [<path>...]
```
example:
```bash
git diff HEAD~1 HEAD
```
This command compares the changes between the last commit (HEAD) and the commit before it (HEAD~1).

- You can also compare changes between branches:
```bash
git diff main feature-branch
```
This command compares the changes between the `main` branch and the `feature-branch`.

- To see changes in a specific file:
```bash
git diff HEAD~1 HEAD -- path/to/file.txt
```

- To see staged changes (changes that have been added to the staging area):
```bash
git diff --staged
```

- To see changes between local repo and remote repo:
```bash
git diff origin/main
```
This command shows the differences between your local branch and the remote `main` branch.
