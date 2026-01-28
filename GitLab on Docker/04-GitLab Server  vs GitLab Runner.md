# GitLab Server Vs GitLab Runner

## GitLab Server
1. It is a web-based Git repository for managing code, issues, and CI/CD pipelines.
2. It provides a user interface for managing repositories, users, and projects.

## GitLab Runner
- It is a *lightweight agent* thats runs *CI/CD Jobs* from GitLab Server.
- Runners can be shared(used by multiple projects) or specific(to a single project).

## Important Concepts
- Without GitLab Runner, CI/CD pipelines cannot be executed.
- GitLab Server manages the overall CI/CD process, while GitLab Runner executes the individual jobs defined in the pipeline.
- so we need both GitLab Server and GitLab Runner to implement CI/CD pipelines effectively.


# CI/CD Pipeline
- A CI/CD pipeline is a series of automated steps that take code from version control, build it, test it, and deploy it to production.
- It will continously test the code if any issue is there immediately developers will get notified.
- It helps in faster delivery of software and improves code quality by catching issues early in the development process.