import fs from "fs";
import path from "path";

const POSTED_TWEETS_FILE = path.join(process.cwd(), "posted_tweets.json");

/**
 * Load posted tweets from file
 * @returns {Set<string>} Set of posted tweet texts
 */
function loadPostedTweets() {
  try {
    if (fs.existsSync(POSTED_TWEETS_FILE)) {
      const data = fs.readFileSync(POSTED_TWEETS_FILE, "utf8");
      return new Set(JSON.parse(data));
    }
  } catch (error) {
    console.error("[ERROR] Failed to load posted tweets:", error.message);
  }
  return new Set();
}

/**
 * Save a tweet to the posted list
 * @param {string} text - Tweet text to mark as posted
 */
export function markTweetAsPosted(text) {
  try {
    const posted = loadPostedTweets();
    posted.add(text);
    fs.writeFileSync(
      POSTED_TWEETS_FILE,
      JSON.stringify(Array.from(posted), null, 2),
      "utf8"
    );
    console.log("[INFO] Tweet marked as posted and saved to persistence.");
  } catch (error) {
    console.error("[ERROR] Failed to save posted tweet:", error.message);
  }
}

export const tweets = [
  "Investors are shifting focus to Chinese AI companies as fears of an overheated US AI market grow. Tech rivalry is now shaping global capital flows and long-term innovation bets. #AI",

  "Generative AI is being questioned after smart home assistants struggle with basic tasks. The debate is heating up on whether bigger models actually mean better everyday tech. #Tech",

  "AI is creating a new class of young billionaires as founders under 30 use machine learning to scale startups faster than any previous tech wave. #AI",

  "Samsung’s vision of AI-powered living hints at a future where devices act less like tools and more like adaptive companions across daily life. #Tech",

  "Job seekers are reporting interviews conducted entirely by AI avatars, showing how fast automation is entering hiring and reshaping candidate experience. #AI",

  "Multimodal AI models that process text, images, audio, and video together are dominating discussions around next-generation intelligence systems. #Tech",

  "Edge AI combined with hybrid cloud is becoming critical for real-time decision making in IoT, manufacturing, and industrial automation. #AI",

  "Retail brands are using AI-driven personalization to deliver hyper-targeted recommendations based on user behavior and intent signals. #Tech",

  "Venture capital is pouring into AI infrastructure and large language models, accelerating consolidation as big tech acquires smaller innovators. #AI",

  "AI is now the backbone of enterprise digital transformation, moving from experimental tools into core business workflows worldwide. #Tech",

  "Rising demand for AI chips and compute power is reshaping competition among cloud providers and semiconductor companies globally. #AI",

  "Real-time analytics powered by AI at the edge is transforming industries like autonomous driving, logistics, and factory operations. #Tech",

  "Search trends show generative AI tools remain among the most discussed tech topics, highlighting sustained public interest beyond hype cycles. #AI",

  "AI adoption across organizations signals a cultural shift where automation is no longer optional but expected in modern tech stacks. #Tech",

  "Multimodal AI is leading the narrative of AI everywhere, enabling systems to understand and generate across multiple forms of media. #AI",

  "Discussions around AI ethics and bias are intensifying as models increasingly influence public opinion and decision making. #Tech",

  "Domain-specific AI startups are attracting more focused funding as investors look for practical, scalable applications over general tools. #AI",

  "Edge computing paired with AI is unlocking real-time mobile and on-device services that were previously impossible due to latency limits. #Tech",

  "AI-powered software is automating tasks once reserved for specialists, forcing rapid shifts in workforce skills and career paths. #AI",

  "Advances in AI chips and inference engines are driving down costs while increasing speed, pushing large-scale adoption even further. #Tech",

  "The release of GPT-5.2 is officially here and the long-context recall is finally hitting near-perfection at 256k tokens. Seeing developers migrate entire enterprise codebases in a single prompt today. #AI",
  "Nvidia just hit a five trillion dollar valuation while most of us are still trying to figure out how to pay for our monthly GPU compute subscriptions. The hardware gap is becoming a global divide. #Nvidia",
  "That moment you realize your favorite anime characters were licensed for Sora video generation. Disney and OpenAI just changed the future of fan content and professional filmmaking forever. #SoraAI",
  "Jensen Huang said it best this year: You will not lose your job to artificial intelligence but you will definitely lose it to a human who knows how to use these tools better than you do. #FutureOfWork",
  "Seeing the first live Gemini-powered translations happening through standard headphones today. The language barrier is officially crumbling in real-time and it feels like living in a sci-fi novel. #Tech",
  "Anthropic making Agent Skills an open standard is a massive win for transparency. We need these models to talk to each other across different platforms if we want a truly functional digital assistant. #Claude",
  "The great anime vs AI war of 2025 has reached the courts. Shueisha protecting One Piece against unauthorized training sets is a landmark case for every artist and creator in the digital era. #Copyright",
  "Google Deep Research is outperforming human analysts in complex web-supervised workflows. It is fascinating to watch an agent actually verify sources instead of just hallucinating confident lies. #GoogleAI",
  "Every startup pitch in December 2025 is now just a wrapper for an agentic workflow. We have moved past simple chatbots and entered the era of autonomous software that actually executes the tasks. #Startups",
  "Tesla Optimus showing off advanced dexterity in logistics centers this week. Seeing a humanoid robot balance and manipulate objects with that level of precision is both incredible and slightly eerie. #Robotics",
  "Microsoft and SoftBank investing five hundred billion into the Stargate supercomputer project is a wild bet on AGI. The sheer scale of infrastructure being built in the desert is hard to fathom. #AIComputing",
  "Meta poaching top researchers with billion dollar compensation packages proves that talent is still the scarcest resource. Even with all the compute in the world you still need the human minds. #BigTech",
  "DeepSeek proving they could train a world-class reasoning model for a fraction of the cost of their competitors has shocked the industry. Efficiency is finally becoming as important as raw power. #DeepSeek",
  "The Twitter Wrapped 2025 generated by Grok is getting surprisingly personal. It is weirdly accurate at pinpointing exactly which tech rabbit holes I fell down during the middle of the night this year. #Grok",
  "Adobe integrating Photoshop and Acrobat directly into the ChatGPT interface is a game changer for productivity. Converting a conversation into a fully layered design file is finally a reality. #Productivity",
  "Seeing the first AI-scouted sports teams winning major championships. Data-driven drafting and real-time tactical adjustments by algorithms are officially disrupting the world of professional sports. #Data",
  "We are finally seeing the rise of the No GUI device. Jony Ive and OpenAI building a screenless interface is a bold move back toward natural human interaction instead of staring at glowing glass. #Hardware",
  "Government agencies are now officially cleared to use open-source Llama models for federal operations. This shift toward secure and locally hosted AI is a massive victory for data sovereignty. #OpenSource",
  "The concept of Vibe Coding is taking over GitHub. It is less about syntax and more about describing the intent and feeling of an application then letting the agent handle the boring boilerplate. #Coding",
  "Scientists discovering the exact moment a neural network understands language instead of just predicting the next word is a breakthrough. We are finally peek inside the black box of intelligence. #Science",

  "Artificial intelligence is advancing so rapidly that in just a few years, it could transform every aspect of daily life from work to entertainment in ways we can barely predict today. #AI",
  "Letting tech leaders dominate creative industries has led to widespread contempt for human artistry, ownership, and authentic shared cultural experiences that machines can't replicate. #Tech",
  "Microsoft is investing billions in India's AI infrastructure to build skills, sovereign capabilities, and prepare for an AI-first economy that could reshape global tech dynamics. #ArtificialIntelligence",
  "Unregulated generative AI is flooding scientific research with fabricated data and images, severely undermining the trustworthiness of peer-reviewed studies and discoveries. #AI",
  "Denmark proposes a groundbreaking law giving every citizen copyright ownership over their own likeness, preventing AI companies from using faces or voices without consent. #Tech",
  "Agentic AI systems are emerging that can independently set goals, plan complex actions, and execute tasks with minimal human prompting in real-world applications. #AI",
  "Multimodal AI models now process vision, audio, and language together on-device for faster, more private intelligence that understands real-time context seamlessly. #ArtificialIntelligence",
  "Industry-specific AI models are outperforming general ones in fields like healthcare, finance, and manufacturing by delivering precise domain expertise at scale. #Tech",
  "Inference is becoming the new focus over training as companies prioritize deploying efficient AI models that deliver real business impact with lower costs. #AI",
  "Edge AI enables real-time decisions with ultra-low latency by processing data directly on devices, revolutionizing applications from autonomous vehicles to IoT. #Tech",
  "Sovereign AI stacks are rising as nations build local models aligned with cultural languages and data control to achieve digital independence from global platforms. #ArtificialIntelligence",
  "Embedded invisible AI integrates seamlessly into daily environments, providing ambient intelligence that works constantly without drawing attention to itself. #AI",
  "AI governance and ethics are turning into competitive advantages as transparent, regulation-ready systems build long-term trust and sustainable adoption worldwide. #Tech",
  "Real-time multimodal intelligence on devices is making AI more contextual, private, and responsive by combining sight, sound, and understanding instantly. #AI",
  "The shift to inference optimization is driving massive efficiency gains, allowing widespread deployment of powerful AI without prohibitive training expenses. #ArtificialIntelligence",
  "Specialized AI for verticals like industrial operations and financial analysis is accelerating innovation far beyond what generic models can achieve alone. #Tech",
  "National AI initiatives are prioritizing local data sovereignty and customized models to preserve cultural relevance and reduce dependence on foreign tech giants. #AI",
  "Ambient AI is fading into the background to deliver proactive, always-on assistance that enhances experiences without constant user interaction or prompts. #Tech",
  "On-device processing for multimodal AI ensures privacy and speed, enabling applications that react to visual, auditory, and textual inputs in milliseconds. #ArtificialIntelligence",
  "As AI matures, ethical compliance and transparent frameworks are essential for fostering widespread trust and responsible growth across all sectors. #AI",

  "Google's Willow quantum chip just solved a computation in five minutes that would take today's fastest supercomputer ten septillion years to complete, marking a major breakthrough in quantum error correction. #QuantumComputing",

  "Major AI companies are facing growing concerns about transparency, with recent analysis showing a significant decline to just 40 out of 100 on transparency metrics compared to last year's standards. #AITransparency",

  "Large language models are now showing limitations in medical and legal applications, with studies revealing they provide inconsistent advice and flawed treatment recommendations despite claims of excellence. #AILimitations",

  "Disney just announced a billion dollar investment in OpenAI, with plans to feature videos created through Sora on Disney Plus, merging entertainment with cutting-edge generative AI technology. #GenerativeAI",

  "NIST has launched new centers focused on AI applications in manufacturing and critical infrastructure, expanding collaboration with MITRE Corporation to ensure US leadership in artificial intelligence development. #AIManufacturing",

  "The quantum computing field achieved a historic milestone by demonstrating error correction below threshold, proving that adding more qubits now reduces errors rather than increasing them as systems scale up. #QuantumBreakthrough",

  "Hollywood creators have officially launched the Coalition on AI to establish industry protections against unauthorized use of digital likenesses and the automation of creative roles in entertainment production. #AIEthics",

  "MIT researchers developed a self-steering system called DisCIPL that directs small AI models to work together on complex tasks with constraints like itinerary planning and budgeting for enhanced efficiency. #AIResearch",

  "Israel's AI startup ecosystem faces significant headwinds due to geopolitical instability and shifting investment trends, with experts warning about brain drain of talent to the United States affecting competitiveness. #AIStartups",

  "Quantum computers are now being integrated with AI techniques like machine learning to optimize quantum algorithms and enhance error correction, creating a powerful synergy driving breakthrough innovations. #QuantumAI",

  "Financial markets experienced significant declines as investor anxiety about an AI bubble intensified, with experts suggesting massive capital investments have yet to yield the expected returns in artificial intelligence. #AIInvestment",

  "IBM unveiled its roadmap for fault-tolerant quantum computing with Quantum Starling targeted for completion by 2029, featuring 200 logical qubits capable of running 100 million error-corrected operations. #IBMQuantum",

  "AI-generated misinformation including altered images and conspiracy theories has complicated crisis response efforts, with experts warning that synthetic content is eroding public trust during national emergencies. #Misinformation",

  "Research shows that Americans are increasingly forming romantic attachments with AI chatbots, with many participants preferring bot interactions over real relationships due to consistency and availability. #AIRelationships",

  "Senators are demanding answers on how AI companies are responding to a surge in AI-fueled fraud, highlighting growing concerns about the misuse of artificial intelligence technology for criminal activities. #CyberSecurity",

  "New studies reveal that quantum computing advances in medicine are enabling faster drug discovery and disease research, with pharmaceutical companies using the technology to revolutionize healthcare development. #HealthTech",

  "Researchers discovered that bee flight movements sharpen brain signals for pattern recognition, and a digital model of their brain could inspire more efficient artificial intelligence system designs. #BioInspiredAI",

  "Companies are now using quantum computing to improve hydrogen fuel cell catalysts and electric battery performance in automotive and aerospace industries, demonstrating real-world commercial applications. #CleanTech",

  "The convergence of AI and quantum computing is creating new opportunities for solving complex optimization problems that cause classical computers to struggle, opening doors for breakthrough applications. #FutureTech",

  "Experts predict that within 15 years a quantum computer will be able to break current encryption standards, prompting urgent calls for organizations to begin migrating to post-quantum cryptography technologies now. #CyberSecurity",
];

/**
 * Get a random unposted tweet from the pool
 * @returns {string|null} Random tweet text or null if all posted
 */
export function getRandomTweet() {
  const allTweets = tweets;
  if (allTweets.length === 0) {
    throw new Error("Tweet pool is empty in src/tweets.js");
  }

  const postedSet = loadPostedTweets();
  const unpostedTweets = allTweets.filter((t) => !postedSet.has(t));

  if (unpostedTweets.length === 0) {
    console.warn("[WARNING] All tweets in the pool have been posted!");
    return null;
  }

  const randomIndex = Math.floor(Math.random() * unpostedTweets.length);
  return unpostedTweets[randomIndex];
}
