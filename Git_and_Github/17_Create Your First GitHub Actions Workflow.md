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