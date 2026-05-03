# Deployment Guide

Your portfolio is built with Next.js and is optimized for modern deployment platforms. Here are the easiest ways to deploy it.

## Option 1: Vercel (Recommended)

Vercel is the creator of Next.js and provides the best experience for deploying Next.js apps.

1. **Push your code to GitHub**:
   ```bash
   git add .
   git commit -m "Prepare for deployment"
   git push origin main
   ```
2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com/) and sign up/login.
   - Click "Add New" -> "Project".
   - Import your GitHub repository.
   - Vercel will automatically detect Next.js and configure the build settings.
   - Click **Deploy**.

## Option 2: Netlify

Netlify is another great option for static and dynamic Next.js sites.

1. **Push your code to GitHub**.
2. **Connect to Netlify**:
   - Go to [netlify.com](https://app.netlify.com/).
   - Click "Add new site" -> "Import an existing project".
   - Connect to GitHub and select your repo.
   - Ensure the build command is `npm run build` and the publish directory is `.next`.
   - Click **Deploy**.

## Performance Tips

- **Image Optimization**: Ensure all images (like `avatar.png`) are optimized. Next.js handles this automatically if you use the `<Image />` component.
- **Environment Variables**: If you add a contact form backend later, remember to add the environment variables in the Vercel/Netlify dashboard.
- **Analytics**: Vercel offers built-in analytics to track your portfolio's performance.

## Manual Build Test

Before deploying, you can run a production build locally to ensure everything is correct:

```bash
npm run build
npm run start
```
