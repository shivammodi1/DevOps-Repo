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
name : Shivam Modi Workflow  # Name of the workflow

on:                          # Event that triggers the workflow
    push: