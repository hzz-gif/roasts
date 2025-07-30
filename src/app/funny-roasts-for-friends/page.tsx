import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Funny Roasts for Friends That Are Hilarious - Roasts.pro',
  description: 'Discover hilarious and friendly roasts perfect for joking around with your friends. These light-hearted burns will have everyone laughing without crossing any lines.',
  keywords: ['funny roasts', 'friend roasts', 'hilarious burns', 'friendly comedy'],
  alternates: {
    canonical: 'https://roasts.pro/funny-roasts-for-friends/',
  },
  openGraph: {
    title: 'Funny Roasts for Friends That Are Hilarious',
    description: 'Discover hilarious and friendly roasts perfect for joking around with your friends.',
    url: 'https://roasts.pro/funny-roasts-for-friends',
    type: 'article',
  },
};

export default function FunnyRoastsForFriendsPage() {
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
            <li className="text-gray-900">Funny Roasts for Friends That Are Hilarious</li>
          </ol>
        </nav>

        {/* Article Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Funny Roasts for Friends That Are Hilarious</h1>
          <p className="text-lg text-gray-600 mb-4">
            Discover hilarious and friendly roasts perfect for joking around with your friends. These light-hearted burns will have everyone laughing without crossing any lines.
          </p>
          <div className="flex items-center text-sm text-gray-500 space-x-4">
            <span>By Comedy Friends</span>
            <span>•</span>
            <span>July 24, 2025</span>
            <span>•</span>
            <span>4 min read</span>
          </div>
        </header>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          <p className="lead">
            Friends are the family we choose, and part of that family dynamic includes the sacred art of roasting each other. 
            These funny roasts are perfect for those moments when you want to playfully tease your friends without actually hurting their feelings.
          </p>

          <h2>The Art of Friendly Roasting</h2>
          <p>
            Roasting friends is all about finding that sweet spot between hilarious and harmless. The best friend roasts are:
          </p>
          <ul>
            <li>Playful rather than mean-spirited</li>
            <li>Based on quirks everyone already knows about</li>
            <li>Delivered with love and a smile</li>
            <li>Something you'd be okay receiving back</li>
          </ul>

          <h2>Hilarious Friend Roasts</h2>
          
          <h3>For the Friend Who's Always Late</h3>
          <div className="space-y-4 mb-8">
            <p className="text-gray-800 leading-relaxed">1. "You're not late, you're just operating on your own time zone... which is apparently 3 hours behind everyone else's."</p>
            <p className="text-gray-800 leading-relaxed">2. "I invited you to my wedding 6 months early because I know you'll still show up during the reception."</p>
            <p className="text-gray-800 leading-relaxed">3. "You're so consistently late, I'm starting to think punctuality is your kryptonite."</p>
            <p className="text-gray-800 leading-relaxed">4. "You're not fashionably late, you're disastrously delayed."</p>
            <p className="text-gray-800 leading-relaxed">5. "If being late was an Olympic sport, you'd show up after the closing ceremony."</p>
          </div>

          <h3>For the Overly Dramatic Friend</h3>
          <div className="space-y-4 mb-8">
            <p className="text-gray-800 leading-relaxed">6. "You don't just tell stories, you perform one-person Broadway shows."</p>
            <p className="text-gray-800 leading-relaxed">7. "If life was a movie, you'd be the director, producer, and star of your own drama."</p>
            <p className="text-gray-800 leading-relaxed">8. "You could stub your toe and somehow make it sound like a Shakespearean tragedy."</p>
            <p className="text-gray-800 leading-relaxed">9. "You don't have problems, you have 'epic sagas of personal struggle.'"</p>
            <p className="text-gray-800 leading-relaxed">10. "Your life has more plot twists than a soap opera."</p>
          </div>

          <h3>For the Friend Who Can't Cook</h3>
          <div className="space-y-4 mb-8">
            <p className="text-gray-800 leading-relaxed">11. "Your cooking is so bad, Gordon Ramsay would just cry instead of yelling."</p>
            <p className="text-gray-800 leading-relaxed">12. "You're the reason takeout apps were invented."</p>
            <p className="text-gray-800 leading-relaxed">13. "I've seen you burn water. I didn't even know that was possible."</p>
            <p className="text-gray-800 leading-relaxed">14. "Your smoke detector doubles as a dinner timer."</p>
            <p className="text-gray-800 leading-relaxed">15. "You could burn a salad if you tried hard enough."</p>
          </div>

          <h3>For the Technology-Challenged Friend</h3>
          <div className="space-y-4 mb-8">
            <p className="text-gray-800 leading-relaxed">16. "You still ask me to help you 'download more internet.'"</p>
            <p className="text-gray-800 leading-relaxed">17. "You're so bad with technology, your phone probably has trust issues."</p>
            <p className="text-gray-800 leading-relaxed">18. "You treat your smartphone like it's a rotary phone from the 1950s."</p>
            <p className="text-gray-800 leading-relaxed">19. "You're the reason tech support drinks heavily."</p>
            <p className="text-gray-800 leading-relaxed">20. "You make my grandparents look like tech geniuses."</p>
          </div>

          <h3>For the Friend Who's Always Cold</h3>
          <div className="space-y-4 mb-8">
            <p className="text-gray-800 leading-relaxed">21. "You wear a sweater in summer and wonder why everyone else is hot."</p>
            <p className="text-gray-800 leading-relaxed">22. "You're like a human popsicle - always frozen and slightly blue."</p>
            <p className="text-gray-800 leading-relaxed">23. "I'm pretty sure you have antifreeze instead of blood."</p>
            <p className="text-gray-800 leading-relaxed">24. "You could get frostbite in the Sahara Desert."</p>
            <p className="text-gray-800 leading-relaxed">25. "Your thermostat setting is 'Arctic Tundra.'"</p>
          </div>

          <h3>For the Overly Organized Friend</h3>
          <div className="space-y-4 mb-8">
            <p className="text-gray-800 leading-relaxed">26. "Your sock drawer is more organized than my entire life."</p>
            <p className="text-gray-800 leading-relaxed">27. "You probably have a color-coded spreadsheet for your color-coded spreadsheets."</p>
            <p className="text-gray-800 leading-relaxed">28. "You're so organized, you make Marie Kondo look messy."</p>
            <p className="text-gray-800 leading-relaxed">29. "You alphabetize your spice rack and your friends."</p>
            <p className="text-gray-800 leading-relaxed">30. "Your idea of chaos is having one pen out of place."</p>
          </div>

          <h3>For the Friend Who's Always Hungry</h3>
          <div className="space-y-4 mb-8">
            <p className="text-gray-800 leading-relaxed">31. "You don't eat meals, you have feeding frenzies."</p>
            <p className="text-gray-800 leading-relaxed">32. "Your stomach has its own GPS that only points to restaurants."</p>
            <p className="text-gray-800 leading-relaxed">33. "You're like a human garbage disposal, but with better taste."</p>
            <p className="text-gray-800 leading-relaxed">34. "You could eat a horse and still ask what's for dessert."</p>
            <p className="text-gray-800 leading-relaxed">35. "Your favorite exercise is running to the fridge."</p>
          </div>

          <h3>For the Social Media Obsessed Friend</h3>
          <div className="space-y-4 mb-8">
            <p className="text-gray-800 leading-relaxed">36. "You don't live life, you curate it for Instagram."</p>
            <p className="text-gray-800 leading-relaxed">37. "If it's not on social media, did it really happen to you?"</p>
            <p className="text-gray-800 leading-relaxed">38. "You take more selfies than a teenage influencer."</p>
            <p className="text-gray-800 leading-relaxed">39. "Your phone battery dies faster than your attention span."</p>
            <p className="text-gray-800 leading-relaxed">40. "You hashtag your conversations in real life."</p>
          </div>

          <h3>Universal Friend Roasts</h3>
          <div className="space-y-4 mb-8">
            <p className="text-gray-800 leading-relaxed">41. "You're like a software update - nobody wants you, but we're stuck with you."</p>
            <p className="text-gray-800 leading-relaxed">42. "If you were a spice, you'd be flour."</p>
            <p className="text-gray-800 leading-relaxed">43. "You're the reason they put instructions on shampoo bottles."</p>
            <p className="text-gray-800 leading-relaxed">44. "You're not stupid, you just have bad luck when thinking."</p>
            <p className="text-gray-800 leading-relaxed">45. "You're like a cloud - when you disappear, it's a beautiful day."</p>
            <p className="text-gray-800 leading-relaxed">46. "You're the human equivalent of a participation trophy."</p>
            <p className="text-gray-800 leading-relaxed">47. "If ignorance is bliss, you must be the happiest person alive."</p>
            <p className="text-gray-800 leading-relaxed">48. "You're like a broken pencil - pointless."</p>
            <p className="text-gray-800 leading-relaxed">49. "You're the reason aliens won't visit Earth."</p>
            <p className="text-gray-800 leading-relaxed">50. "You're like elevator music - annoying and forgettable."</p>
          </div>
        </article>

        {/* Related Articles */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/125-good-roasts-ultimate-burn" className="group">
              <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h4 className="font-semibold text-gray-900 group-hover:text-amber-600 mb-2">
                  125 Good Roasts To Serve the Ultimate Burn
                </h4>
                <p className="text-sm text-gray-600">
                  Master the art of witty comebacks with these expertly crafted roasts.
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
