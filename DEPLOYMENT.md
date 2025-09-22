# GitHub Deployment Instructions

## Prerequisites
- GitHub account (catrionawalsh27)
- Git configured locally
- Command line access

## Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and log into your account
2. Click the "+" icon in the top right and select "New repository"
3. Set repository name to: `uk-climate-visualizer`
4. Add description: "Interactive UK climate visualization with sea level rise projections"
5. Set to **Public** (recommended for portfolio)
6. **Do NOT** initialize with README (we already have one)
7. Click "Create repository"

## Step 2: Configure Git User (if needed)

```bash
git config --global user.name "catrionawalsh27"
git config --global user.email "your-email@example.com"
```

## Step 3: Add GitHub Remote and Push

```bash
# Add GitHub remote (replace with your actual GitHub username if different)
git remote add origin https://github.com/catrionawalsh27/uk-climate-visualizer.git

# Rename branch to main (modern convention)
git branch -M main

# Push to GitHub
git push -u origin main
```

## Step 4: Enable GitHub Pages (Optional)

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll to "Pages" section
4. Under "Source", select "Deploy from a branch"
5. Select "main" branch and "/ (root)" folder
6. Click "Save"

Your site will be available at:
`https://catrionawalsh27.github.io/uk-climate-visualizer/`

**Note**: For GitHub Pages, you'll need to modify the server to serve static files or use a static hosting approach.

## Step 5: Repository Management

### Add collaborators:
- Go to Settings → Manage access → Invite a collaborator

### Create issues:
- Use the Issues tab to track bugs and feature requests

### Set up branch protection:
- Settings → Branches → Add rule for main branch

## Alternative: Static Deployment

If you want to deploy without the Node.js server:

1. Create an `index.html` file that's a copy of `uk-climate-visualizer.html`
2. Host the CSV file statically
3. Remove server dependencies

## Local Development Workflow

```bash
# Make changes
git add .
git commit -m "Description of changes"
git push origin main
```

## Troubleshooting

### Authentication Issues:
- Use Personal Access Token instead of password
- Enable 2FA on GitHub account
- Use SSH keys for seamless authentication

### Large File Issues:
- Use Git LFS for files > 100MB
- Check `.gitignore` for excluded files

### Repository Already Exists:
- Delete existing repository on GitHub first
- Or use different repository name

## Next Steps

1. Add GitHub repository badges to README
2. Set up GitHub Actions for CI/CD
3. Create release versions with tags
4. Add issue and PR templates
