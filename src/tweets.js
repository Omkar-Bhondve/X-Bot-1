/**
 * Tweet Pool
 * Store all tweets here for random selection
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
  "Quantum computing threatens to break RSA encryption by 2035. Banks are already testing hybrid crypto models that combine classical and quantum-safe algorithms. Your encrypted data today might be harvested now, decrypted later. Are you prepared for Q-Day? #Quantum #Security",
  "NIST finalized post-quantum cryptography standards: CRYSTALS-Kyber, CRYSTALS-Dilithium, and SPHINCS+. Only 9% of websites have adopted them. By 2030, non-compliant encryption will be obsolete. The quantum migration starts now or never. What's your timeline? #Quantum #Crypto",
  "ChatGPT hit 800M weekly active users in October 2025. For context, it took Instagram 2.5 years to reach 100M users. ChatGPT did it in 2 months. We're watching the fastest tech adoption in human history unfold in real-time. When did you start using AI daily? #AI #ChatGPT",
  "Apple Vision Pro M5 chip update dropped in October 2025: 120Hz refresh, extended battery life, enhanced rendering. The Dual Knit Band makes it way more comfortable. Apple's spatial computing just got seriously better. Is $3,500 worth it now? #VisionPro #Apple",
  "Meta Quest 4 is coming in 2026 as a large upgrade over Quest 3. Two variants launching simultaneously: Pismo Low and Pismo High. Standard and premium models from day one. Meta's shifting strategy to compete with Vision Pro. Which version you getting? #MetaQuest #VR",
  "Meta Quest 4 specs leaked: eye and face tracking standard, higher PPD than Quest 3, separated compute puck to cut weight from 515g to ~110g. Expected price: $800. That's $2,700 less than Vision Pro. Meta's playing the long game here. #VR #MetaQuest",
  "Samsung Galaxy XR is launching 2025 at $1,000-$1,500 price point. Aims to outperform Vision Pro while undercutting Apple's price by $2,000+. ISOCELL Version 931 sensor mimics human eye with rolling shutter. Can Samsung actually compete with Apple? #SamsungXR #VR",
  "Steam Frame VR headset announced by Valve: standalone Quest 3 competitor with premium positioning. Weighs just 190g for the compute portion. No stereoscopic 3D at launch but it's on Valve's list for future updates. PC gamers, this one's for you. #SteamFrame #VR",
  "6G networks target 1 terabit per second speeds by 2030. That's 100x faster than 5G. Early commercial 6G devices expected late 2026. We're talking seamless AR/VR, remote surgeries, and real-time cloud access on your phone. Ready for terabit speeds? #6G #Tech",
  "5G smartphone market growing at 10.5% CAGR through 2033: $60B (2024) → $150B (2033). 69% of global smartphones will support 5G by 2025. Samsung dominates U.S. with 74% market share. But the real action's in emerging markets. Which region explodes next? #5G #Smartphones",
  "Foldable smartphones finally matured in 2025: thinner designs, nearly invisible crease lines, way more durable. Rollable displays entering the market. Samsung Galaxy Z series and Huawei tri-screen models leading the charge. Would you switch to foldable? #Foldables #Tech",
  "AI integration in smartphones is the 2025 killer feature: LLM-powered assistants, predictive battery management, health monitoring. Android's Gemini and Apple Intelligence are becoming actually useful. When AI becomes your phone's brain, what happens? #AI #Smartphones",
  "Apple Vision Air tipped for 2027 launch: lighter weight, half the price of Vision Pro (so ~$1,750). Apple's spatial computing lineup expanding. The real question is whether cheaper Vision products will actually drive mass adoption. Would you buy at $1,750? #Apple #VisionPro",
  "Meta's Phoenix headset delayed to give more time for polish. Lightweight MR device with tethered battery puck, more for virtual screens than gaming. Think AR glasses meets productivity tool. Meta's playing chess while others play checkers. #Meta #AR",
  "Qualcomm 3GPP Release 20 in 2025 lays groundwork for 6G with AI-enhanced connectivity. The bridge between 5G Advanced and 6G is being built right now. If you're in telecom, 5G Advanced certifications are your ticket to the future. #5G #6G",
  "Brain-computer interfaces coming to smartphones in 2025-2026. Early prototypes already allow thought-based phone control. By 2026, we could see consumer-grade BCI devices for mind-based navigation and thought-driven communication. Sci-fi is here. #BCI #FutureTech",
  "Next-gen batteries with graphene and silicon anodes charge 0% to 100% in under 10 minutes. Battery life was mobile's biggest bottleneck. In 2025, that bottleneck is disappearing. Fast charging is about to get ridiculously fast. When's the last time you worried? #Battery #Tech",
  "Quantum-resistant encryption is standard in 2025 smartphones: under-screen 3D face scanning, multi-layered palm recognition, hardware zero-trust. Your phone is becoming a digital fortress. By 2026, decentralized identity systems go mainstream. #Security #Quantum",
  "5G mmWave phones hitting 10 Gbps speeds in urban hotspots—faster than most home Wi-Fi. iPhone 16 and Galaxy S25 both support mmWave with improved antennas. But coverage is still limited to US, Japan, parts of Europe. Is mmWave worth it in your city? #5G #Smartphones",
  "Open RAN market reaching $19.58B by 2030 at 37.56% CAGR. Open and interoperable networks fostering innovation and vendor diversity. Startups like Firecell and Rimedo Labs are building the 5G infrastructure of tomorrow. The telecom revolution is open-source. #OpenRAN #5G",
  "Android 5G smartphones market growing 8-10% annually through 2030. Samsung dominates search with 86 peak interest. Foldables and AI integration are the premium differentiators. Asia-Pacific is the battleground for mid-range 5G. Which region wins long-term? #Android #5G",
  "Global smartphone revenue projected at $485.34B in 2025. But market saturation in China and mature regions is the elephant in the room. Growth is shifting to Africa and Middle East where 5G adoption is rising via micro-lending. Follow the money. #Smartphones #Tech",
  "Sub-6 GHz 5G dominates with 78.2% of devices, ensuring broader coverage. mmWave accelerates in dense urban centers. Strategic move: prioritize Sub-6 for rural markets, invest mmWave for cities. Coverage strategy determines winner in 5G race. #5G #NetworkStrategy",
  "Private 5G networks scaling rapidly: turn-key solutions for manufacturing, logistics, defense. Companies connecting assets, vehicles, robots, sensors on their own secure networks. Enterprise 5G is where the real disruption happens. Is your company prepared? #Private5G #Enterprise",
  "iPhone shipments up in December 2025 despite earlier decline forecasts. Apple's China growth revised from -1% to +3%. But iPhone 18 delays in 2026 could drop iOS shipments 4.2%. Global memory shortage adding supply constraints. Turbulent times ahead. #Apple #iPhone",
  "Vivo X300 series launching December 2 with 200MP periscope telephoto and teleconverter lens. Camera-focused phones rivaling Oppo Find X9 and premium flagships. The smartphone camera war is heating up. Are megapixels still the battleground? #Vivo #Smartphones",
  "OnePlus 15R launching December 17 in India with Snapdragon 8 Gen 5 chipset. Mid-premium segment successor to 13R. India is becoming the testing ground for flagship features at mid-range prices. The value proposition is getting ridiculous. #OnePlus #Smartphones",
  "Realme P4x 5G launching December 4: gaming-ready with 144Hz display and MediaTek 7300 Ultra chipset. 8GB/12GB RAM options. Budget gaming phones are getting scary good specs. Can flagship gaming phones justify their premium anymore? #Realme #Gaming",
  "Apple's modular design and recycled materials becoming industry standard. Samsung following suit. E-waste reduction is now a competitive advantage. Sustainability isn't just marketing—it's driving actual product decisions. What took so long? #Sustainability #Tech",
  "5G-enabled AR/VR and autonomous vehicles require ultra-low latency (1ms). We're finally at the threshold where network lag stops being the bottleneck. The applications we couldn't build before? Now we can. What's the first killer 5G-native app? #5G #AR",
  "Standalone 5G networks (SA 5G) providing independent architecture that maximizes 5G capabilities. Moving beyond non-standalone that piggybacks on 4G. The true 5G experience requires SA infrastructure. When will your carrier make the switch? #5G #NetworkArchitecture",
  "Network slicing in 5G allowing creation of virtualized, isolated slices within network for diverse applications. One physical network, infinite virtual networks customized per use case. This is how 5G becomes everything to everyone. #5G #NetworkSlicing",
  "Beamforming enhancing 5G efficiency and data rates by directing signals precisely. Think Wi-Fi on steroids but for cellular. Massive MIMO ecosystems using advanced modulation for high data rates and low latency. The physics of faster wireless is wild. #5G #Beamforming",
  "Low-end 5G SoCs face $5-10 price premium over 4G chips, delaying mass adoption. Mid-range processors like Snapdragon 480 accelerating 5G. But 4G module production continues for cost-sensitive markets. The 4G to 5G transition is messier than expected. #5G #Chipsets",
  "Search interest for 5G smartphones peaked July 2025 (value 100) correlating with Oppo Find X8 Pro and Pixel 9 Pro XL launches. Seasonal dips in Feb (51) and May (58) due to post-holiday saturation. Product launch timing is everything. #5G #Marketing",
  "Ultra-premium smartphones ($800+) growing at 3.51% CAGR through 2030. Premiumization is real. Consumers willing to pay more for top-tier features. The smartphone market is bifurcating into budget and premium. Middle is disappearing. Where do you sit? #Smartphones #Premium",
  "Africa and Middle East becoming key 5G growth markets with micro-lending enabling adoption. Emerging markets are the future of 5G. Developed markets saturated. The next billion smartphone users are in regions we're not talking about enough. #5G #EmergingMarkets",
  "Supply chain resilience critical after geopolitical tensions. US tariffs forcing supplier diversification. The globalized supply chain is fracturing. Companies building regional redundancy. This changes everything about how tech gets made. #SupplyChain #Geopolitics",
  "Nvidia preparing RTX 60-series for early 2027. The GPU upgrade cycle continues. But with AI training demands exploding, will consumer GPUs get the innovation or is it all going to datacenter? What's your prediction for RTX 60? #Nvidia #GPU",
  "Ray-Ban Meta Gen 2 smart glasses with display already in the works. The next-gen of AR glasses taking shape. Meta's betting big on glasses over headsets long-term. Smart glasses with displays could finally be the AR breakthrough. Thoughts? #SmartGlasses #Meta",
  "Android XR platform with autospatialization coming soon. Google revealing XR ambitions. Samsung, Meta, Apple all pushing XR. The question isn't if XR goes mainstream—it's who wins the platform war. Place your bets now. #AndroidXR #XR",
  "Xreal's Project Aura reveals true intentions for Android XR. But will anyone actually wear them? The AR glasses form factor problem persists. Making something people want to wear is harder than making something technically impressive. #AR #SmartGlasses",
  "Meta Quest price increase potentially coming next year per leaked memo. Current prices might be unsustainable. Now's the time to buy if you've been waiting. Hardware subsidies can't last forever when market growth slows. #MetaQuest #VR",
  "Valve Frame lacking stereoscopic 3D at launch but it's on their list. Vision Pro and Galaxy XR have it. Valve playing catch-up or is 3D not essential? The feature war in VR is getting granular. What matters most to you? #VR #SteamFrame",
  "Google Photos on Samsung Galaxy XR automatically converting 2D photos to 3D. Apple Photos on Vision Pro does same. The killer feature nobody talks about: your old photos becoming 3D memories. This is the emotional hook for spatial computing. #XR #Photography",
  "3D movies gaining traction on Meta Quest 3 via Horizon TV hub. Universal Pictures and Blumhouse partnering with Meta. VR becoming the premium movie-watching experience. Would you watch movies in VR over a traditional screen? #VR #Entertainment",
  "Dwell Control accessibility feature on Vision Pro letting users select items by gaze alone. Addressing upper limb motor impairments. Technology that's genuinely inclusive isn't an afterthought—it's core design. Apple getting this right. #Accessibility #VisionPro",
  "Derby Dozen heuristics comparing Vision Pro and Quest 3 accessibility. Evaluating comfort and accessibility systematically. The headset that wins disabled users wins a huge market. Accessibility is competitive advantage. #Accessibility #VR",
  "Apple Vision Pro's passthrough rated as highest-quality mixed reality passthrough available. Even with narrower field of view. Quality over quantity in MR. But is quality enough to justify 3x the price? #VisionPro #MR",
  "Personas in Vision Pro looking surreal but conveying body language better than stylized avatars. The uncanny valley problem persists. We're not quite there on digital avatars. Another 2-3 years maybe? #VisionPro #Avatars",
  "Vision Pro positioned as primarily AR device that happens to have VR features. Not a VR competitor to Quest. Framing matters. Apple avoiding VR label entirely. Is this smart positioning or denial of what the product actually is? #VisionPro #Apple",
  "Meta Quest 3 announced shortly before Apple's WWDC Vision Pro reveal. Meta anticipated Apple's move. The product release chess game between Meta and Apple is fascinating. Who's playing offense and who's playing defense? #Meta #Apple",
  "visionOS operating system designed specifically for spatial computing. Custom OS for custom hardware. The software-hardware integration advantage Apple's known for. Can Android XR compete without that level of control? #visionOS #Apple",
  "Apple acquired Vrvana in 2017 for $30M for true-color AR overlay tech. The groundwork for Vision Pro was laid 8 years ago. Big tech product development timelines are wild. What are they building now that we'll see in 2033? #Apple #VisionPro",
  "120-degree field of view at 90Hz was Vrvana Totem's spec in 2017. We're still chasing those specs in 2025. Some problems are harder than they look. Field of view is the VR holy grail. When do we hit 180 degrees? #VR #FOV",
  "Apple's first new major product category since Apple Watch in 2015 was Vision Pro in 2023. 8-year gap between major product launches. The era of Apple launching completely new categories might be over. What's next after Vision Pro? #Apple #Innovation",
  "Apple avoiding marketing Vision Pro as VR headset in all presentations and materials. Intentional framing as spatial computer. Language shapes perception shapes adoption. Is this genius marketing or semantic games? #VisionPro #Marketing",
  "Eye tracking and speech recognition as primary inputs for Vision Pro. Motion gestures too. We're past the controller era in premium XR. The interface is your body. But is that actually better than controllers for games? #VisionPro #UX",
  "Physical inputs like pinch-to-select creating challenges for users with arthritis and motor impairments. Dwell Control addressing this. Tech designed for able-bodied users first, accessibility added later. We need to flip this. #Accessibility #Design",
  "Apple Glasses tipped for 2027 launch. Lightweight AR glasses after Vision Pro tests the market. The Vision Pro is the dev kit. Glasses are the real product. Apple playing the long game as always. Will you wear Apple Glasses? #AppleGlasses #AR",
  "Apple Vision Air and Glasses both tipped for 2027. Two new form factors in the same year. Apple could dominate spatial computing with a three-device lineup: Pro, Air, Glasses. Price points from $1,750 to $500? Thoughts? #Apple #AR",
  "visionOS 26 showing why Apple Glasses wait will be worth it. Software improvements paving way for hardware. The ecosystem buildout is happening now. By 2027, spatial computing could actually be ready. Could this be Apple's next iPhone? #visionOS #Apple",
  "6G trials aiming for 100x faster speeds enabling real-time AI and autonomous systems. 6G isn't just faster 5G—it's a completely different paradigm. Hyper-connected world with zero-latency everything. What becomes possible at terabit speeds? #6G #Future",
  "5G to 6G transition happening faster than 4G to 5G. Commercial 6G by 2030 in some regions. Early devices in 2026. The wireless generation gap is shrinking. Are we in permanent upgrade mode now? When does it stabilize? #5G #6G",
  "ITU and 3GPP coordinating 6G standards globally. China, EU, India, Japan, Korea, Singapore, Taiwan, US all racing. 6G becoming geopolitical. Whoever sets the standard wins the next decade of wireless. Which country leads? #6G #Geopolitics",
  "Satellite direct-to-device (D2D) emerging as major connectivity solution. Satellites talking directly to smartphones. No cell towers needed. Coverage everywhere. This changes rural connectivity entirely. Starlink for your phone. #Satellite #Connectivity",
  "Online scam legislation and policies adopted worldwide in 2025. AI-generated scams becoming sophisticated. Governments playing catch-up. Your phone becoming both threat vector and defense mechanism. Trust nothing. #Security #Scams",
  "API economy and cloud-edge convergence driving enterprise 5G. Private networks with API-driven services. The network becomes programmable. Software-defined everything. The infrastructure layer is disappearing into code. #5G #CloudEdge",
  "Generative telco and AI automation transforming customer experience in telecom. AI handling network optimization, customer service, billing. The telecom operator of 2025 is mostly AI. Human operators becoming rare. #Telecom #AI",
  "Energy efficiency and environmental impact becoming telecom priorities. 5G uses more power than 4G. Network operators optimizing for watts per bit. Green computing reaching the network layer. Sustainability meets connectivity. #5G #Sustainability",
  "Mobile industry contributing significantly to MENA digital transformation. 4G and 5G driving economic growth. Mobile sector's economic contribution measurable and growing. In developing regions, mobile is the only internet. #Mobile #MENA",
  "5G foundation for Qatar's digital economy powering finance, e-government, smart transport. Critical infrastructure running on wireless. Network security becomes national security. One outage could crash an entire economy. #5G #Qatar",
  "Oppo Find X8 Pro and Google Pixel 9 Pro XL driving July 2025 5G smartphone search interest. Product launches create search spikes. Marketing alignment with launch timing crucial. The search data tells the story. #Smartphones #Marketing",
  "Samsung Galaxy Z foldables and Huawei tri-screen designs proving foldable demand. Premium segment embracing flexible displays. The form factor experimentation phase is over. Foldables are here to stay. What's the next form factor? #Foldables #Samsung",
  "China's 618 festival creating seasonal 5G smartphone demand spike. Regional shopping events driving sales. E-commerce holidays becoming global product launch windows. Is every month going to have a shopping holiday soon? #Ecommerce #Smartphones",
  "Qualcomm Snapdragon 480 mid-range processor accelerating 5G democratization. Making 5G affordable for masses. The flagship features of 2023 are mid-range features of 2025. Trickle-down hardware economics working. #Qualcomm #5G",
  "MediaTek 7300 Ultra chipset enabling gaming at mid-range prices. Realme P4x bringing flagship gaming specs to budget segment. The mid-range smartphone of 2025 destroys the flagship of 2020. Where does it end? #MediaTek #Gaming",
  "Snapdragon 8 Gen 5 chipset in OnePlus 15R bringing top-tier performance to mid-premium. Qualcomm's naming scheme confusing but performance impressive. The flagship chip in a mid-range phone. Price-performance ratio wild. #Qualcomm #OnePlus",
  "144Hz displays becoming standard in gaming phones across price points. Smooth scrolling and gaming no longer premium-only. The display wars drove innovation we all benefit from. What's the next display metric race? #Displays #Gaming",
  "Periscope telephoto and teleconverter lenses in Vivo X300. Computational photography meets optical zoom. The camera bump is just going to keep growing. Eventually phones become cameras with phone features. #Photography #Vivo",
  "200MP sensors in smartphone cameras. Do we need 200 megapixels? Computational photography matters more than sensor size. But specs sell phones. The megapixel race will never end. #CameraPhones #Photography",
  "LLM-powered voice assistants becoming standard in Android and iOS. Gemini and Apple Intelligence everywhere. Your phone's assistant finally understands context. The voice interface might actually work now. #AI #VoiceAssistants",
  "Predictive battery management using AI learning your usage patterns. Your phone knows when you'll need power. Battery anxiety decreasing. The AI is optimizing around you without you noticing. Invisible AI is best AI. #AI #Battery",
  "Health monitoring features integrating LLM insights in smartphones. AI analyzing health data and providing personalized recommendations. Your phone becoming your health coach. But who owns your health data? Privacy question looms. #HealthTech #AI",
  "Modular designs reducing e-waste in flagship smartphones. Repairable, upgradeable phones fighting planned obsolescence. Right to repair movement winning. Sustainability becoming profitable. Finally. #Sustainability #RightToRepair",
  "Graphene batteries and silicon anodes commercializing in 2025-2026. The material science breakthrough we've been waiting for. Battery tech was stagnant for decades. Now multiple breakthroughs simultaneously. What changed? #Battery #Materials",
  "Under-screen 3D face scanning eliminating notches and punch holes. True full-screen displays coming. The all-screen phone dream almost here. Cameras and sensors disappearing below display. #Displays #Biometrics",
  "Multi-layered palm recognition adding security layer beyond fingerprint and face. Biometrics getting sophisticated. Your palm veins are unique. Reading them through your skin. Science fiction security is real. #Biometrics #Security",
  "Hardware zero-trust architectures turning phones into secure identity tokens. Decentralized identity systems on your device. Your phone becomes your passport, driver's license, wallet. Single device, entire identity. Ready? #Security #Identity",
  "Decentralized identity on smartphones enabling self-sovereign identity. You control your credentials, not big tech or government. Web3 identity going mainstream through mobile. The identity layer of internet is changing. #Web3 #Identity",
  "Encryption systems designed to resist quantum computing attacks standard in 2025. Quantum-safe crypto shipping now. Preparing for threats that don't exist yet. Forward-thinking security. Encrypt now, safe from quantum later. #Quantum #Encryption",
  "IoT diversification unlocking 5G opportunities beyond smartphones. Sensors, vehicles, wearables, appliances all connected. 5G's bigger impact might not be phones. It's the Internet of Everything. What gets connected next? #IoT #5G",
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
