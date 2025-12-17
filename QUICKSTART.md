# 🚀 Quick Start Guide

## Step 1: Configure Environment Variables

Create a `.env` file in the root directory:

```bash
# Copy the example file
cp .env.example .env
```

Then edit `.env` and add your Twitter OAuth 1.0a credentials:

```env
API_KEY=your_api_key_here
API_SECRET=your_api_secret_here
ACCESS_TOKEN=your_access_token_here
ACCESS_TOKEN_SECRET=your_access_token_secret_here
PORT=8080
```

## Step 2: Get Twitter API Credentials

1. Go to https://developer.twitter.com/en/portal/dashboard
2. Create a new app or select existing app
3. Go to "Keys and Tokens" tab
4. Copy the following:
   - **API Key** (also called Consumer Key)
   - **API Secret** (also called Consumer Secret)
   - **Access Token**
   - **Access Token Secret**

⚠️ **Important**: Make sure your app has **Read and Write** permissions!

## Step 3: Run the Bot

```bash
npm start
```

You should see:

```
╔════════════════════════════════════════════════════════╗
║        X (Twitter) Automation Bot v1.0                ║
╚════════════════════════════════════════════════════════╝

[INFO] Checking environment variables...
[SUCCESS] All environment variables found

[INFO] ═══════════════════════════════════════════════════
[INFO] Authentication Type: OAuth 1.0a
[INFO] ═══════════════════════════════════════════════════
[INFO] Using permanent access tokens
[INFO] No token refresh logic (OAuth 1.0a tokens are permanent)
[INFO] ═══════════════════════════════════════════════════

[INFO] Verifying Twitter credentials...
[SUCCESS] Twitter credentials verified
[INFO] Authenticated as: your_username

[INFO] ═══════════════════════════════════════════════════
[INFO] Starting Tweet Scheduler
[INFO] ═══════════════════════════════════════════════════
[INFO] Timezone: Asia/Kolkata
[INFO] Posting Schedule:
[INFO]   • 08:00 AM (0 8 * * *)
[INFO]   • 01:30 PM (30 13 * * *)
[INFO]   • 08:00 PM (0 20 * * *)
[INFO] Random delay: 1-5 minutes before each post
[INFO] ═══════════════════════════════════════════════════
[SUCCESS] Scheduler started successfully!

[INFO] ═══════════════════════════════════════════════════
[INFO] Express server running on port 8080
[INFO] Health check: http://localhost:8080/health
[INFO] ═══════════════════════════════════════════════════
[SUCCESS] Bot is now running 24/7!
[INFO] Press Ctrl+C to stop
```

## Step 4: Test Health Endpoint

Open your browser or use curl:

```bash
curl http://localhost:8080/health
```

Response:

```json
{
  "status": "running",
  "timestamp": "2025-12-17T11:50:20.000Z",
  "auth": "OAuth 1.0a",
  "uptime": 3600
}
```

## 🎯 What Happens Next?

The bot will automatically post tweets at:

- **08:00 AM** (Asia/Kolkata)
- **01:30 PM** (Asia/Kolkata)
- **08:00 PM** (Asia/Kolkata)

Each post has a random 1-5 minute delay to appear more natural.

## 🔧 Customization

### Add Your Own Tweets

Edit `src/tweets.js`:

```javascript
export const tweets = [
  "Your custom tweet here! #hashtag",
  "Another amazing tweet #coding",
  // Add as many as you want
];
```

### Change Posting Times

Edit `src/scheduler.js`:

```javascript
const SCHEDULE = [
  { time: "0 8 * * *", label: "08:00 AM" }, // 8:00 AM
  { time: "30 13 * * *", label: "01:30 PM" }, // 1:30 PM
  { time: "0 20 * * *", label: "08:00 PM" }, // 8:00 PM
];
```

Cron format: `minute hour day month dayOfWeek`

Examples:

- `0 9 * * *` = 9:00 AM daily
- `30 14 * * *` = 2:30 PM daily
- `0 */6 * * *` = Every 6 hours

## 🌐 Deploy to Production

### Railway

1. Push to GitHub
2. Create new project on Railway
3. Connect GitHub repo
4. Add environment variables in Railway dashboard
5. Deploy!

### VPS (Ubuntu/Debian)

```bash
# Clone your repo
git clone your-repo-url
cd x-automation

# Install dependencies
npm install

# Install PM2 for process management
npm install -g pm2

# Start bot with PM2
pm2 start src/index.js --name twitter-bot

# Save PM2 configuration
pm2 save

# Setup PM2 to start on boot
pm2 startup
```

## ✅ Checklist

- [ ] Created `.env` file with credentials
- [ ] Verified Twitter app has Read & Write permissions
- [ ] Ran `npm install`
- [ ] Ran `npm start` successfully
- [ ] Saw "Twitter credentials verified" message
- [ ] Tested `/health` endpoint
- [ ] Customized tweets in `src/tweets.js`
- [ ] Adjusted schedule if needed

## 🆘 Troubleshooting

### "Missing required environment variables"

- Make sure `.env` file exists
- Check all 4 credentials are filled in

### "Failed to verify credentials"

- Check your API keys are correct
- Verify app has Read & Write permissions
- Make sure tokens are not expired (regenerate if needed)

### "Tweet exceeds 280 characters"

- Edit your tweets in `src/tweets.js`
- Keep them under 280 characters

---

**You're all set! The bot will now post tweets automatically. 🎉**
