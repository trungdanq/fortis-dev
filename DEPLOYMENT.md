# 🚀 Deploying Fortis Landing Page to GitHub Pages

This guide will help you deploy your React Vite application to GitHub Pages.

## 📋 Prerequisites

- GitHub account
- Git installed on your computer
- Node.js and npm installed

## 🛠️ Setup Steps

### 1. Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it something like `fortis-landing-page` or any name you prefer
3. Make it public (required for free GitHub Pages)
4. Don't initialize with README since you already have files

### 2. Update Configuration Files

**IMPORTANT:** You need to update two files with your actual repository information:

#### Update `package.json`:
```json
"homepage": "https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME"
```

#### Update `vite.config.ts`:
```typescript
base: process.env.NODE_ENV === 'production' ? '/YOUR_REPOSITORY_NAME/' : '/'
```

Replace:
- `YOUR_USERNAME` with your GitHub username
- `YOUR_REPOSITORY_NAME` with your repository name

### 3. Initialize Git and Push to GitHub

```bash
# Initialize git repository
git init

# Add all files
git add .

# Make initial commit
git commit -m "Initial commit: Fortis Landing Page"

# Add your GitHub repository as origin
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git

# Push to GitHub
git push -u origin main
```

## 🚀 Deployment Methods

### Method 1: Automatic Deployment (Recommended)

The GitHub Actions workflow is already set up! Once you push to the `main` branch:

1. GitHub Actions will automatically build your project
2. Deploy it to GitHub Pages
3. Your site will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME`

### Method 2: Manual Deployment

If you prefer manual deployment:

```bash
# Build and deploy manually
npm run deploy
```

This will:
- Build your project (`npm run build`)
- Deploy to the `gh-pages` branch
- Make your site live

## ⚙️ GitHub Pages Settings

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select:
   - **Deploy from a branch** 
   - Branch: **gh-pages**
   - Folder: **/ (root)**
5. Click **Save**

## 🔍 Verification

After deployment, your site should be available at:
```
https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME
```

It may take a few minutes for changes to appear.

## 🔄 Making Updates

To update your site:

1. Make changes to your code
2. Commit and push to main branch:
   ```bash
   git add .
   git commit -m "Update: description of changes"
   git push origin main
   ```
3. GitHub Actions will automatically redeploy
4. Or run `npm run deploy` for manual deployment

## 🐛 Troubleshooting

### Site not loading correctly
- Check that the `base` path in `vite.config.ts` matches your repository name
- Verify the `homepage` in `package.json` is correct

### 404 errors on page refresh
- This is normal for SPAs on GitHub Pages
- Users should navigate through the app, not refresh on sub-routes

### Build fails
- Check the Actions tab in your GitHub repository for error details
- Ensure all dependencies are properly installed

### Fonts or images not loading
- Ensure all asset paths are relative
- Check browser console for 404 errors

## 📁 Project Structure

Your deployed site will include:
- ✅ Responsive design
- ✅ Montserrat font family
- ✅ Scroll animations
- ✅ React routing
- ✅ All brand pages
- ✅ Contact forms
- ✅ Distribution information

## 🎯 Performance Tips

- Images are optimized for web
- Fonts are loaded efficiently from Google Fonts
- Animations are performance-optimized
- Build is optimized for production

## 📞 Support

If you encounter issues:
1. Check the GitHub Actions logs
2. Verify your configuration files
3. Ensure your repository is public
4. Check the browser console for errors

---

**Your Fortis Landing Page will be live and professional! 🎉**
