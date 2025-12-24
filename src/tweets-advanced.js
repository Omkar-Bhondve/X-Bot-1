/**
 * Tweet Pool with Advanced Duplicate Prevention
 * Tracks all posted tweets and never repeats until pool is exhausted
 */

export const tweets = [
  "Claude Opus 4.5 just scored 77.2% on SWE-bench and can code autonomously for 30+ hours straight. We went from AI can help with code to AI can build entire features while you sleep in 6 months. What's your craziest AI coding win lately? #AI #Claude",
  "Hot take: Gemini 3 Pro breaking the 1500 Elo barrier matters more than people realize. It's not just a benchmark flex—it's the first model maintaining coherence through 15-step reasoning chains. We crossed a threshold. Change my mind. #AI #Gemini",
  "November 2025 was insane: Grok 4.1 (Nov 17), Gemini 3 (Nov 18), Claude Opus 4.5 (Nov 24), GPT-5.2 (Dec 11). Four frontier models in 25 days. Are we watching the early stages of an AI singularity, or just really intense competition? #AIModels #Tech",
  "DeepSeek V3.2 costs 10x less than GPT-5 and beats it on math benchmarks. A task that costs you $15 with OpenAI? $0.50 with DeepSeek. The you need billions to compete in AI narrative just died. What does this mean for the big labs? #DeepSeek #AI",
  "Real talk: 66% of users still prefer GPT-5.1 over Gemini 3 Pro despite Gemini scoring higher on every benchmark. Turns out normal people don't care about LMArena rankings—they care about UX. Benchmarks ≠ actual user preference. Thoughts? #AI #UX",
  "Agentic AI market: $7.38B (2025) → $103.6B (2032). By 2028, 33% of enterprise software will include AI agents. We're not just getting better chatbots—we're getting digital coworkers that plan, execute, and report back. Which job function disrupts first? #AI #Future",
  "Grok 4.1 has a 2-MILLION token context window. That's enough to process entire codebases in one query. We went from paste your code snippet to here's my entire repo, figure it out in one year. Context is the new compute. What are you building? #Grok #AI",
  "Underrated AI workflow: Use Claude for building apps, GPT for quick iterations, and Gemini for research with citations. Stop trying to find the best model—stack them. Different tools for different jobs. What's your current multi-model setup? #AI #Productivity",
  "2026 prediction: Most developers will spend more time orchestrating AI agents than writing code. Multi-agent systems aren't sci-fi anymore—they're already automating compliance, customer service, DevOps. Are you ready to be an AI orchestrator? #AI #Future",
  "Claude Sonnet 4.5 costs $3/$15 per million tokens. Claude Opus? $15/$75. But with 90% caching savings, Opus becomes viable for production. The real AI hack in 2025 isn't finding the cheapest model—it's mastering caching and context management. #Claude #AI",
  // ... (rest of your 108 tweets - keeping them all)
];

// Advanced duplicate tracking - remembers ALL posted tweets
let postedTweetIndices = new Set();

/**
 * Get a random tweet that hasn't been posted yet
 * When all tweets are posted, resets and starts over
 * @returns {string} Random unposted tweet text
 */
export function getRandomTweet() {
  if (tweets.length === 0) {
    throw new Error("Tweet pool is empty");
  }

  // If all tweets have been posted, reset the pool
  if (postedTweetIndices.size >= tweets.length) {
    console.log("[INFO] All tweets posted! Resetting pool for next cycle...");
    postedTweetIndices.clear();
  }

  // Get available (unposted) tweet indices
  const availableIndices = [];
  for (let i = 0; i < tweets.length; i++) {
    if (!postedTweetIndices.has(i)) {
      availableIndices.push(i);
    }
  }

  // Select random from available tweets
  const randomIndex =
    availableIndices[Math.floor(Math.random() * availableIndices.length)];

  // Mark as posted
  postedTweetIndices.add(randomIndex);

  console.log(
    `[INFO] Tweets posted: ${postedTweetIndices.size}/${tweets.length}`
  );

  return tweets[randomIndex];
}

/**
 * Reset the posted tweets tracker (useful for testing)
 */
export function resetTweetPool() {
  postedTweetIndices.clear();
  console.log("[INFO] Tweet pool reset - all tweets available again");
}
