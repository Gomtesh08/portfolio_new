# Deployment Guide

This guide will help you deploy your portfolio website to production.

## Deployment Options

Your portfolio is a static React application that can be deployed to any static hosting service.

## Option 1: Vercel (Recommended)

### Deploy via Vercel Dashboard

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Configure project:
     - Framework Preset: Vite
     - Root Directory: `frontend`
     - Build Command: `npm run build`
     - Output Directory: `dist`
   - Click "Deploy"

### Deploy via Vercel CLI

```bash
cd frontend
npm install -g vercel
vercel login
vercel --prod
```

## Option 2: Netlify

1. **Push to GitHub** (if not already done)

2. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub repository
   - Configure:
     - Base directory: `frontend`
     - Build command: `npm run build`
     - Publish directory: `frontend/dist`
   - Click "Deploy"

## Option 3: GitHub Pages

1. **Install gh-pages**
   ```bash
   cd frontend
   npm install --save-dev gh-pages
   ```

2. **Add deploy script to package.json**
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

## Option 4: Cloudflare Pages

1. **Push to GitHub** (if not already done)

2. **Deploy to Cloudflare Pages**
   - Go to [pages.cloudflare.com](https://pages.cloudflare.com)
   - Click "Create a project"
   - Connect your GitHub repository
   - Configure:
     - Framework preset: Vite
     - Build command: `npm run build`
     - Build output directory: `dist`
     - Root directory: `frontend`
   - Click "Save and Deploy"

## Build Locally

To build the project locally:

```bash
cd frontend
npm run build
```

The built files will be in `frontend/dist` directory.

## Custom Domain (Optional)

### Vercel
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

### Netlify
1. Go to Domain Settings
2. Add custom domain
3. Update DNS records

### Cloudflare Pages
1. Go to Custom Domains
2. Add your domain
3. DNS is automatically configured if using Cloudflare

## SSL/HTTPS

All hosting platforms (Vercel, Netlify, Cloudflare Pages, GitHub Pages) provide free SSL certificates automatically.

## Post-Deployment Checklist

- [ ] Website is accessible
- [ ] Contact form opens email client correctly
- [ ] All links are working
- [ ] Dark mode toggle works
- [ ] Mobile responsive
- [ ] SEO meta tags are correct
- [ ] Resume download works
- [ ] All images load correctly
- [ ] Analytics added (optional)

## Monitoring

### Vercel
- Automatic deployment logs
- Analytics available in dashboard
- Real-time performance metrics

### Netlify
- Deploy logs and previews
- Analytics (paid feature)
- Form submissions tracking

### Cloudflare Pages
- Deployment logs
- Web Analytics (free)
- Performance insights

## Troubleshooting

### Build Failures
- Check Node.js version compatibility (v16 or higher)
- Verify all dependencies are in `package.json`
- Check build logs for specific errors
- Make sure `frontend` is set as root directory

### 404 Errors on Refresh
For single-page applications, configure redirects:

**Vercel**: Automatically handled

**Netlify**: Create `frontend/public/_redirects`:
```
/*    /index.html   200
```

**Cloudflare Pages**: Automatically handled

### Images Not Loading
- Ensure images are in `frontend/public` directory
- Use absolute paths: `/images/photo.jpg`
- Check image file names match exactly (case-sensitive)

## Cost

All recommended platforms offer generous free tiers:

- **Vercel**: Free (100GB bandwidth/month, unlimited projects)
- **Netlify**: Free (100GB bandwidth/month, 300 build minutes)
- **Cloudflare Pages**: Free (unlimited bandwidth, 500 builds/month)
- **GitHub Pages**: Free (1GB storage, 100GB bandwidth/month)

## Updates

To update your deployed site:

1. Make changes locally
2. Test locally with `npm run dev`
3. Commit and push to GitHub
4. Platform will auto-deploy (usually within 1-2 minutes)

Or use CLI:
```bash
cd frontend
vercel --prod  # for Vercel
# or
netlify deploy --prod  # for Netlify
```

## Performance Tips

- Enable compression (automatic on most platforms)
- Use lazy loading for images
- Minimize bundle size
- Enable caching headers
- Use CDN (automatic on Vercel, Netlify, Cloudflare)

## Support

For issues, check:
- Vercel Docs: https://vercel.com/docs
- Netlify Docs: https://docs.netlify.com
- Cloudflare Pages Docs: https://developers.cloudflare.com/pages
- GitHub Pages Docs: https://docs.github.com/pages

