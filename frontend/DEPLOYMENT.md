# Firebase Deployment Guide

This project is configured to automatically deploy to Firebase Hosting using GitHub Actions.

## Configuration Files

- `.github/workflows/firebase-deploy.yml` - CI/CD pipeline configuration
- `firebase.json` - Firebase Hosting configuration
- `.firebaserc` - Firebase project configuration
- `next.config.js` - Next.js configured for static export

## Deployment Details

- **Project ID**: `sample-project-5bea9`
- **Hosting URL**: `cutitsaloon.web.app`
- **Build Output**: `out/` directory (Next.js static export)

## How It Works

1. When code is pushed to `main` or `master` branch, the workflow triggers
2. The workflow:
   - Checks out the code
   - Installs Node.js dependencies
   - Builds the Next.js app (creates static files in `out/` directory)
   - Deploys to Firebase Hosting

## Manual Deployment

You can also trigger the deployment manually:
1. Go to GitHub Actions tab in your repository
2. Select "Deploy to Firebase Hosting" workflow
3. Click "Run workflow"

## Security: Moving to GitHub Secrets

Currently, the Firebase token is hardcoded in the workflow file. To secure it:

1. Go to your GitHub repository
2. Navigate to Settings → Secrets and variables → Actions
3. Add the following secrets:
   - `FIREBASE_TOKEN`: Your Firebase token
   - `FIREBASE_PROJECT`: `sample-project-5bea9`

4. Update `.github/workflows/firebase-deploy.yml`:
   ```yaml
   env:
     FIREBASE_TOKEN: ${{ secrets.FIREBASE_TOKEN }}
     FIREBASE_PROJECT: ${{ secrets.FIREBASE_PROJECT }}
   ```

## Local Testing

To test the build locally:

```bash
npm run build
# This will create the 'out' directory with static files

# To test Firebase deployment locally (requires Firebase CLI):
firebase deploy --only hosting
```

## Troubleshooting

- **Build fails**: Check that all dependencies are installed and Next.js config is correct
- **Deployment fails**: Verify Firebase token is valid and project ID is correct
- **Static export issues**: Ensure `next.config.js` has `output: 'export'` configured
