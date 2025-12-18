# Create Your First GitHub Actions Workflow
- It is basically used to automate, customize, and execute your software development workflows right in your repository.
- We can create workflow inside the YAML file which is stored in the
    `.github/workflows` directory of your repository.

- When the event is triggered then the workflow will be executed.
- A workflow is made up of one or more jobs and each job is made up of one or more steps.

## Note :- 
- Inside the YAML file indentation is very important.
- Each indentation is done with 2 spaces.
Here is an example of a simple GitHub Actions workflow YAML file:

```yaml
name: Shivam Modi Workflow        # 1. Name of the workflow displays in GitHub Actions tab

on:                               # 2. THE TRIGGER
  push:                           # Runs when a push is made
    branches: [ "main" ]          # Only runs if the push is to the 'main' branch

jobs:                             # 3. THE JOBS
  demo-job:                       # Name of this specific job
    runs-on: ubuntu-latest        # The OS (Runner) where this job executes

    steps:                        # 4. THE STEPS
      - name: Greetings           # Step A: A descriptive name
        run: echo "Hello, Shivam Modi!" 
      
      - name: Run a script        # Step B: Another task
        run: echo "This is my first automated action!"

```

# How to Schedule Github Actions Workflow
- You can schedule a GitHub Actions workflow to run at specific times using cron syntax.
- ```CRON``` is stand for "Command Run ON".
- Using cron syntax, you can define the exact minute, hour, day of the month, month, and day of the week when you want the workflow to run.
-


## Basic Format of Cron Syntax (CRON-> Command Run ON)
-  *  *  *  *  *
-  |  |  |  |  |
-  |  |  |  |  +---- Day of the week (0 - 7) (Sunday=0 or 7)
-  |  |  |  +------- Month (1 - 12)
-  |  |  +---------- Day of the month (1 - 31)
-  |  +------------- Hour (0 - 23)
-  +---------------- Minute (0 - 59)


Here is an example of a GitHub Actions workflow YAML file that is scheduled to run every day at midnight:
```yaml
name: Scheduled Workflow
on:
  schedule:
    - cron: '0 0 * * *'  # This cron expression means "At 00:00 (midnight) every day"
jobs:
  daily-job:
    runs-on: ubuntu-latest
    steps:
      - name: Daily Greeting
        run: echo "This workflow runs every day at midnight!"
```

- In this example, the workflow is named "Scheduled Workflow" and it is set to trigger based on a schedule defined by the cron expression '0 0 * * *', which means it will run at midnight every day.
- The job named "daily-job" will execute on the latest version of Ubuntu, and it contains a single step that prints a greeting message to the console.


## How to Disable a GitHub Actions Workflow
- To disable a GitHub Actions workflow, you can either delete the workflow file form the `.github/workflows` directory or you can modify the workflow file to prevent it from running.
- One common way to disable a workflow without deleting it is to comment out the `on` section or change the event triggers to something that won't occur.
Here is an example of how to disable a workflow by commenting out the `on` section:

```yaml
name: Disabled Workflow
# on:
#   push:
#     branches: [ "main" ]
jobs:
  disabled-job:
    runs-on: ubuntu-latest
    steps:
      - name: This step will not run
        run: echo "This workflow is disabled."
```

- In this example, the `on` section is commented out, which means the workflow will not be triggered by any events.


- Alternatively, you can change the event triggers to something that won't occur, such as a non-existent branch:
```yaml
name: Disabled Workflow
on:
  push:
    branches: [ "non-existent-branch" ]  # This branch does not exist
jobs:
  disabled-job:
    runs-on: ubuntu-latest
    steps:
      - name: This step will not run
        run: echo "This workflow is disabled."
```
- In this case, the workflow is set to trigger on pushes to a branch that does not exist, effectively disabling it.
- Remember to commit and push the changes to your repository for the modifications to take effect.