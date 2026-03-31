# 🚀 Quick Deployment Checklist

## ✅ Pre-Deployment (COMPLETED)

- [x] Build passes: `npm run build` ✓
- [x] Lint passes: `npm run lint` ✓
- [x] No console.log in code
- [x] .env.local in .gitignore
- [x] All 33 pages generated
- [x] GitHub repo connected: `harshsksh/deltaclicks`

---

## 📋 Step-by-Step Deployment

### Step 1: Get Web3Forms Access Key

1. Go to **https://web3forms.com**
2. Enter your email and click "Get Started"
3. Copy your **Access Key** from the dashboard
4. Keep it handy for Step 3

**Status:** ⬜ Not Started

---

### Step 2: Deploy to Vercel

1. **Sign Up / Login**
   - Go to **https://vercel.com**
   - Click "Sign Up"
   - Use **GitHub** login (recommended)

2. **Import Project**
   - Click "Add New Project"
   - Select "Import Git Repository"
   - Find `deltaclicks` from your repositories
   - Click "Import"

3. **Configure (Auto-detected)**
   - Framework: Next.js ✓
   - Build Command: `npm run build` ✓
   - Output Directory: `.next` ✓

**Status:** ⬜ Not Started

---

### Step 3: Add Environment Variables

**BEFORE clicking Deploy:**

1. Click "Environment Variables"
2. Add new variable:
   - **Name:** `NEXT_PUBLIC_WEB3FORMS_KEY`
   - **Value:** (paste your Web3Forms key from Step 1)
   - **Environments:** Check Preview, Production, Development

3. Click "Save"

**Status:** ⬜ Not Started

---

### Step 4: Deploy

1. Click **"Deploy"** button
2. Wait 2-3 minutes for build
3. Click on the preview image when done
4. Your site is live! 🎉

**Preview URL:** `https://deltaclicks-xxxx.vercel.app`

**Status:** ⬜ Not Started

---

### Step 5: Add Custom Domain (Optional)

1. In Vercel dashboard, go to **Settings → Domains**
2. Click "Add Domain"
3. Enter: `deltaclicks.com` (or your domain)
4. Enter: `www.deltaclicks.com`

**Add DNS Records at your registrar:**

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**Wait:** 10 minutes to 24 hours for DNS propagation

**Status:** ⬜ Not Started

---

### Step 6: Test Contact Form

1. Go to your live site
2. Navigate to `/contact`
3. Fill out the form with test data
4. Submit and check for success message
5. Verify email arrives at your inbox

**Status:** ⬜ Not Started

---

### Step 7: Submit Sitemap to Google

1. Go to **https://search.google.com/search-console**
2. Add property: `deltaclicks.com`
3. Verify ownership (HTML tag or DNS record)
4. Go to "Sitemaps"
5. Submit: `sitemap.xml`

**Status:** ⬜ Not Started

---

### Step 8: Enable Analytics (Optional)

1. In Vercel dashboard, click "Analytics"
2. Click "Enable"
3. View traffic at: `https://vercel.com/analytics`

**Status:** ⬜ Not Started

---

## 🎯 Final Verification

Test these URLs on your LIVE domain:

- [ ] Homepage loads
- [ ] About page loads
- [ ] All 8 service pages load
- [ ] All 6 portfolio pages load
- [ ] All 6 blog posts load
- [ ] Contact page loads
- [ ] Contact form works
- [ ] 404 page works (try `/random123`)
- [ ] Mobile menu works
- [ ] HTTPS padlock shows

---

## 📊 Lighthouse Audit

Run on live URL in Chrome Incognito:

| Metric | Target | Score |
|--------|--------|-------|
| Performance | 90+ | ___ |
| Accessibility | 95+ | ___ |
| Best Practices | 95+ | ___ |
| SEO | 100 | ___ |

---

## 🎉 Deployment Complete!

**Live URL:** _____________________
**Deployed At:** _____________________
**Deployed By:** _____________________

**All Steps Complete:** ☐ YES

---

## 🔗 Quick Links

| Service | URL |
|---------|-----|
| Vercel Dashboard | https://vercel.com |
| Web3Forms | https://web3forms.com |
| Google Search Console | https://search.google.com/search-console |
| DNS Checker | https://dnschecker.org |
| GitHub Repo | https://github.com/harshsksh/deltaclicks |

---

## 🆘 Need Help?

**Common Issues:**

1. **Build fails on Vercel**
   - Check build logs in Vercel dashboard
   - Run `npm run build` locally to reproduce
   - Fix and push to GitHub (auto-redeploys)

2. **Contact form not working**
   - Verify `NEXT_PUBLIC_WEB3FORMS_KEY` in Vercel settings
   - Check Web3Forms dashboard for submissions

3. **Domain not resolving**
   - Wait 24 hours for DNS propagation
   - Check dnschecker.org
   - Clear browser cache: `Ctrl + Shift + Delete`

4. **SSL not working**
   - Wait 5-10 minutes after adding domain
   - Vercel auto-provisions SSL (no setup needed)
