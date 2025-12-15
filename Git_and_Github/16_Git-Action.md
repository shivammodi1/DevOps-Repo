# GitHub Action 
- It is a CI/CD tool in GitHub.
- It helps to Automate taks like testing , building and deploying code.
- It works like a Virtual Assistant for developers.
- It uses YAML files to define workflows.

# Why there is need of GitHub Action?
- Automates builds and tests.
- Improve code quality.
- Automate deployment process.
- Save time and effort.
- Scalable and Secure.

# GitHub Actions Workflow
- Ii is a workflow where Automated process that runs on triggers.
- It is defined in YAML files stored in .github/workflows/ directory of a repository.
- It consists of Jobs, which are made up of steps.

# Key Components of GitHub Actions
- **Workflow**: Automated process defined in a YAML file.
- **Job**: A set of steps that execute on the same runner.
- **Step**: A single task within a job, can run commands or actions.
- **Runner**: A server that runs the workflows.
- **Event**: A trigger that starts a workflow (e.g., push, pull request).
- **Action**: A reusable unit of code that can be used in steps.

# Example of GitHub Action Workflow YAML file
```yaml
name: CI
on: [push, pull_request]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Set up Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '14'
    - name: Install dependencies
      run: npm install
    - name: Run tests
      run: npm test
```

# Workflow Execution Process
```             ┌────────────────┐
                │ Event Occurs   │
                │ (push, PR)     │
                └───────┬────────┘
                        │
                        ▼
                ┌───────────────┐
                │   Workflow    |
                │   starts      |
                │  (.yml file)  │
                └───────┬───────┘
                        │
                        ▼
                ┌───────────────┐
                │      Job      │
                │ (build/test)  │
                └───────┬───────┘
                        │
                        ▼
                ┌───────────────┐
                │     Step      │
                │ (commands)    │
                └───────┬───────┘
                        │
                        ▼
                ┌───────────────┐
                │    Runner     │
                │ (VM/Machine)  │
                └───────────────┘

```
# Popular Use Cases of GitHub Actions
- Continuous Integration and Continuous Deployment (CI/CD).
- Automated Testing.
- Code Linting and Formatting.
- Dependency Management.
- Issue and Pull Request Management.
- Notifications and Alerts.
