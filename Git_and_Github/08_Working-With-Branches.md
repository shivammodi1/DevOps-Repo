# How to Work with Branches in Git and GitHub
- Branches Basically used to create seperate line of development in a project without affecting the main branch.
- Branches helps the developer to work in team and manage different features or bug fixes independently without interfering with the main codebase.
- By default, Git creates a branch named `main` (or `master` in older versions) when you initialize a new repository.

# Creating a New Branch
- 1. To create a new branch, use the following command:
```
git branch <branch-name>
```

- 2. To check the list of branches in your repository, use:
```git branch
```

- 3. To switch to a different branch, use:
```
git checkout <branch-name>
git switch <branch-name> (alternative command)
```
- 4. You can also create and switch to a new branch in a single command:
```
git checkout -b <branch-name> (like yeh phale branch create karega aur fir usme switch karega)
git switch -c <branch-name> (alternative command)
```
- 5. To Delete a branch, use:
```
git branch -d <branch-name>
```
- 6. To Merge a branch in another branch, first switch to the branch you want to merge into, then use:
```
git merge <branch-name>
```


# Summary 
- Like branches hum use krte hain taaki hum same project me multiple persons ke sath alag alag features pe kaam kr sake bina main file k affect kiye.
- Jaise hi hum new branch create karte hain, switch krne ke baad hum us barnch me koi bhi changes karege to wo sirf usi branch me reflect hoga.
- Jab hum satisfied hote hain apne changes se, tab hum us branch ko main branch me merge kar dete hain.