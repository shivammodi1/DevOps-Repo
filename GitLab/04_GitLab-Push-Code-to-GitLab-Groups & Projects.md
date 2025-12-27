# GitLab : Push Code to GitLab And Work with Groups & Projects

## Create new Group
- 1. Click on the **Menu** icon (three horizontal lines) in the top-left corner.
- 2. Select **Groups** from the dropdown menu.
- 3. Click on the **New group** button.
- 4. Fill in the required details such as **Group name**, **Group URL**, and **Description**.
- 5. Choose the **Visibility Level** (Private, Internal, or Public).
- 6. Click on the **Create group** button to create the group.

## Create new Project within the Group
- 1. Navigate to the group you just created.
- 2. Click on the **New project** button.
- 3. Select **Create blank project**.
- 4. Fill in the **Project name**, **Project slug**, and **Description**.
- 5. Choose the **Visibility Level** (Private, Internal, or Public).
- 6. Click on the **Create project** button to create the project.

## Push Code to the GitLab Project
- 1. Open your terminal or command prompt.
- 2. Navigate to the local directory where your code is located using the `cd` command.
- 3. Initialize a new Git repository (if not already initialized) using the command:
   ```
   git init
   ```
- 4. Add your files to the staging area using the command:
   ```
    git add .
    ```
- 5. Commit your changes with a descriptive message using the command:
    ```
    git commit -m "Initial commit"
    ```
- 6. Copy the GitLab project repository URL (HTTPS or SSH) from the project page.
- 7. Add the remote repository using the command:
    ```
    git remote add origin <repository-URL>
    ```
   Replace `<repository-URL>` with the URL you copied in the previous step.
- 8. Push your code to the GitLab project using the command:
    ```
    git push -u origin master
    ```
Note: If you are using a different branch name, replace `master` with your branch name.
