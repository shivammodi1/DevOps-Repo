# Git Reset Command
- The `git reset` command is used to undo changes in your Git repository.
- Same as `git revert` but it modifies the commit history instead of creating a new commit.
- This command is useful when you want to completely remove commits from the history.
# Syntax
```
git reset [--soft | --mixed | --hard] <commit-hash>
```
- Here, `<commit-hash>` is the unique identifier of the commit you want to reset to.
- The options `--soft`, `--mixed`, and `--hard` determine how much of the working directory and staging area are affected:
  - `--soft`: Moves the HEAD to the specified commit but leaves the working directory and staging area unchanged.
  - `--mixed`: Moves the HEAD to the specified commit and resets the staging area, but leaves the working directory unchanged (default behavior).
  - `--hard`: Moves the HEAD to the specified commit and resets both the staging area and working directory to match that commit.
# Example
- Suppose you have made several commits and want to reset to a previous commit with hash `d4e5f6g`.
```
git reset --hard d4e5f6g
```
- After running this command, Git will move the HEAD to the `d4e5f6g` commit and discard all changes made after that commit in both the staging area and working directory.
- Be cautious when using `--hard` as it will permanently delete changes that are not committed.
# To view recent commit hash values
```- git log --oneline

```