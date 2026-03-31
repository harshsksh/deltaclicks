# Phase 8: Deployment to Vercel & Domain Setup
## Complete Step-by-Step Guide

---

## Phase 8.1 - Pre-Deployment Checklist ✅

### Status: COMPLETED

| Item | Status | Details |
|------|--------|---------|
| console.log removed | ✅ | None found in codebase |
| .env.local in .gitignore | ✅ | Line 34: `.env*` |
| Build passes | ✅ | 33 pages, 0 errors |
| Lint passes | ✅ | 0 errors, 0 warnings |
| Images verified | ⬜ | Check during manual test |
| generateStaticParams exported | ✅ | Services, Portfolio, Blog |

**Build Output:**
```
✓ Compiled successfully in 7.9s
✓ Generating static pages (33/33) in 1740ms
✓ Finalizing page optimization in 120ms
```

---

## Phase 8.2 - Deploy to Vercel

### Step-by-Step Instructions

#### Step 1: Push to GitHub (if not already done)

```bash
# Check git status
git status

# Add all changes
git add .

# Commit with message
git commit -m "Complete Phase 7 - Ready for deployment"

# Push to GitHub
git push origin main
```

#### Step 2: Create Vercel Account

1. Go to **https://vercel.com**
2. Click **"Sign Up"**
3. Sign up with **GitHub** (recommended) or email
4. Verify your email address

#### Step 3: Create New Project

1. Click **"Add New Project"** on Vercel dashboard
2. Select **"Import Git Repository"**
3. Find and select **"deltaclicks"** from your repositories
4. Click **"Import"**

#### Step 4: Configure Project

**Project Settings:**
- **Framework Preset:** Next.js (auto-detected)
- **Root Directory:** `./` (default)
- **Build Command:** `npm run build` (default)
- **Output Directory:** `.next` (default)

**DO NOT CHANGE THESE - They're auto-detected correctly!**

#### Step 5: Add Environment Variables

**CRITICAL STEP** - Before clicking Deploy:

1. Click **"Environment Variables"** in the project setup
2. Click **"Add Variable"**
3. Add the following:

| Name | Value | Environments |
|------|-------|--------------|
| `NEXT_PUBLIC_WEB3FORMS_KEY` | `your_actual_key_here` | ✅ Preview ✅ Production ✅ Development |

**To get your Web3Forms key:**
1. Go to **https://web3forms.com**
2. Click **"Get Started"** or **"Sign Up"**
3. Enter your email address
4. Copy the **Access Key** from your dashboard
5. Paste it as the value above

#### Step 6: Deploy

1. Click **"Deploy"**
2. Wait for build to complete (~2-3 minutes)
3. You'll see a **"Congratulations"** screen
4. Click on the preview image to view your site

**Your preview URL will be:**
```
https://deltaclicks-xxxx.vercel.app
```

---

## Phase 8.3 - Connect Custom Domain

### Step 1: Add Domain in Vercel

1. Go to your project in Vercel dashboard
2. Click **"Settings"** tab
3. Click **"Domains"** in left sidebar
4. Click **"Add Domain"** button
5. Enter your domain name:
   - `deltaclicks.com` (or your client's domain)
   - Click **"Add"**
6. Click **"Add Domain"** again for `www.deltaclicks.com`

### Step 2: Configure DNS Records

Vercel will show you the required DNS records. You need to add these at your domain registrar.

**Record 1: A Record (Root Domain)**
```
Type: A
Name: @
Value: 76.76.21.21
TTL: Auto or 3600
```

**Record 2: CNAME Record (WWW Subdomain)**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: Auto or 3600
```

### Step 3: Add DNS Records at Your Registrar

**For GoDaddy:**
1. Log into GoDaddy
2. Go to **"My Products"**
3. Click **"DNS"** next to your domain
4. Click **"Add New Record"**
5. Add the A record and CNAME record as shown above
6. Click **"Save"**

**For Namecheap:**
1. Log into Namecheap
2. Click **"Domain List"**
3. Click **"Manage"** next to your domain
4. Go to **"Advanced DNS"** tab
5. Click **"Add New Record"**
6. Add the A record and CNAME record
7. Click **"Save"**

**For Other Registrars:**
- Look for **"DNS Management"**, **"DNS Settings"**, or **"Name Server Settings"**
- Add the records as shown above

### Step 4: Wait for DNS Propagation

- **Minimum:** 10 minutes
- **Typical:** 1-2 hours
- **Maximum:** 24-48 hours

**Check propagation status:**
- https://dnschecker.org
- Enter your domain name
- Wait until all regions show green checkmarks

### Step 5: Verify HTTPS

Once DNS propagates:
1. Visit `https://deltaclicks.com`
2. Check for padlock icon in browser
3. Vercel auto-provisions SSL via Let's Encrypt
4. No manual SSL setup needed!

---

## Phase 8.4 - Post-Deployment Verification

### Checklist

#### 1. Test Contact Form (CRITICAL)

```
□ Go to live site: https://deltaclicks.com/contact
□ Fill out the contact form with test data
□ Click "Send Message"
□ Check for success message
□ Verify email arrives at client's inbox
□ If no email: check Web3Forms dashboard for submissions
```

#### 2. Run Lighthouse Audit

**In Chrome:**
1. Open live site in **Incognito Mode**
2. Press `F12` to open DevTools
3. Click **"Lighthouse"** tab
4. Select **"Performance"**, **"Accessibility"**, **"Best Practices"**, **"SEO"**
5. Click **"Analyze page load"**
6. Wait for results

**Target Scores:**
| Category | Target | Actual |
|----------|--------|--------|
| Performance | 90+ | ___ |
| Accessibility | 95+ | ___ |
| Best Practices | 95+ | ___ |
| SEO | 100 | ___ |

#### 3. Verify All Pages Load

Test each URL on the LIVE domain:

```
□ https://deltaclicks.com/
□ https://deltaclicks.com/about
□ https://deltaclicks.com/services
□ https://deltaclicks.com/services/seo
□ https://deltaclicks.com/services/smm
□ https://deltaclicks.com/services/sem
□ https://deltaclicks.com/services/content-marketing
□ https://deltaclicks.com/services/email-marketing
□ https://deltaclicks.com/services/branding
□ https://deltaclicks.com/services/web-development
□ https://deltaclicks.com/services/analytics
□ https://deltaclicks.com/portfolio
□ https://deltaclicks.com/portfolio/[slug] (all 6)
□ https://deltaclicks.com/blog
□ https://deltaclicks.com/blog/[slug] (all 6)
□ https://deltaclicks.com/contact
□ https://deltaclicks.com/privacy-policy
□ https://deltaclicks.com/terms
□ https://deltaclicks.com/xyz123 (should show 404 page)
```

#### 4. Submit Sitemap to Google Search Console

**Step A: Create Google Search Console Account**
1. Go to **https://search.google.com/search-console**
2. Sign in with Google account
3. Click **"Add Property"**
4. Enter your domain: `deltaclicks.com`
5. Verify ownership (see Step B)

**Step B: Verify Domain Ownership**

**Option 1: HTML Tag (Easiest)**
1. In Search Console, select **"HTML tag"**
2. Copy the meta tag
3. Add to `src/app/layout.js` inside the `<head>` section
4. Commit and push to GitHub
5. Vercel will auto-deploy
6. Click **"Verify"** in Search Console

**Option 2: DNS Record**
1. In Search Console, select **"DNS record"**
2. Copy the TXT record
3. Add to your domain's DNS settings
4. Wait for propagation
5. Click **"Verify"**

**Step C: Submit Sitemap**
1. In Search Console, click **"Sitemaps"** in left sidebar
2. Enter: `sitemap.xml`
3. Click **"Submit"**
4. Status should show **"Success"**

#### 5. Enable Vercel Analytics

1. Go to Vercel project dashboard
2. Click **"Analytics"** in left sidebar
3. Click **"Enable"**
4. Vercel will track:
   - Page views
   - Unique visitors
   - Bounce rate
   - Geographic data
5. View analytics at: `https://vercel.com/analytics`

---

## Troubleshooting

### Issue: Build Fails on Vercel

**Solution:**
1. Check Vercel build logs for error message
2. Run `npm run build` locally to reproduce
3. Fix the error locally
4. Push to GitHub - Vercel auto-redeploys

### Issue: Contact Form Not Working

**Solution:**
1. Verify `NEXT_PUBLIC_WEB3FORMS_KEY` is set in Vercel
2. Go to Vercel → Settings → Environment Variables
3. Check the key matches your Web3Forms dashboard
4. Test form submission again
5. Check Web3Forms dashboard for submission logs

### Issue: Domain Not Resolving

**Solution:**
1. Wait 24 hours for DNS propagation
2. Check DNS at dnschecker.org
3. Verify DNS records are correct at registrar
4. Clear browser DNS cache: `ipconfig /flushdns` (Windows)
5. Try incognito mode

### Issue: SSL/HTTPS Not Working

**Solution:**
1. Wait 5-10 minutes after adding domain
2. Vercel auto-provisions SSL certificates
3. Check Vercel → Settings → Domains for status
4. If still failing, remove and re-add domain

---

## Phase 8 Completion Checklist

### Deployment
- [ ] Code pushed to GitHub
- [ ] Vercel project created
- [ ] Environment variables added
- [ ] Site deployed successfully
- [ ] Preview URL working

### Domain Setup
- [ ] Domain added in Vercel
- [ ] DNS records configured at registrar
- [ ] DNS propagation complete
- [ ] HTTPS working with padlock

### Post-Deployment
- [ ] Contact form tested and working
- [ ] Lighthouse audit completed
- [ ] All 18 pages verified
- [ ] Sitemap submitted to Google
- [ ] Domain verified in Search Console
- [ ] Vercel Analytics enabled

---

## Sign-Off

**Deployed By:** _______________
**Deployment Date:** _______________
**Live URL:** https://deltaclicks.com
**Vercel Dashboard:** https://vercel.com/dashboard

**All Tasks Complete:** ☐ YES

---

## Quick Reference

| Service | URL | Login |
|---------|-----|-------|
| Vercel Dashboard | https://vercel.com | GitHub |
| Web3Forms | https://web3forms.com | Email |
| Google Search Console | https://search.google.com/search-console | Google |
| DNS Checker | https://dnschecker.org | None |
| GitHub Repo | https://github.com/yourusername/deltaclicks | GitHub |
