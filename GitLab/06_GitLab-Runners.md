# GitLab Runners
- It is a light-weight executer that execute CI/CD jobs in a pipeline.
- Runs scripts defined in `.gitlab-ci.yml`.
- Can be shared , group or specific runners.

## Types of Runners
1. **Shared Runners**:
   - Managed by GitLab, available for all projects.
   - Ideal for small to medium projects.
   - Used for public repositories by default.

2. **Group Runners**:
   - Available to all projects within a specific group.
   - Managed by group owners.
   - Useful for organizations with multiple related projects.

3. **Specific Runners**:
   - Dedicated to a single project.
   - Managed by project maintainers.
   - Suitable for projects with specific requirements or heavy workloads.

   