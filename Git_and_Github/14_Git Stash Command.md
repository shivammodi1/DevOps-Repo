# Git Stash Command
- The `git stash` command is used to temporarily save changes that are not yet ready to be committed. This allows you to switch branches or work on something else without losing your current changes.
- To stash your changes, use the following command:
```bash
git stash
```
This command saves your modified tracked files and staged changes to a new stash and reverts the working directory to match the HEAD commit.

- To view the list of stashes you have saved, use:
```bash
git stash list
```
This will display a list of all stashes along with their identifiers.