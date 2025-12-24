/**
 * Telegram Notification Service
 * Sends notifications when tweets are posted
 */

import https from "https";

/**
 * Send a notification to Telegram
 * @param {string} message - Message to send
 * @returns {Promise<void>}
 */
export async function sendTelegramNotification(message) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  // Skip if Telegram is not configured
  if (!botToken || !chatId) {
    console.log("[INFO] Telegram notifications not configured (skipping)");
    return;
  }

  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
  const payload = JSON.stringify({
    chat_id: chatId,
    text: message,
    parse_mode: "HTML",
  });

  return new Promise((resolve, reject) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(payload),
      },
    };

    const req = https.request(url, options, (res) => {
      let data = "";

      res.on("data", (chunk) => {
        data += chunk;
      });

      res.on("end", () => {
        if (res.statusCode === 200) {
          console.log("[SUCCESS] Telegram notification sent!");
          resolve();
        } else {
          console.error(
            `[ERROR] Telegram API error: ${res.statusCode} - ${data}`
          );
          reject(new Error(`Telegram API returned ${res.statusCode}`));
        }
      });
    });

    req.on("error", (error) => {
      console.error(
        "[ERROR] Failed to send Telegram notification:",
        error.message
      );
      reject(error);
    });

    req.write(payload);
    req.end();
  });
}

/**
 * Format and send tweet success notification
 * @param {string} tweetText - The tweet content
 * @param {string} username - The X account username
 * @param {string} tweetUrl - URL to the tweet (optional)
 */
export async function notifyTweetPosted(tweetText, username, tweetUrl = null) {
  const timestamp = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "medium",
    timeStyle: "short",
  });

  let message = `✅ <b>Tweet Posted Successfully!</b>\n\n`;
  message += `👤 <b>Account:</b> @${username}\n`;
  message += `📝 <b>Content:</b>\n${tweetText}\n\n`;
  message += `⏰ <b>Time:</b> ${timestamp} (IST)\n`;
  message += `🤖 <b>Status:</b> Published`;

  if (tweetUrl) {
    message += `\n🔗 <b>Link:</b> ${tweetUrl}`;
  }

  try {
    await sendTelegramNotification(message);
  } catch (error) {
    // Don't throw - we don't want to fail the tweet posting if notification fails
    console.error(
      "[ERROR] Telegram notification failed, but tweet was posted successfully"
    );
  }
}

/**
 * Send error notification to Telegram
 * @param {string} errorMessage - Error message
 */
export async function notifyError(errorMessage) {
  const timestamp = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "medium",
    timeStyle: "short",
  });

  const message = `❌ <b>Tweet Posting Failed</b>\n\n`;
  const fullMessage =
    message +
    `⚠️ <b>Error:</b> ${errorMessage}\n⏰ <b>Time:</b> ${timestamp} (IST)`;

  try {
    await sendTelegramNotification(fullMessage);
  } catch (error) {
    console.error("[ERROR] Failed to send error notification to Telegram");
  }
}
