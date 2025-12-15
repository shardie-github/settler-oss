# Vercel Deployment Guide

This guide explains how to deploy the Settler Web app to Vercel.

## Quick Start

### Option 1: Vercel Dashboard (Recommended)

1. **Connect Repository**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository

2. **Configure Project**
   - **Root Directory**: `apps/web`
   - **Framework Preset**: Next.js (auto-detected)
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `.next` (auto-detected)
   - **Install Command**: `npm install` (auto-detected)

3. **Deploy**
   - Click "Deploy"
   - Vercel will automatically build and deploy

### Option 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Navigate to web app
cd apps/web

# Deploy
vercel

# Follow prompts:
# - Set up and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No (first time) or Yes (updates)
# - Project name? settler-web (or your choice)
# - Directory? ./apps/web (or just . if already in apps/web)
```

## Configuration Files

### Root `vercel.json` (Optional)

Located at `/workspace/vercel.json` - for monorepo setup if deploying from root.

### App `vercel.json`

Located at `/workspace/apps/web/vercel.json` - app-specific configuration.

**Current Configuration**:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "framework": "nextjs",
  "installCommand": "npm install"
}
```

## Environment Variables

No environment variables required for basic deployment.

If you need to add environment variables later:
1. Go to Vercel Dashboard → Project → Settings → Environment Variables
2. Add variables (e.g., `NEXT_PUBLIC_API_URL`)

## Custom Domain

### Adding a Domain

1. Go to Vercel Dashboard → Project → Settings → Domains
2. Click "Add Domain"
3. Enter your domain (e.g., `settler.dev`)
4. Follow DNS configuration instructions

### DNS Configuration

Vercel will provide DNS records to add:
- **A Record**: `@` → Vercel IP
- **CNAME Record**: `www` → `cname.vercel-dns.com`

Or use Vercel's nameservers if managing DNS through Vercel.

## Build Settings

### Automatic Detection

Vercel automatically detects:
- ✅ Next.js framework
- ✅ Build command
- ✅ Output directory
- ✅ Install command

### Manual Override (if needed)

In Vercel Dashboard → Project → Settings → General:
- **Root Directory**: `apps/web`
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`
- **Node.js Version**: 18.x or 20.x

## Monorepo Configuration

If deploying from repository root:

1. **Root Directory**: Set to `apps/web` in Vercel settings
2. **Build Command**: `cd apps/web && npm install && npm run build`
3. **Install Command**: `npm install` (installs root + workspace dependencies)

## Deployment Workflow

### Automatic Deployments

- **Production**: Deploys on push to `main` branch
- **Preview**: Creates preview deployments for pull requests

### Manual Deployment

```bash
cd apps/web
vercel --prod
```

## Verification

After deployment:

1. ✅ Visit your Vercel URL (e.g., `settler-web.vercel.app`)
2. ✅ Check all routes load:
   - `/` - Homepage
   - `/protocol` - Protocol docs
   - `/download` - SDK downloads
   - `/docs` - Documentation
3. ✅ Verify build logs in Vercel Dashboard

## Troubleshooting

### Build Fails

**Issue**: Build command fails
**Solution**: 
- Check build logs in Vercel Dashboard
- Ensure `apps/web` has `package.json` and `next.config.js`
- Verify Node.js version (18+)

### Routes Not Found

**Issue**: 404 errors on routes
**Solution**:
- Ensure `apps/web` is set as root directory
- Check `next.config.js` for correct configuration
- Verify routes exist in `apps/web/src/app/`

### Environment Variables Not Working

**Issue**: Environment variables not accessible
**Solution**:
- Prefix with `NEXT_PUBLIC_` for client-side variables
- Redeploy after adding environment variables
- Check Vercel Dashboard → Settings → Environment Variables

## Production Checklist

Before going live:

- [ ] Domain configured and DNS updated
- [ ] SSL certificate active (automatic with Vercel)
- [ ] All routes tested
- [ ] Environment variables set (if needed)
- [ ] Analytics configured (optional)
- [ ] Monitoring set up (optional)

## Support

- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **Next.js Deployment**: [nextjs.org/docs/deployment](https://nextjs.org/docs/deployment)
- **Vercel Support**: [vercel.com/support](https://vercel.com/support)

---

Last updated: 2024-01-XX
