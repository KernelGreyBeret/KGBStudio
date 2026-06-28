# GitHub Repo Protection Checklist

Recommended while KGB Studio is private:

## Repo visibility

- Keep the repo **Private** for now.
- Do not add collaborators unless needed.

## Branch protection

In GitHub:

`Settings → Branches → Add branch protection rule`

For branch name pattern:

```text
main
```

Recommended settings:

- Require a pull request before merging
- Require approvals
- Dismiss stale pull request approvals when new commits are pushed
- Require review from Code Owners
- Require status checks before merging, once checks exist
- Require conversation resolution before merging
- Do not allow bypassing the above settings
- Restrict who can push to matching branches, if available

## Actions permissions

`Settings → Actions → General`

Recommended:

- Disable Actions until needed, or
- Allow only selected actions
- Require approval for outside collaborators

## Secrets

`Settings → Secrets and variables → Actions`

- Do not add secrets unless absolutely needed.
- Never commit secrets into the repo.

## Collaborators

`Settings → Collaborators`

- Use least privilege.
- Prefer read access unless someone truly needs write access.
- Remove inactive collaborators.

## CODEOWNERS

This package includes:

```text
.github/CODEOWNERS
```

Update `@KernelGreyBeret` if your GitHub username is different.
