import { Metadata } from 'next';
import Link from 'next/link';
import { articles } from '@/data/articles';

export const metadata: Metadata = {
  title: '125 Good Roasts To Serve the Ultimate Burn - Roasts.pro',
  description: 'Master the art of witty comebacks with these expertly crafted roasts that will leave your opponents speechless and the audience in stitches.',
  keywords: ['good roasts', 'roasts', 'comebacks', 'burns', 'witty comebacks'],
  alternates: {
    canonical: 'https://roasts.pro/125-good-roasts-ultimate-burn/',
  },
  openGraph: {
    title: '125 Good Roasts To Serve the Ultimate Burn',
    description: 'Master the art of witty comebacks with these expertly crafted roasts.',
    url: 'https://roasts.pro/125-good-roasts-ultimate-burn',
    type: 'article',
  },
};

export default function GoodRoastsPage() {
  const article = articles.find(a => a.slug === '125-good-roasts-ultimate-burn');
  
  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li>
              <Link href="/" className="hover:text-gray-700">Home</Link>
            </li>
            <li>/</li>
            <li className="text-gray-900">{article.title}</li>
          </ol>
        </nav>

        {/* Article Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{article.title}</h1>
          <p className="text-lg text-gray-600 mb-4">
            {article.excerpt}
          </p>
          <div className="flex items-center text-sm text-gray-500 space-x-4">
            <span>By {article.author}</span>
            <span>•</span>
            <span>{article.publishedAt}</span>
            <span>•</span>
            <span>{article.readingTime} min read</span>
          </div>
        </header>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          <p className="lead text-gray-700 mb-6">
            Have you ever sat around ruminating on all of the savage roasts and comebacks you could have used in an altercation? 
            Unfortunately, often, these brutal roasts don't come to mind until long after the interaction occurs. Don't get caught 
            without a pocket full of insults next time. Here are 125 good roasts to serve a spicy burn!
          </p>

          <p className="text-gray-700 mb-6">
            Coming up with insults that are not just harsh, but equally clever and borderline poetic (and hilarious) is somewhat 
            of an art. Not everybody has funny one-liners spring into their brains ready to immediately serve up on a silver platter. 
            So, it's best to have some savage roasts in your repertoire for when the opportunity presents itself.
          </p>

          <p className="text-gray-700 mb-8">
            Stand your ground and stick up for yourself. Keep reading for 125 good roasts that are so brutal, they'll leave your 
            victims feeling the burn long after they leave.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">125 Good Roasts</h2>

          <div className="space-y-4 mb-8">
            <p className="text-gray-800">1. You have a face that would make onions cry.</p>
            <p className="text-gray-800">2. I look at you and think, "Two billion years of evolution, for this?"</p>
            <p className="text-gray-800">3. I am jealous of all the people that have never met you.</p>
            <p className="text-gray-800">4. I consider you my sun. Now please get 93 million miles away from here.</p>
            <p className="text-gray-800">5. If laughter is the best medicine, your face must be curing the world.</p>
            <p className="text-gray-800">6. You're not simply a drama queen/king. You're the whole royal family.</p>
            <p className="text-gray-800">7. I was thinking about you today. It reminded me to take out the trash.</p>
            <p className="text-gray-800">8. You are the human version of cramps.</p>
            <p className="text-gray-800">9. You haven't changed since the last time I saw you. You really should.</p>
            <p className="text-gray-800">10. If ignorance is bliss, you must be the happiest person on Earth.</p>
            <p className="text-gray-800">11. Oh, sorry, did the middle of my sentence interrupt the beginning of yours?</p>
            <p className="text-gray-800">12. Don't worry, the first 40 years of childhood are always the hardest.</p>
            <p className="text-gray-800">13. I love what you've done with your hair. How'd you get it to come out of your nose like that?</p>
            <p className="text-gray-800">14. I never forget a person's face, but I'll be happy to make an exception in your situation.</p>
            <p className="text-gray-800">15. Mirrors can't talk. Lucky for you, they can't laugh either.</p>
            <p className="text-gray-800">16. When you were born, the doctors probably threw you out of the window, but the window threw you back.</p>
            <p className="text-gray-800">17. Were you born this dumb, or did you have to take lessons?</p>
            <p className="text-gray-800">18. Have a nice day…elsewhere.</p>
            <p className="text-gray-800">19. If you were any more inbred, you'd be a sandwich.</p>
            <p className="text-gray-800">20. Every time I have a stick in my hand, you start to look more and more like a piñata.</p>
            <p className="text-gray-800">21. Everyone is allowed to act stupid once in a while, but you're really abusing the privilege.</p>
            <p className="text-gray-800">22. Let's play horse. I'll be the front, and you can be yourself.</p>
            <p className="text-gray-800">23. I didn't mean to offend you, but I'll take the additional perk.</p>
            <p className="text-gray-800">24. You're not pretty enough to have such an ugly personality.</p>
            <p className="text-gray-800">25. If you're going to be two-faced, at least make one of them pretty.</p>
            <p className="text-gray-800">26. You just might be why the middle finger was invented in the first place.</p>
            <p className="text-gray-800">27. Is your name Wi-Fi? Because I'm not feeling a connection.</p>
            <p className="text-gray-800">28. If I was on a deserted island with you and a tin of corned beef, I'd rather eat you and talk to the corned beef.</p>
            <p className="text-gray-800">29. Oh, you're talking to me? I thought you only did that behind my back.</p>
            <p className="text-gray-800">30. I'd smack you, but I'm against animal abuse.</p>
            <p className="text-gray-800">31. I don't dislike you, but if you were drowning, I'd give you a high-five.</p>
            <p className="text-gray-800">32. It's hilarious how you try to fit your entire vocabulary into one sentence.</p>
            <p className="text-gray-800">33. I don't want to rain on your parade! I'd rather summon a typhoon.</p>
            <p className="text-gray-800">34. Did you know your incubator had tinted windows? That explains a lot.</p>
            <p className="text-gray-800">35. You can't imagine how much happiness you can bring…by leaving the room.</p>
            <p className="text-gray-800">36. When I see you coming, I get pre-annoyed. I figure it's smart to give myself a head start.</p>
            <p className="text-gray-800">37. If I had a dollar every time you shut up, I would give it back as a thank you.</p>
            <p className="text-gray-800">38. You are a pizza burn on the roof of the world's mouth.</p>
            <p className="text-gray-800">39. You're the reason this country has to put directions on shampoo bottles.</p>
            <p className="text-gray-800">40. You're so annoying, you could make a Happy Meal cry.</p>
            <p className="text-gray-800">41. I'm not saying you're ugly, but if you were a scarecrow, birds would avoid you.</p>
            <p className="text-gray-800">42. You should really come with a warning label.</p>
            <p className="text-gray-800">43. Honey, the only thing bothering me is placed between your ears.</p>
            <p className="text-gray-800">44. Earth is full. Go somewhere else.</p>
            <p className="text-gray-800">45. The people who tolerate you daily are the real heroes.</p>
            <p className="text-gray-800">46. I told my therapist about you. She didn't believe me.</p>
            <p className="text-gray-800">47. Somewhere tree is producing oxygen for you. I'm sorry for it.</p>
            <p className="text-gray-800">48. You have your entire life to be an idiot. Why not take today off?</p>
            <p className="text-gray-800">49. How many licks 'till I get to the interesting part of this conversation?</p>
            <p className="text-gray-800">50. Why are you rolling your eyes? Looking for your brain?</p>
            <p className="text-gray-800">51. You must have a Ph.D. in stupidology.</p>
            <p className="text-gray-800">52. You are like a software update. Every time I see you, I immediately think, "Not now."</p>
            <p className="text-gray-800">53. All mistakes are fixable—except for you.</p>
            <p className="text-gray-800">54. You're the reason the divorce rate is so high.</p>
            <p className="text-gray-800">55. Let me tell you. If I don't answer you the first time, what makes you think the next 25 will work?</p>
            <p className="text-gray-800">56. I gave out all my trophies a while ago, but here's a participation award.</p>
            <p className="text-gray-800">57. A glowstick has a brighter future than you.</p>
            <p className="text-gray-800">58. It's sad what happened to your face. Oh wait, that's how it's always looked?</p>
            <p className="text-gray-800">59. I'm listening. I just need a minute to process so much stupid information at once.</p>
            <p className="text-gray-800">60. When I look at you, I think to myself where have you been my whole life? And can you go back there?</p>
            <p className="text-gray-800">61. Beauty is only skin deep, but ugly goes clean to the bone.</p>
            <p className="text-gray-800">62. I would agree with you, but then we'd both be wrong.</p>
            <p className="text-gray-800">63. You look like something that came out of a slow cooker.</p>
            <p className="text-gray-800">64. It would be a great day if you accidentally used a glue stick instead of a Chapstick.</p>
            <p className="text-gray-800">65. I bet I could remove 90 percent of your good looks with a moist towelette.</p>
            <p className="text-gray-800">66. You're so fake, even Barbie is jealous.</p>
            <p className="text-gray-800">67. I suggest you do a little soul-searching – you may actually find one.</p>
            <p className="text-gray-800">68. I know I make a lot of stupid choices, but hanging out with you was the worst of them all.</p>
            <p className="text-gray-800">69. Stupidity isn't a crime, so you're free to go.</p>
            <p className="text-gray-800">70. I was going to make a joke about your life, but I see life beat me to the punch.</p>
            <p className="text-gray-800">71. It must be fun to wake up each morning knowing that you are that much closer to achieving your dreams of complete and utter mediocrity.</p>
            <p className="text-gray-800">72. The truth will set you free: you're the worst. Okay, you're free to go.</p>
            <p className="text-gray-800">73. You remind me of the end pieces of a loaf of bread—nobody wants you.</p>
            <p className="text-gray-800">74. Calling you an idiot would be an insult to stupid people. You're much worse than that.</p>
            <p className="text-gray-800">75. It's a parent's job to raise their children right. So looking at you, it's obvious that yours quit after just one day.</p>
            <p className="text-gray-800">76. You're like a grey sprinkle in a Funfetti cake.</p>
            <p className="text-gray-800">77. You look like a "before" photo.</p>
            <p className="text-gray-800">78. You have so many gaps in your teeth it looks like your tongue is in jail.</p>
            <p className="text-gray-800">79. Do your parents realize they're living proof that two wrongs don't make a right?</p>
            <p className="text-gray-800">80. Hurting you is the last thing I want to do, but it's still on the list.</p>
            <p className="text-gray-800">81. You're like the human version of athlete's foot—annoying and hard to get rid of.</p>
            <p className="text-gray-800">82. Oops, my bad. I could've sworn I was dealing with an adult.</p>
            <p className="text-gray-800">83. You're the reason gene pools need lifeguards.</p>
            <p className="text-gray-800">84. You're like a grey cloud. It's a beautiful day when you disappear.</p>
            <p className="text-gray-800">85. Light travels faster than sound, which is why you seemed bright until you spoke.</p>
            <p className="text-gray-800">86. I've seen clowns like you before, but I always had to pay an admission fee.</p>
            <p className="text-gray-800">87. Grab a straw because you suck.</p>
            <p className="text-gray-800">88. I like the way you comb your hair. It's impressive how you're able to hide the horns.</p>
            <p className="text-gray-800">89. Good story, but in what chapter do you shut up?</p>
            <p className="text-gray-800">90. You need a kiss on the neck from an alligator.</p>
            <p className="text-gray-800">91. It's too bad you can't photoshop your ugly personality.</p>
            <p className="text-gray-800">92. Give me a minute. I'm trying to think of an insult simple enough for you to understand!</p>
            <p className="text-gray-800">93. If your brain was dynamite, there wouldn't be enough to blow your hat off.</p>
            <p className="text-gray-800">94. Congrats on being the top of the bell curve.</p>
            <p className="text-gray-800">95. I really hope you don't homeschool your kids.</p>
            <p className="text-gray-800">96. I hope your wife brings a date to your funeral.</p>
            <p className="text-gray-800">97. Please just tell me you don't plan to home-school your kids.</p>
            <p className="text-gray-800">98. Don't be ashamed of who you are. That's a job for your parents.</p>
            <p className="text-gray-800">99. You see that door? I'd love if you were on the other side of it.</p>
            <p className="text-gray-800">100. Sorry, sarcasm falls out of my mouth like stupidity falls out of yours.</p>
            <p className="text-gray-800">101. I will slap you so hard that even Google won't be able to find you.</p>
            <p className="text-gray-800">102. Your secrets are always safe with me! I never even listen when you tell me.</p>
            <p className="text-gray-800">103. Hey, your village called. They want their idiot back!</p>
            <p className="text-gray-800">104. Your family tree must be a cactus because you're all a bunch of pricks.</p>
            <p className="text-gray-800">105. Why don't you check out eBay and see if they have a life for sale?</p>
            <p className="text-gray-800">106. So a thought crossed your mind? That must have been a long and lonely journey for you.</p>
            <p className="text-gray-800">107. How long does it take you to put makeup on your two faces every morning?</p>
            <p className="text-gray-800">108. Don't feel bad. A lot of people have no talent.</p>
            <p className="text-gray-800">109. I thought I had the flu, but then I realized your face makes me sick to my stomach.</p>
            <p className="text-gray-800">110. I would punch you, but I don't want to improve the appearance of your face.</p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Good Roasts That Rhyme</h2>

          <div className="space-y-4 mb-8">
            <p className="text-gray-800">111. Poof be gone, your breath is too strong, I don't want to be mean, but you need Listerine.</p>
            <p className="text-gray-800">112. Everybody knows that you're stupid, you thought you could fall in love because you saw a fake Cupid.</p>
            <p className="text-gray-800">113. Don't feel bad, don't feel blue, Frankenstein was as ugly as you.</p>
            <p className="text-gray-800">114. I'm not trying to make fun of you, but you can't even count higher than number two.</p>
            <p className="text-gray-800">115. It's not my fault, it's everyone's opinion, I'm pretty cool, and you're just a minion.</p>
            <p className="text-gray-800">116. Your fashion sense is quite a mystery, did you get dressed in a state of emergency?</p>
            <p className="text-gray-800">117. Roses are red, violets are blue, I thought I was ugly until I met you!</p>
            <p className="text-gray-800">118. Your hairstyle, it's a work of art! If the goal was to scare, you've played your part.</p>
            <p className="text-gray-800">119. Twinkle, twinkle, little star, I want to hit you with my car.</p>
            <p className="text-gray-800">120. Roses are red, monsters are green, look in the mirror, you'll see what I mean.</p>
            <p className="text-gray-800">121. Your sense of humor, it's a little thin, maybe it got lost in your double chin.</p>
            <p className="text-gray-800">122. Your memory is a fleeting breeze, a forgotten face with such great ease.</p>
            <p className="text-gray-800">123. Roses are red, violets are blue, I have five fingers and the middle one is for you.</p>
            <p className="text-gray-800">124. If I were a dog and you were a flower I'd lift my leg up and give you a shower.</p>
            <p className="text-gray-800">125. I'm the type of person to laugh at mistakes, so sorry if I laugh at your face.</p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Use These Roasts</h2>

          <p className="text-gray-700 mb-4">
            Remember, the art of roasting is all about timing, delivery, and knowing your audience. These roasts work best when:
          </p>

          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>You're in a playful, lighthearted environment</li>
            <li>Everyone involved understands it's all in good fun</li>
            <li>You can take what you dish out</li>
            <li>The roast fits the situation and relationship</li>
          </ul>

          <p className="text-gray-700 mb-6">
            The best roasts are clever, unexpected, and delivered with perfect timing. Practice your delivery, know when to hold back,
            and always be prepared for a comeback. Remember, the goal is to be funny, not to actually hurt someone's feelings.
          </p>

          <p className="text-gray-700">
            Whether you're engaging in friendly banter with friends or need a quick comeback in a verbal sparring match,
            these 125 roasts will ensure you're never caught without the perfect burn. Use them wisely, and may your wit be as sharp as your tongue!
          </p>
        </article>

        {/* Related Articles */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/165-good-roasts-burn-so-bad" className="group">
              <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h4 className="font-semibold text-gray-900 group-hover:text-amber-600 mb-2">
                  165 Good Roasts That Burn So Bad
                </h4>
                <p className="text-sm text-gray-600">
                  An extensive compilation of brutal roasts that hit harder than a freight train.
                </p>
              </div>
            </Link>
            <Link href="/savage-roasts-art-ruthless-comedy" className="group">
              <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h4 className="font-semibold text-gray-900 group-hover:text-amber-600 mb-2">
                  Savage Roasts: The Art of Ruthless Comedy
                </h4>
                <p className="text-sm text-gray-600">
                  Master the art of savage roasting with expertly crafted burns that show no mercy.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
