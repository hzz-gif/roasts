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
            <li>Something you&apos;d be okay receiving back</li>
          </ul>

          <h2>Hilarious Friend Roasts</h2>
          
          <h3>For the Friend Who&apos;s Always Late</h3>
          <div className="space-y-4 mb-8">
            <p className="text-gray-800 leading-relaxed">1. &quot;You&apos;re not late, you&apos;re just operating on your own time zone... which is apparently 3 hours behind everyone else&apos;s.&quot;</p>
            <p className="text-gray-800 leading-relaxed">2. &quot;I invited you to my wedding 6 months early because I know you&apos;ll still show up during the reception.&quot;</p>
            <p className="text-gray-800 leading-relaxed">3. &quot;You&apos;re so consistently late, I&apos;m starting to think punctuality is your kryptonite.&quot;</p>
            <p className="text-gray-800 leading-relaxed">4. &quot;You&apos;re not fashionably late, you&apos;re disastrously delayed.&quot;</p>
            <p className="text-gray-800 leading-relaxed">5. &quot;If being late was an Olympic sport, you&apos;d show up after the closing ceremony.&quot;</p>
          </div>

          <h3>For the Overly Dramatic Friend</h3>
          <div className="space-y-4 mb-8">
            <p className="text-gray-800 leading-relaxed">6. &quot;You don&apos;t just tell stories, you perform one-person Broadway shows.&quot;</p>
            <p className="text-gray-800 leading-relaxed">7. &quot;If life was a movie, you&apos;d be the director, producer, and star of your own drama.&quot;</p>
            <p className="text-gray-800 leading-relaxed">8. &quot;You could stub your toe and somehow make it sound like a Shakespearean tragedy.&quot;</p>
            <p className="text-gray-800 leading-relaxed">9. &quot;You don&apos;t have problems, you have &apos;epic sagas of personal struggle.&apos;&quot;</p>
            <p className="text-gray-800 leading-relaxed">10. &quot;Your life has more plot twists than a soap opera.&quot;</p>
          </div>

          <h3>For the Friend Who Can&apos;t Cook</h3>
          <div className="space-y-4 mb-8">
            <p className="text-gray-800 leading-relaxed">11. &quot;Your cooking is so bad, Gordon Ramsay would just cry instead of yelling.&quot;</p>
            <p className="text-gray-800 leading-relaxed">12. &quot;You&apos;re the reason takeout apps were invented.&quot;</p>
            <p className="text-gray-800 leading-relaxed">13. &quot;I&apos;ve seen you burn water. I didn&apos;t even know that was possible.&quot;</p>
            <p className="text-gray-800 leading-relaxed">14. &quot;Your smoke detector doubles as a dinner timer.&quot;</p>
            <p className="text-gray-800 leading-relaxed">15. &quot;You could burn a salad if you tried hard enough.&quot;</p>
          </div>

          <h3>For the Technology-Challenged Friend</h3>
          <div className="space-y-4 mb-8">
            <p className="text-gray-800 leading-relaxed">16. &quot;You still ask me to help you &apos;download more internet.&apos;&quot;</p>
            <p className="text-gray-800 leading-relaxed">17. &quot;You&apos;re so bad with technology, your phone probably has trust issues.&quot;</p>
            <p className="text-gray-800 leading-relaxed">18. &quot;You treat your smartphone like it&apos;s a rotary phone from the 1950s.&quot;</p>
            <p className="text-gray-800 leading-relaxed">19. &quot;You&apos;re the reason tech support drinks heavily.&quot;</p>
            <p className="text-gray-800 leading-relaxed">20. &quot;You make my grandparents look like tech geniuses.&quot;</p>
          </div>

          <h3>For the Friend Who&apos;s Always Cold</h3>
          <div className="space-y-4 mb-8">
            <p className="text-gray-800 leading-relaxed">21. &quot;You wear a sweater in summer and wonder why everyone else is hot.&quot;</p>
            <p className="text-gray-800 leading-relaxed">22. &quot;You&apos;re like a human popsicle - always frozen and slightly blue.&quot;</p>
            <p className="text-gray-800 leading-relaxed">23. &quot;I&apos;m pretty sure you have antifreeze instead of blood.&quot;</p>
            <p className="text-gray-800 leading-relaxed">24. &quot;You could get frostbite in the Sahara Desert.&quot;</p>
            <p className="text-gray-800 leading-relaxed">25. &quot;Your thermostat setting is &apos;Arctic Tundra.&apos;&quot;</p>
          </div>

          <h3>For the Overly Organized Friend</h3>
          <div className="space-y-4 mb-8">
            <p className="text-gray-800 leading-relaxed">26. &quot;Your sock drawer is more organized than my entire life.&quot;</p>
            <p className="text-gray-800 leading-relaxed">27. &quot;You probably have a color-coded spreadsheet for your color-coded spreadsheets.&quot;</p>
            <p className="text-gray-800 leading-relaxed">28. &quot;You&apos;re so organized, you make Marie Kondo look messy.&quot;</p>
            <p className="text-gray-800 leading-relaxed">29. &quot;You alphabetize your spice rack and your friends.&quot;</p>
            <p className="text-gray-800 leading-relaxed">30. &quot;Your idea of chaos is having one pen out of place.&quot;</p>
          </div>

          <h3>For the Friend Who&apos;s Always Hungry</h3>
          <div className="space-y-4 mb-8">
            <p className="text-gray-800 leading-relaxed">31. &quot;You don&apos;t eat meals, you have feeding frenzies.&quot;</p>
            <p className="text-gray-800 leading-relaxed">32. &quot;Your stomach has its own GPS that only points to restaurants.&quot;</p>
            <p className="text-gray-800 leading-relaxed">33. &quot;You&apos;re like a human garbage disposal, but with better taste.&quot;</p>
            <p className="text-gray-800 leading-relaxed">34. &quot;You could eat a horse and still ask what&apos;s for dessert.&quot;</p>
            <p className="text-gray-800 leading-relaxed">35. &quot;Your favorite exercise is running to the fridge.&quot;</p>
          </div>

          <h3>For the Social Media Obsessed Friend</h3>
          <div className="space-y-4 mb-8">
            <p className="text-gray-800 leading-relaxed">36. &quot;You don&apos;t live life, you curate it for Instagram.&quot;</p>
            <p className="text-gray-800 leading-relaxed">37. &quot;If it&apos;s not on social media, did it really happen to you?&quot;</p>
            <p className="text-gray-800 leading-relaxed">38. &quot;You take more selfies than a teenage influencer.&quot;</p>
            <p className="text-gray-800 leading-relaxed">39. &quot;Your phone battery dies faster than your attention span.&quot;</p>
            <p className="text-gray-800 leading-relaxed">40. &quot;You hashtag your conversations in real life.&quot;</p>
          </div>

          <h3>Universal Friend Roasts</h3>
          <div className="space-y-4 mb-8">
            <p className="text-gray-800 leading-relaxed">41. &quot;You&apos;re like a software update - nobody wants you, but we&apos;re stuck with you.&quot;</p>
            <p className="text-gray-800 leading-relaxed">42. &quot;If you were a spice, you&apos;d be flour.&quot;</p>
            <p className="text-gray-800 leading-relaxed">43. &quot;You&apos;re the reason they put instructions on shampoo bottles.&quot;</p>
            <p className="text-gray-800 leading-relaxed">44. &quot;You&apos;re not stupid, you just have bad luck when thinking.&quot;</p>
            <p className="text-gray-800 leading-relaxed">45. &quot;You&apos;re like a cloud - when you disappear, it&apos;s a beautiful day.&quot;</p>
            <p className="text-gray-800 leading-relaxed">46. &quot;You&apos;re the human equivalent of a participation trophy.&quot;</p>
            <p className="text-gray-800 leading-relaxed">47. &quot;If ignorance is bliss, you must be the happiest person alive.&quot;</p>
            <p className="text-gray-800 leading-relaxed">48. &quot;You&apos;re like a broken pencil - pointless.&quot;</p>
            <p className="text-gray-800 leading-relaxed">49. &quot;You&apos;re the reason aliens won&apos;t visit Earth.&quot;</p>
            <p className="text-gray-800 leading-relaxed">50. &quot;You&apos;re like elevator music - annoying and forgettable.&quot;</p>
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
