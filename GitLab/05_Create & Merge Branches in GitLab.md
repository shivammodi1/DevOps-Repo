# Branch and Merge in GitLab
This guide will walk you through the process of creating and merging branches in GitLab.

## Creating a Branch
1. **Navigate to Your Project**: Log in to your GitLab account and go to the project where you want to create a branch.
2. **Go to Repository**: Click on the "Repository" tab in the left sidebar.
3. **Select Branches**: Click on "Branches" from the dropdown menu.
4. **Create New Branch**: Click on the "New branch" button.
5. **Name Your Branch**: Enter a name for your new branch and select the source branch (usually `main` or `master`).
6. **Create Branch**: Click on the "Create branch" button to finalize the creation of your new branch.

7. Or we can use the Git command line:
   ```bash
   git checkout -b your-branch-name
   git push -u origin your-branch-name
   ```

## Merging a Branch
1. **Create a Merge Request**: After making changes in your branch, navigate to the
    "Merge Requests" tab and click on "New merge request".  
2. **Select Source and Target Branches**: Choose your source branch (the one you created) and the target branch (usually `main` or `master`).
3. **Review Changes**: Review the changes that will be merged and add a title and description for the merge request.
4. **Submit Merge Request**: Click on the "Create merge request" button.
5. **Approve and Merge**: Once the merge request is reviewed and approved, click on the "Merge" button to merge the changes into the target branch.
6. Or we can use the Git command line:
   ```bash
   git checkout main
   git pull origin main
   git merge your-branch-name
   git push origin main
   ```

   