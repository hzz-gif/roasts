import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Roasts.pro - The Ultimate Comedy & Roast Content Hub',
  description: 'Discover the best roasts, comedy content, and witty commentary. From celebrity roasts to everyday humor, find the perfect burn for any situation.',
  keywords: ['roasts', 'comedy', 'humor', 'burns', 'comebacks', 'witty', 'entertainment'],
  alternates: {
    canonical: 'https://roasts.pro/',
  },
  openGraph: {
    title: 'Roasts.pro - The Ultimate Comedy & Roast Content Hub',
    description: 'Discover the best roasts, comedy content, and witty commentary.',
    url: 'https://roasts.pro/',
    type: 'website',
  },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-50 to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Good <span className="text-amber-600">Roasts</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover the finest roasts, savage comebacks, and hilarious content from the world of comedy and entertainment
            </p>

            {/* Featured Articles Section */}
            <div className="mt-16 space-y-6">
              {/* Main Featured Article - Left Image, Right Text */}
              <Link href="/125-good-roasts-ultimate-burn" className="group block">
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row">
                    {/* Left Image */}
                    <div className="md:w-1/2">
                      <img
                        src="/images/articles/microphone-stage.jpg"
                        alt="125 Good Roasts"
                        className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    {/* Right Text */}
                    <div className="md:w-1/2 p-6 flex flex-col justify-center bg-amber-50">
                      <div className="mb-3">
                        <span className="bg-red-500 text-white px-3 py-1 rounded text-sm font-medium">Comedy, Roasts & Burns</span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-amber-700 transition-colors leading-tight">
                        125 Good Roasts To Serve the Ultimate Burn
                      </h2>
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        Master the art of witty comebacks with these expertly crafted roasts that will leave your opponents speechless and the audience in stitches.
                      </p>
                      <div className="text-sm text-gray-600 font-medium">
                        Roast Master
                      </div>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Secondary Articles Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Article 2 */}
                <Link href="/165-good-roasts-burn-so-bad" className="group block">
                  <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full">
                    <img
                      src="/images/articles/microphone-closeup.jpg"
                      alt="165 Good Roasts That Burn"
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="p-4">
                      <h2 className="font-bold text-gray-900 text-lg group-hover:text-amber-700 transition-colors leading-tight">
                        165 Good Roasts That Burn So Bad - Best Life
                      </h2>
                    </div>
                  </div>
                </Link>

                {/* Article 3 */}
                <Link href="/roasts-that-hurt-devastating-burns" className="group block">
                  <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full">
                    <img
                      src="/images/articles/people-laughing.jpg"
                      alt="Roasts That Hurt"
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="p-4">
                      <h2 className="font-bold text-gray-900 text-lg group-hover:text-amber-700 transition-colors leading-tight">
                        Roasts That Hurt: The Most Devastating Burns Ever
                      </h2>
                    </div>
                  </div>
                </Link>

                {/* Article 4 */}
                <Link href="/savage-roasts-art-ruthless-comedy" className="group block">
                  <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full">
                    <img
                      src="/images/articles/standup-comedian.jpg"
                      alt="Savage Roasts"
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="p-4">
                      <h2 className="font-bold text-gray-900 text-lg group-hover:text-amber-700 transition-colors leading-tight">
                        Savage Roasts: The Art of Ruthless Comedy
                      </h2>
                    </div>
                  </div>
                </Link>

                {/* Article 5 */}
                <Link href="/funny-roasts-for-friends" className="group block">
                  <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full">
                    <img
                      src="/images/articles/microphone-stage.jpg"
                      alt="Funny Roasts for Friends"
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="p-4">
                      <h2 className="font-bold text-gray-900 text-lg group-hover:text-amber-700 transition-colors leading-tight">
                        Funny Roasts for Friends That Are Hilarious
                      </h2>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>



      {/* 125 Good Roasts Article Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="bg-white rounded-lg shadow-sm p-8">
            <header className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Good Roasts That Hurt</h2>
              <p className="text-lg text-gray-600 mb-4">
                These roasts are equal parts savage and hilarious. Stock up on the insults for when you need them!
              </p>
              <div className="text-sm text-gray-500">
                By Kelsey Kryger | Jan 13, 2024
              </div>
            </header>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6">
                Have you ever sat around ruminating on all of the savage roasts and comebacks you could have used in an altercation? Unfortunately, often, these brutal roasts don&apos;t come to mind until long after the interaction occurs. Don&apos;t get caught without a pocket full of insults next time. <em>Parade</em> is providing 125 <strong>good roasts</strong> to serve a spicy burn!
              </p>

              <p className="text-gray-700 mb-6">
                Coming up with insults that are not just harsh, but equally clever and borderline poetic (and hilarious) is somewhat of an art. Not everybody has funny one-liners spring into their brains ready to immediately serve up on a silver platter. So, it&apos;s best to have some savage roasts in your repertoire for when the opportunity presents itself.
              </p>

              <p className="text-gray-700 mb-8">
                Stand your ground and stick up for yourself. Keep reading for 125 good roasts that are so brutal, they&apos;ll leave your victims feeling the burn long after they leave.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-6">125 Good Roasts</h3>

              <div className="space-y-6 mb-8 font-sans">
                <p className="text-gray-800 text-lg leading-relaxed">1. Your appearance could make vegetables weep uncontrollably.</p>

                <p className="text-gray-800 text-lg leading-relaxed">2. Observing you makes me question millions of years of human development.</p>

                <p className="text-gray-800 text-lg leading-relaxed">3. I envy everyone who has never had the displeasure of meeting you.</p>

                <p className="text-gray-800 text-lg leading-relaxed">4. You remind me of the sun - I wish you were 93 million miles away from me.</p>

                <p className="text-gray-800 text-lg leading-relaxed">5. If comedy is therapeutic, your appearance must be healing the entire planet.</p>

                <p className="text-gray-800 text-lg leading-relaxed">6. You&apos;re not just dramatic royalty - you&apos;re the entire monarchy of attention-seeking.</p>

                <p className="text-gray-800 text-lg leading-relaxed">7. Thinking about you today reminded me that garbage collection exists for a reason.</p>

                <p className="text-gray-800 text-lg leading-relaxed">8. You embody the human equivalent of monthly discomfort.</p>

                <p className="text-gray-800 text-lg leading-relaxed">9. You remain exactly the same since our last encounter - perhaps consider some improvements.</p>

                <p className="text-gray-800 text-lg leading-relaxed">10. If stupidity brings joy, you must be living in perpetual euphoria.</p>

                <p className="text-gray-800 text-lg leading-relaxed">11. Pardon me, did my conversation accidentally interrupt your monologue?</p>

                <p className="text-gray-800 text-lg leading-relaxed">12. No worries, the initial four decades of immaturity are typically the most challenging.</p>

                <p className="text-gray-800 text-lg leading-relaxed">13. Your hairstyle is fascinating - how did you achieve that nasal emergence effect?</p>

                <p className="text-gray-800 text-lg leading-relaxed">14. I rarely forget faces, but yours deserves a special exemption.</p>

                <p className="text-gray-800 text-lg leading-relaxed">15. Reflective surfaces remain silent - fortunately for you, they can&apos;t express amusement either.</p>

                <p className="text-gray-800 text-lg leading-relaxed">16. At your birth, medical professionals likely attempted defenestration, but even the window rejected you.</p>

                <p className="text-gray-800 text-lg leading-relaxed">17. Is this natural foolishness, or did you invest in educational stupidity?</p>

                <p className="text-gray-800 text-lg leading-relaxed">18. Enjoy your day - preferably in a different location.</p>

                <p className="text-gray-800 text-lg leading-relaxed">19. Any additional family intermarriage would qualify you as lunch meat.</p>

                <p className="text-gray-800 text-lg leading-relaxed">20. Whenever I hold a wooden stick, you increasingly resemble a party decoration meant for hitting.</p>

                <p className="text-gray-800 text-lg leading-relaxed">21. While everyone deserves occasional foolishness, you&apos;re clearly overusing this privilege.</p>

                <p className="text-gray-800 text-lg leading-relaxed">22. Let&apos;s play equestrian games - I&apos;ll be the front end, you can remain yourself.</p>

                <p className="text-gray-800 text-lg leading-relaxed">23. Offending you wasn&apos;t my intention, but I&apos;ll gladly accept this bonus outcome.</p>

                <p className="text-gray-800 text-lg leading-relaxed">24. Your attractiveness level doesn&apos;t justify such an unpleasant personality.</p>

                <p className="text-gray-800 text-lg leading-relaxed">25. If you insist on duplicity, at least make one version aesthetically pleasing.</p>
              </div>

              <div className="space-y-6 mb-8 font-sans">
                <p className="text-gray-800 text-lg leading-relaxed">26. You might be the original inspiration for humanity&apos;s most offensive gesture.</p>

                <p className="text-gray-800 text-lg leading-relaxed">27. Are you wireless internet? Because I&apos;m experiencing zero connectivity.</p>

                <p className="text-gray-800 text-lg leading-relaxed">28. Stranded on an island with you and canned meat, I&apos;d prefer consuming you while conversing with the tin.</p>

                <p className="text-gray-800 text-lg leading-relaxed">29. You&apos;re addressing me directly? I assumed you only communicated through gossip.</p>

                <p className="text-gray-800 text-lg leading-relaxed">30. I&apos;d strike you, but I oppose cruelty to wildlife.</p>

                <p className="text-gray-800 text-lg leading-relaxed">31. I don&apos;t hate you, but if you were drowning, I&apos;d offer enthusiastic applause.</p>

                <p className="text-gray-800 text-lg leading-relaxed">32. It&apos;s amusing watching you cram your limited vocabulary into single sentences.</p>

                <p className="text-gray-800 text-lg leading-relaxed">33. I don&apos;t wish to dampen your celebration - I&apos;d prefer to unleash a natural disaster.</p>

                <p className="text-gray-800 text-lg leading-relaxed">34. Were you aware your prenatal chamber featured darkened glass? That clarifies everything.</p>

                <p className="text-gray-800 text-lg leading-relaxed">35. You cannot fathom the joy you could create... simply by departing this space.</p>

                <p className="text-gray-800 text-lg leading-relaxed">36. Your approach triggers preemptive irritation - I believe in preparation.</p>

                <p className="text-gray-800 text-lg leading-relaxed">37. If I earned currency for your silence, I&apos;d return it as gratitude payment.</p>

                <p className="text-gray-800 text-lg leading-relaxed">38. You represent a scalding cheese injury on the planet&apos;s palate.</p>

                <p className="text-gray-800 text-lg leading-relaxed">39. You&apos;re why our nation requires hair-washing instructions on bottles.</p>

                <p className="text-gray-800 text-lg leading-relaxed">40. Your irritation level could induce tears in children&apos;s fast food.</p>

                <p className="text-gray-800 text-lg leading-relaxed">41. I won&apos;t call you unattractive, but as agricultural bird deterrent, you&apos;d excel.</p>

                <p className="text-gray-800 text-lg leading-relaxed">42. You desperately need cautionary packaging.</p>

                <p className="text-gray-800 text-lg leading-relaxed">43. Darling, my only concern resides within your cranial cavity.</p>

                <p className="text-gray-800 text-lg leading-relaxed">44. Our planet has reached capacity - seek alternative accommodation.</p>

                <p className="text-gray-800 text-lg leading-relaxed">45. Those who endure your presence daily deserve medals of honor.</p>

                <p className="text-gray-800 text-lg leading-relaxed">46. I described you to my counselor - she questioned my sanity.</p>

                <p className="text-gray-800 text-lg leading-relaxed">47. Some unfortunate plant generates oxygen for your survival - I pity its sacrifice.</p>

                <p className="text-gray-800 text-lg leading-relaxed">48. You possess an entire lifetime for foolishness - consider taking today as vacation.</p>

                <p className="text-gray-800 text-lg leading-relaxed">49. How much effort until we reach the engaging portion of this discussion?</p>

                <p className="text-gray-800 text-lg leading-relaxed">50. Why the eye movement? Searching for your missing intelligence?</p>
              </div>

              <div className="space-y-6 mb-8 font-sans">
                <p className="text-gray-800 text-lg leading-relaxed">51. You apparently hold advanced degrees in the science of stupidity.</p>

                <p className="text-gray-800 text-lg leading-relaxed">52. You resemble system updates - whenever I see you, I think &quot;postpone indefinitely.&quot;</p>

                <p className="text-gray-800 text-lg leading-relaxed">53. Most errors can be corrected - you represent the exception.</p>

                <p className="text-gray-800 text-lg leading-relaxed">54. You single-handedly explain rising relationship dissolution statistics.</p>

                <p className="text-gray-800 text-lg leading-relaxed">55. If I ignore you initially, what suggests repeated attempts will succeed?</p>

                <p className="text-gray-800 text-lg leading-relaxed">56. I&apos;ve distributed all my awards, but here&apos;s recognition for mere attendance.</p>

                <p className="text-gray-800 text-lg leading-relaxed">57. Emergency lighting devices possess more promising futures than you.</p>

                <p className="text-gray-800 text-lg leading-relaxed">58. It&apos;s tragic what occurred to your appearance - oh wait, that&apos;s permanent?</p>

                <p className="text-gray-800 text-lg leading-relaxed">59. I&apos;m paying attention - just processing this overwhelming amount of nonsense.</p>

                <p className="text-gray-800 text-lg leading-relaxed">60. Observing you makes me wonder about your lifetime location - can you return there?</p>

                <p className="text-gray-800 text-lg leading-relaxed">61. Attractiveness is superficial, but your ugliness penetrates to the core.</p>

                <p className="text-gray-800 text-lg leading-relaxed">62. I&apos;d support your position, but then we&apos;d both be incorrect.</p>

                <p className="text-gray-800 text-lg leading-relaxed">63. Your appearance suggests prolonged cooking appliance origins.</p>

                <p className="text-gray-800 text-lg leading-relaxed">64. What a wonderful day it would be if you confused adhesive with lip balm.</p>

                <p className="text-gray-800 text-lg leading-relaxed">65. I could eliminate most of your appeal with a damp cloth.</p>

                <p className="text-gray-800 text-lg leading-relaxed">66. Your artificiality makes plastic dolls envious.</p>

                <p className="text-gray-800 text-lg leading-relaxed">67. I recommend spiritual exploration - you might discover you possess one.</p>

                <p className="text-gray-800 text-lg leading-relaxed">68. Despite my poor decisions, associating with you ranks as the absolute worst.</p>

                <p className="text-gray-800 text-lg leading-relaxed">69. Foolishness isn&apos;t illegal, so you&apos;re free to continue.</p>

                <p className="text-gray-800 text-lg leading-relaxed">70. I planned to joke about your existence, but reality already did.</p>

                <p className="text-gray-800 text-lg leading-relaxed">71. How delightful it must be awakening daily, approaching your goal of absolute ordinariness.</p>

                <p className="text-gray-800 text-lg leading-relaxed">72. Honesty liberates: you&apos;re terrible. Now you&apos;re free to depart.</p>

                <p className="text-gray-800 text-lg leading-relaxed">73. You&apos;re like bread crusts - universally unwanted.</p>

                <p className="text-gray-800 text-lg leading-relaxed">74. Labeling you foolish would insult genuinely stupid people - you&apos;re far worse.</p>

                <p className="text-gray-800 text-lg leading-relaxed">75. Parental responsibility involves proper child-rearing - clearly yours abandoned this duty immediately.</p>
              </div>

              <p className="text-gray-700 mb-6">
                <strong>Pro tip:</strong> Remember, the best roasts are delivered with confidence and perfect timing. These savage comebacks work best when used sparingly and in the right context. Whether you&apos;re dealing with a bully, engaging in friendly banter, or just need a quick comeback, having these roasts in your arsenal will ensure you&apos;re never caught off guard again.
              </p>

              <div className="space-y-6 mb-8 font-sans">
                <p className="text-gray-800 text-lg leading-relaxed">76. You&apos;re like colorless confetti in a celebration cake - completely pointless.</p>

                <p className="text-gray-800 text-lg leading-relaxed">77. Your appearance resembles a &quot;before&quot; transformation image.</p>

                <p className="text-gray-800 text-lg leading-relaxed">78. Your dental spacing makes your tongue appear incarcerated.</p>

                <p className="text-gray-800 text-lg leading-relaxed">79. Do your parents understand they&apos;re evidence that double negatives don&apos;t create positives?</p>

                <p className="text-gray-800 text-lg leading-relaxed">80. Harming you ranks last on my agenda, but it remains listed.</p>

                <p className="text-gray-800 text-lg leading-relaxed">81. You embody the human equivalent of fungal foot infection - irritating and persistent.</p>

                <p className="text-gray-800 text-lg leading-relaxed">82. My mistake - I assumed I was interacting with a mature individual.</p>

                <p className="text-gray-800 text-lg leading-relaxed">83. You justify the need for genetic pool safety supervision.</p>

                <p className="text-gray-800 text-lg leading-relaxed">84. You resemble overcast weather - days improve when you vanish.</p>

                <p className="text-gray-800 text-lg leading-relaxed">85. Illumination moves faster than sound, explaining why you seemed intelligent before speaking.</p>

                <p className="text-gray-800 text-lg leading-relaxed">86. I&apos;ve encountered entertainers like you, but admission fees were required.</p>

                <p className="text-gray-800 text-lg leading-relaxed">87. Acquire a drinking tube because your performance is terrible.</p>

                <p className="text-gray-800 text-lg leading-relaxed">88. Your hairstyling impressively conceals those demonic protrusions.</p>

                <p className="text-gray-800 text-lg leading-relaxed">89. Interesting narrative - which section features your silence?</p>

                <p className="text-gray-800 text-lg leading-relaxed">90. You require reptilian affection on your neck region.</p>

                <p className="text-gray-800 text-lg leading-relaxed">91. Unfortunately, digital editing can&apos;t improve your character flaws.</p>

                <p className="text-gray-800 text-lg leading-relaxed">92. Please wait - I&apos;m formulating an insult simple enough for your comprehension.</p>

                <p className="text-gray-800 text-lg leading-relaxed">93. If your intellect were explosive, it couldn&apos;t disturb your headwear.</p>

                <p className="text-gray-800 text-lg leading-relaxed">94. Congratulations on achieving statistical average mediocrity.</p>

                <p className="text-gray-800 text-lg leading-relaxed">95. I sincerely hope you avoid educating children at home.</p>

                <p className="text-gray-800 text-lg leading-relaxed">96. I hope your spouse brings companionship to your memorial service.</p>

                <p className="text-gray-800 text-lg leading-relaxed">97. Please confirm you won&apos;t be providing domestic education to offspring.</p>

                <p className="text-gray-800 text-lg leading-relaxed">98. Don&apos;t feel embarrassed about your identity - that&apos;s your parents&apos; responsibility.</p>

                <p className="text-gray-800 text-lg leading-relaxed">99. Notice that exit? I&apos;d prefer your presence on its opposite side.</p>

                <p className="text-gray-800 text-lg leading-relaxed">100. Apologies, my sarcasm escapes like your foolishness does.</p>
              </div>

              <div className="space-y-6 mb-8 font-sans">
                <p className="text-gray-800 text-lg leading-relaxed">101. I&apos;ll strike you so forcefully that search engines won&apos;t locate you.</p>

                <p className="text-gray-800 text-lg leading-relaxed">102. Your confidential information remains secure with me - I never pay attention anyway.</p>

                <p className="text-gray-800 text-lg leading-relaxed">103. Your community contacted me - they&apos;re requesting their fool&apos;s return.</p>

                <p className="text-gray-800 text-lg leading-relaxed">104. Your genealogy resembles desert plants because you&apos;re all sharp and unpleasant.</p>

                <p className="text-gray-800 text-lg leading-relaxed">105. Perhaps browse online auctions for available existence opportunities.</p>

                <p className="text-gray-800 text-lg leading-relaxed">106. An idea traversed your mind? What an extensive and solitary expedition that must have been.</p>

                <p className="text-gray-800 text-lg leading-relaxed">107. How much time does applying cosmetics to both personalities require each morning?</p>

                <p className="text-gray-800 text-lg leading-relaxed">108. Don&apos;t feel discouraged - many individuals lack abilities entirely.</p>

                <p className="text-gray-800 text-lg leading-relaxed">109. I suspected illness, then realized your appearance causes my nausea.</p>

                <p className="text-gray-800 text-lg leading-relaxed">110. I&apos;d strike you, but I refuse to enhance your facial aesthetics.</p>

                <p className="text-gray-800 text-lg leading-relaxed">111. Vanish quickly, your breath overwhelms, I don&apos;t intend cruelty, but you need mouthwash desperately.</p>

                <p className="text-gray-800 text-lg leading-relaxed">112. Everyone recognizes your foolishness, you believed romance possible after seeing fake cherubs.</p>

                <p className="text-gray-800 text-lg leading-relaxed">113. Don&apos;t feel sad, don&apos;t feel glum, classic monsters were as hideous as you&apos;ve become.</p>

                <p className="text-gray-800 text-lg leading-relaxed">114. I&apos;m not mocking you intentionally, but your counting stops at number two, apparently.</p>

                <p className="text-gray-800 text-lg leading-relaxed">115. It&apos;s not my error, it&apos;s universal consensus, I&apos;m quite awesome, you&apos;re just a servant.</p>

                <p className="text-gray-800 text-lg leading-relaxed">116. Your clothing choices remain mysterious, did you dress during a crisis situation?</p>

                <p className="text-gray-800 text-lg leading-relaxed">117. Flowers are crimson, violets are azure, I considered myself unattractive until meeting you for sure.</p>

                <p className="text-gray-800 text-lg leading-relaxed">118. Your hairstyle represents artistic achievement - if frightening people was the intended mission.</p>

                <p className="text-gray-800 text-lg leading-relaxed">119. Sparkle, sparkle, celestial light, I wish to strike you with my vehicle tonight.</p>

                <p className="text-gray-800 text-lg leading-relaxed">120. Flowers are crimson, creatures are emerald, check your reflection, you&apos;ll understand my referral.</p>

                <p className="text-gray-800 text-lg leading-relaxed">121. Your comedy sense seems rather sparse, perhaps it vanished in your facial mass.</p>

                <p className="text-gray-800 text-lg leading-relaxed">122. Your recollection flows like wind, a forgotten visage, easily rescinded.</p>

                <p className="text-gray-800 text-lg leading-relaxed">123. Flowers are crimson, violets are azure, I possess five digits and the center one&apos;s for you, pure.</p>

                <p className="text-gray-800 text-lg leading-relaxed">124. If I were canine and you were flora, I&apos;d raise my limb and give you a watery aura.</p>

                <p className="text-gray-800 text-lg leading-relaxed">125. I&apos;m someone who chuckles at errors, so forgive me if I laugh at your facial terrors.</p>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-amber-900 mb-3">When to Use These Roasts</h4>
                <ul className="list-disc list-inside space-y-2 text-amber-800">
                  <li>During friendly roast battles with friends</li>
                  <li>When someone is being unnecessarily rude</li>
                  <li>In comedy settings or improv situations</li>
                  <li>When you need a quick comeback to diffuse tension</li>
                  <li>For social media responses (use wisely!)</li>
                </ul>
              </div>
            </div>
          </article>
        </div>
      </section>



    </div>
  );
}
