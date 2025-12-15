# Create and Merge Pull Requests

- For creating pull requests on Github first you need to fork a repository.
- After forking the repository, clone it to your local machine using `git clone <forked-repo-url>`.
- Create a new branch for your changes using `git checkout -b <branch-name>`.
- Make your changes and commit them using `git add .` and `git commit -m "Your commit message"`.
- Push your changes to your forked repository using `git push origin <branch-name>`.
- Go to your forked repository on Github and you will see a prompt or option to create a pull request.
- Click on "Compare & pull request" button.
- Add a title and description for your pull request, then click on "Create pull request".

# Merging Pull Requests
- Once your pull request is reviewed and approved, you can merge it into the main repository.
- To merge the pull request, go to the original repository on Github where you created the pull request.
- Click on the "Merge pull request" button.
- Confirm the merge by clicking on "Confirm merge".
- After merging, you can delete the branch if it is no longer needed by clicking on "Delete branch".
- Finally, sync your local repository with the main repository using `git fetch upstream` and `git merge upstream/main` (replace `main` with the appropriate branch name if different).
