/**
 * Tweet Pool
 * Store all tweets here for random selection
 */

export const tweets = [
  "Many people chase validation from others, thinking approval equals success. Real growth begins when you trust yourself and your choices. When your values guide you, confidence replaces doubt and progress becomes natural. #Mindset #Growth",

"Discipline is choosing long-term respect over short-term comfort. Motivation fades, habits stay. The moment you stop waiting to feel ready and start acting anyway is the moment your life quietly starts changing. #Consistency #SelfGrowth",

"Not everyone will understand your journey, and that’s okay. You don’t need universal approval to move forward. Focus on progress, not applause, and let results speak louder than explanations ever could. #Focus #Mindset",

"Growth feels uncomfortable because it forces you to leave familiar versions of yourself behind. If things feel hard right now, that’s often a sign you’re leveling up instead of standing still. Keep going. #GrowthMindset",

"Stop measuring your worth by reactions, likes, or opinions. Real confidence is built when you keep promises to yourself, even when no one is watching. That quiet discipline builds unshakable self-trust. #SelfRespect",

"Most breakthroughs happen after the phase where quitting feels tempting. If you’re tired, rest—but don’t walk away. Consistency during boring or difficult phases is what separates results from regret. #Consistency",

"Success doesn’t come from knowing everything. It comes from learning, adjusting, and showing up again after mistakes. Progress rewards action, not perfection. Start before you feel ready. #Learning #Growth",

"Your future depends more on daily habits than on big plans. Small actions done consistently create momentum, confidence, and results that motivation alone can never deliver. Build systems, not excuses. #Habits",

"Confidence isn’t loud. It’s quiet certainty built through repeated effort. When you stop proving yourself to others and start improving yourself daily, everything shifts internally and externally. #Confidence",

"You don’t need to move fast, but you do need to move forward. Even small progress beats standing still while waiting for perfect conditions. Action creates clarity, not the other way around. #Progress",

"Stop overthinking outcomes and start focusing on inputs. Control your effort, discipline, and attitude. The results will take care of themselves over time. Trust the process you’re building. #Mindset",

"Comfort zones feel safe, but they quietly limit your potential. Growth starts when you accept discomfort as part of progress. Temporary unease often leads to long-term confidence and strength. #Growth",

"Your goals don’t need approval, validation, or explanation. They only need commitment. Work quietly, stay consistent, and let results introduce you when the time is right. #Discipline #Focus",

"Success rarely arrives all at once. It builds slowly through small wins, lessons, and persistence. If today feels ordinary, remember that consistency turns ordinary days into extraordinary outcomes. #Consistency",

"Self-respect grows when your actions align with your values. Every time you choose discipline over comfort, you reinforce trust in yourself. That trust becomes confidence over time. #SelfGrowth",

"You’re not behind—you’re just early in your process. Comparing your chapter one to someone else’s chapter ten only creates unnecessary pressure. Focus on your lane and keep moving. #Mindset",

"Clarity comes from action, not endless planning. Take the next small step, learn from it, and adjust. Momentum is created by doing, not by waiting for certainty. #Action #Growth",

"Your environment shapes your behavior more than motivation ever will. Design your surroundings to support focus, discipline, and progress instead of relying on willpower alone. #Habits",

"Success is built in moments no one applauds. The early mornings, quiet work, and repeated effort matter more than recognition. Keep building, even when it feels unseen. #Discipline",

"Not every season is about winning publicly. Some seasons are about learning, rebuilding, and strengthening foundations. Respect the quiet phases—they prepare you for louder results. #Growth",

"Fear doesn’t disappear when you wait. It shrinks when you act. Each step forward builds confidence and proves you’re capable of handling more than you think. #Courage #Mindset",

"Your time is valuable. Protect it by saying no to distractions that don’t align with your goals. Focus is a skill—and it pays compound interest over time. #Focus #Productivity",

"Progress feels slow until you look back. Stay consistent long enough and you’ll realize how far you’ve come. Trust the process, even when results aren’t immediate. #Consistency",

"Confidence is earned through effort, not affirmation. Every small promise you keep to yourself strengthens belief in your own abilities. Build that trust daily. #SelfTrust",

"Hard work doesn’t always show results immediately, but it always leaves evidence. Skills sharpen, discipline strengthens, and mindset evolves before success becomes visible. #Growth",

"Stop waiting for motivation to show up. Start with discipline and let motivation catch up later. Action creates energy, not the other way around. #Discipline",

"Your goals don’t care about excuses. They respond to consistency, patience, and effort. Show up even on days when progress feels invisible. #Mindset",

"Success isn’t about intensity once in a while. It’s about showing up daily, even when enthusiasm fades. That’s where real progress is made. #Consistency",

"Comparison steals focus and drains confidence. Use others as inspiration, not measurement. Your journey unfolds at its own pace—and that’s exactly how it should be. #Growth",

"Strong habits beat strong motivation. Motivation fluctuates, but habits keep you moving forward when energy is low. Build systems that work even on hard days. #Habits",

"Growth requires patience. Results often arrive after discipline has already done its work. Keep going even when the payoff isn’t visible yet. #Mindset",

"Every skill you admire was once learned through repetition and mistakes. Progress favors those willing to look foolish before becoming confident. #Learning",

"You don’t need massive change overnight. Small improvements done daily compound into powerful transformation over time. Stay consistent and trust the process. #SelfGrowth",

"Your future self is built by today’s choices. Every disciplined decision adds a brick to the life you’re creating. Choose intentionally. #Mindset",

"Confidence grows when actions match intentions. Stop promising yourself change and start proving it through consistent effort. #Discipline",

"Long-term success is rarely flashy. It’s built through boring routines executed consistently. Master the basics and results will follow. #Consistency",

"Focus on progress, not perfection. Small steps taken consistently outperform perfect plans that never start. Action matters more than intention. #Growth",

"Your mindset determines how far effort can take you. Train it like a skill through discipline, reflection, and consistency. #Mindset",

"Success doesn’t require permission. If something matters to you, pursue it with intention and consistency—regardless of outside opinions. #Focus",

"Consistency is a form of self-respect. Every time you show up for your goals, you reinforce belief in yourself. #SelfGrowth",

"Fear often signals growth. If something feels challenging, it might be exactly where development is happening. Lean into it. #GrowthMindset",

"Results lag behind effort. Keep working even when outcomes aren’t immediate. Discipline compounds quietly before it shows loudly. #Consistency",

"Strong foundations matter more than quick wins. Build skills, habits, and mindset patiently. Sustainable success takes time. #Growth",

"You become confident by doing difficult things consistently. Comfort rarely builds capability. #Mindset",

"Progress is personal. Measure success by effort and improvement, not comparison. #SelfGrowth",

"Discipline is choosing what you want most over what you want now. That decision changes everything over time. #Discipline",

"Focus on becoming better, not just being seen. Results follow improvement, not attention. #Growth",

"Your daily actions shape your future more than occasional bursts of motivation. Consistency wins. #Habits"
];

// Track last posted tweet to avoid consecutive duplicates
let lastPostedIndex = -1;

/**
 * Get a random tweet from the pool
 * Ensures the same tweet is not posted consecutively
 * @returns {string} Random tweet text
 */
export function getRandomTweet() {
  if (tweets.length === 0) {
    throw new Error("Tweet pool is empty");
  }

  if (tweets.length === 1) {
    return tweets[0];
  }

  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * tweets.length);
  } while (randomIndex === lastPostedIndex);

  lastPostedIndex = randomIndex;
  return tweets[randomIndex];
}
