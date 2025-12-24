/**
 * Tweet Scheduler
 * Schedules automated tweet posting using node-cron
 */

import cron from "node-cron";
import { postTweet } from "./twitter.js";
import { getRandomTweet, markTweetAsPosted } from "./tweets.js";

/**
 * Schedule configuration for Asia/Kolkata timezone
 * Optimized for maximum engagement throughout the day
 */
const SCHEDULE = [
  // { time: "35 11 * * *", label: "11:35 AM (TEST)" }, // Added for testing
  { time: "30 8 * * *", label: "08:30 AM" }, // Quick AI news/tip - morning engagement
  { time: "0 10 * * *", label: "10:00 AM" }, // Tool comparison or hack - mid-morning activity
  { time: "30 12 * * *", label: "12:30 PM" }, // Hot take/question - lunch break scrolling
  { time: "0 14 * * *", label: "02:00 PM" }, // Short thread starter - afternoon engagement
  { time: "0 19 * * *", label: "07:00 PM" }, // Evening prediction - peak evening activity
];

const TIMEZONE = "Asia/Kolkata";

/**
 * Get random delay between 1-5 minutes in milliseconds
 * @returns {number} Random delay in ms
 */
function getRandomDelay() {
  const minDelay = 1 * 60 * 1000; // 1 minute
  const maxDelay = 5 * 60 * 1000; // 5 minutes
  return Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;
}

/**
 * Post a tweet with random delay
 */
async function scheduledTweetPost() {
  const delay = getRandomDelay();
  const delayMinutes = Math.round(delay / 1000 / 60);

  console.log(
    `[INFO] Cron job triggered. Waiting ${delayMinutes} minute(s) before posting...`
  );

  setTimeout(async () => {
    try {
      const tweetText = getRandomTweet();

      if (!tweetText) {
        console.warn(
          "[SKIP] No unposted tweets available in the pool. Skipping this slot."
        );
        return;
      }

      const success = await postTweet(tweetText);
      if (success) {
        markTweetAsPosted(tweetText);
      }
    } catch (error) {
      console.error("[ERROR] Scheduled tweet failed:", error.message);
    }
  }, delay);
}

/**
 * Initialize and start all cron jobs
 */
export function startScheduler() {
  console.log("\n[INFO] ═══════════════════════════════════════════════════");
  console.log("[INFO] Starting Tweet Scheduler");
  console.log("[INFO] ═══════════════════════════════════════════════════");
  console.log(`[INFO] Timezone: ${TIMEZONE}`);
  console.log("[INFO] Posting Schedule:");

  SCHEDULE.forEach(({ time, label }) => {
    console.log(`[INFO]   • ${label} (${time})`);

    // Schedule the cron job
    cron.schedule(time, scheduledTweetPost, {
      scheduled: true,
      timezone: TIMEZONE,
    });
  });

  console.log("[INFO] Random delay: 1-5 minutes before each post");
  console.log("[INFO] ═══════════════════════════════════════════════════");
  console.log("[SUCCESS] Scheduler started successfully!\n");
}
