# Git Branching Strategy

## Branch Types

### Main Branch
- `main` - Production-ready code
- Protected branch (requires PR approval)
- Only merged from `dev` branch

### Development Branch
- `dev` - Ongoing development
- Integration branch for features
- All feature branches merge here first

### Feature Branches
- `feature/feature-name` - Individual features
- Examples:
  - `feature/mobile-home`
  - `feature/web-search`
  - `feature/backend-auth`
  - `feature/user-profile`

### Hotfix Branches
- `hotfix/issue-name` - Critical bug fixes
- Merged directly to `main` and `dev`

## Workflow

1. **Start a new feature:**
   ```bash
   git checkout dev
   git pull origin dev
   git checkout -b feature/your-feature-name
   ```

2. **Work on your feature:**
   ```bash
   git add .
   git commit -m "feat: add feature description"
   git push origin feature/your-feature-name
   ```

3. **Create Pull Request:**
   - From `feature/your-feature-name` → `dev`
   - Get code review
   - Merge after approval

4. **Deploy to production:**
   - Merge `dev` → `main` (after testing)
   - Triggers CI/CD pipeline

## Commit Message Convention

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting)
- `refactor:` - Code refactoring
- `test:` - Adding tests
- `chore:` - Maintenance tasks

Example:
```
feat: add user authentication endpoint
fix: resolve mobile navigation issue
docs: update API documentation
```

