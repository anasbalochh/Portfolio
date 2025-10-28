# Deployment Configuration - portfolio-anasss

## ✅ Current Setup

The portfolio is deployed on Vercel and ready to use!

**Note:** To rename the project from "portfolio" to "portfolio-anasss" on Vercel:

### Option 1: Via Vercel Dashboard (Recommended)
1. Go to https://vercel.com/dashboard
2. Click on the "portfolio" project
3. Go to **Settings** → **General**
4. Change the project name to "portfolio-anasss"
5. Save changes

### Option 2: Via Vercel CLI
```bash
vercel project rename portfolio portfolio-anasss
```

## 🌐 Custom Domain Setup

After renaming, set up a custom domain:

1. Go to https://vercel.com/dashboard
2. Select your project (portfolio or portfolio-anasss)
3. Navigate to **Settings** → **Domains**
4. Click **Add** and enter your domain
5. Follow Vercel's DNS configuration instructions

Example custom domains you can use:
- `portfolio-anasss.vercel.app` (Vercel auto-generated after rename)
- Your own domain like `anasss.com`
- Subdomain like `portfolio.yourdomain.com`

## 📝 Current Configuration

- **Project Name:** portfolio (to be renamed to portfolio-anasss)
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Framework:** Vite
- **Node Version:** 22.x

## 🔗 Links

- **Current Live URL:** Check your Vercel dashboard
- **GitHub:** https://github.com/anasbalochh/Portfolio
- **Auto-Deploy:** Enabled (deploys on every push to main branch)

## ⚙️ Project Settings

The deployment uses the following configuration files:

- **vercel.json** - Vercel deployment configuration
- **vite.config.ts** - Build configuration
- **package.json** - Dependencies and scripts

All changes pushed to GitHub will automatically deploy to Vercel!

