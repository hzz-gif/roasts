import { Metadata } from 'next';
import Link from 'next/link';
import { articles } from '@/data/articles';

export const metadata: Metadata = {
  title: 'Roasts That Hurt: The Most Devastating Burns Ever - Roasts.pro',
  description: 'Explore the darkest corners of roasting with these emotionally devastating burns that cut deep and leave lasting impressions.',
  keywords: ['devastating roasts', 'hurtful burns', 'savage roasts', 'brutal comebacks'],
  alternates: {
    canonical: 'https://roasts.pro/roasts-that-hurt-devastating-burns/',
  },
  openGraph: {
    title: 'Roasts That Hurt: The Most Devastating Burns Ever',
    description: 'Explore the darkest corners of roasting with these emotionally devastating burns.',
    url: 'https://roasts.pro/roasts-that-hurt-devastating-burns',
    type: 'article',
  },
};

export default function DevastatingRoastsPage() {
  const article = articles.find(a => a.slug === 'roasts-that-hurt-devastating-burns');
  
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

        {/* Warning Box */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">
                Warning: Extreme Content
              </h3>
              <div className="mt-2 text-sm text-red-700">
                <p>
                  These roasts are designed to cause emotional damage. Use only in appropriate contexts 
                  and with people who can handle extreme humor. Not recommended for sensitive individuals.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          <p className="lead text-gray-700 mb-6">
            Sometimes a simple roast isn&apos;t enough. When you need to deliver a burn that cuts deep and leaves a lasting impression, 
            you need roasts that truly hurt. These devastating burns are designed to hit where it hurts most - but remember, 
            with great power comes great responsibility.
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
            <div className="flex">
              <div className="ml-3">
                <p className="text-sm text-yellow-700">
                  <strong>Warning:</strong> These roasts are particularly harsh and should only be used in appropriate contexts 
                  where everyone understands it&apos;s part of the game. Always consider your relationship with the person and the setting.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">The Psychology of Devastating Roasts</h2>
          <p className="text-gray-700 mb-6">
            What separates a playful jab from a devastating burn? It&apos;s all about targeting the deepest
            insecurities and hitting where it hurts most. These roasts don&apos;t just attack surface-level 
            traits - they go for the jugular of self-esteem.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">The Most Devastating Burns</h2>
          
          <h3 className="text-xl font-bold text-gray-900 mb-4">Existential Destroyers</h3>
          <div className="space-y-3 mb-6">
            <p className="text-gray-800">1. You&apos;re so fat that an origami crane has less folds than you.</p>
            <p className="text-gray-800">2. You look like something that came out of a slow cooker.</p>
            <p className="text-gray-800">3. You have so many gaps in your teeth it looks like your tongue is in jail.</p>
            <p className="text-gray-800">4. I bet I could remove 90 percent of your good looks with a moist towelette.</p>
            <p className="text-gray-800">5. If your brain was dynamite, there wouldn&apos;t be enough to blow your hat off.</p>
            <p className="text-gray-800">6. You&apos;re the reason aliens won&apos;t visit Earth.</p>
            <p className="text-gray-800">7. You&apos;re like a broken pencil - completely pointless.</p>
            <p className="text-gray-800">8. If you were any more inbred, you&apos;d be a sandwich.</p>
            <p className="text-gray-800">9. You&apos;re the human equivalent of a participation trophy.</p>
            <p className="text-gray-800">10. You&apos;re like a cloud - when you disappear, it&apos;s a beautiful day.</p>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-4">Family Line Annihilators</h3>
          <div className="space-y-3 mb-6">
            <p className="text-gray-800">11. Don&apos;t be ashamed of who you are. That&apos;s a job for your parents.</p>
            <p className="text-gray-800">12. You&apos;re so ugly, when you were born, the doctor said &quot;Aww what a treasure&quot; and your mom said &quot;Yeah, let&apos;s bury it.&quot;</p>
            <p className="text-gray-800">13. If I had a face like yours, I&apos;d sue my parents.</p>
            <p className="text-gray-800">14. You&apos;re so ugly, when you were born, your mother saw the afterbirth and said &quot;Twins!&quot;</p>
            <p className="text-gray-800">15. Do you think your parents realize that they&apos;re living proof that two wrongs don&apos;t make a right?</p>
            <p className="text-gray-800">16. Your family tree must be a cactus because you&apos;re all a bunch of pricks.</p>
            <p className="text-gray-800">17. I&apos;d say you&apos;re adopted, but no one would choose you.</p>
            <p className="text-gray-800">18. Your gene pool could use a little chlorine.</p>
            <p className="text-gray-800">19. You&apos;re proof that even God makes mistakes.</p>
            <p className="text-gray-800">20. Your parents must be so proud... that you moved out.</p>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-4">Self-Worth Obliterators</h3>
          <div className="space-y-3 mb-6">
            <p className="text-gray-800">21. You&apos;re the reason they invented the block button.</p>
            <p className="text-gray-800">22. I&apos;d call you a tool, but that would imply you&apos;re useful.</p>
            <p className="text-gray-800">23. You&apos;re like a participation trophy - nobody wants you, but here you are.</p>
            <p className="text-gray-800">24. If you were any more disappointing, you&apos;d be a canceled TV show.</p>
            <p className="text-gray-800">25. You&apos;re the human equivalent of a software bug that never gets fixed.</p>
            <p className="text-gray-800">26. I&apos;ve seen more personality in a cardboard cutout.</p>
            <p className="text-gray-800">27. You&apos;re like a Monday morning - nobody&apos;s happy to see you.</p>
            <p className="text-gray-800">28. If mediocrity was a person, it would still be more interesting than you.</p>
            <p className="text-gray-800">29. You&apos;re the reason people believe in natural selection.</p>
            <p className="text-gray-800">30. You&apos;re like a broken clock - wrong most of the time, and annoying all the time.</p>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-4">Intelligence Assassins</h3>
          <div className="space-y-3 mb-6">
            <p className="text-gray-800">31. You&apos;re so dense, light bends around you.</p>
            <p className="text-gray-800">32. If stupidity was a superpower, you&apos;d be invincible.</p>
            <p className="text-gray-800">33. You make a rock look like a genius.</p>
            <p className="text-gray-800">34. Your IQ is so low, it&apos;s practically a golf score.</p>
            <p className="text-gray-800">35. You&apos;re proof that evolution can go in reverse.</p>
            <p className="text-gray-800">36. If brains were gasoline, you wouldn&apos;t have enough to power a flea&apos;s motorcycle.</p>
            <p className="text-gray-800">37. You&apos;re so stupid, you probably think this roast is about cooking.</p>
            <p className="text-gray-800">38. Your thought process is like a broken GPS - always lost and going nowhere.</p>
            <p className="text-gray-800">39. You&apos;re the reason warning labels exist on everything.</p>
            <p className="text-gray-800">40. If ignorance is bliss, you must be in a permanent state of euphoria.</p>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-4">Physical Devastators</h3>
          <div className="space-y-3 mb-6">
            <p className="text-gray-800">41. You&apos;re so ugly, when you look in the mirror, your reflection ducks.</p>
            <p className="text-gray-800">42. If looks could kill, you&apos;d be a weapon of mass destruction... for yourself.</p>
            <p className="text-gray-800">43. You&apos;re so hideous, even your selfies come out blurry.</p>
            <p className="text-gray-800">44. Your face is so forgettable, even your own mother needs name tags.</p>
            <p className="text-gray-800">45. You&apos;re like a before photo that never gets an after.</p>
            <p className="text-gray-800">46. If ugly was a crime, you&apos;d get life without parole.</p>
            <p className="text-gray-800">47. You&apos;re so unattractive, blind dates refuse to meet you.</p>
            <p className="text-gray-800">48. Your appearance is like a car accident - horrifying, but people can&apos;t look away.</p>
            <p className="text-gray-800">49. You&apos;re proof that makeup has its limitations.</p>
            <p className="text-gray-800">50. If beauty is in the eye of the beholder, then you need to find some very nearsighted people.</p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-8">
            <div className="flex">
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800">
                  Important Reminder
                </h3>
                <div className="mt-2 text-sm text-red-700">
                  <p>
                    These roasts are intentionally harsh and should only be used in appropriate contexts.
                    Always consider the impact of your words and the relationship you have with the person.
                    Comedy should bring people together, not tear them apart.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">The Ethics of Devastating Roasts</h2>
          <p className="text-gray-700 mb-6">
            While these roasts are designed to be devastating, it&apos;s crucial to understand when and how to use them responsibly.
            The most effective roasters know that timing, context, and relationship dynamics are everything.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-4">When NOT to Use These Roasts</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>Against someone who is already vulnerable or going through a difficult time</li>
            <li>In professional or formal settings</li>
            <li>When the person has asked you to stop</li>
            <li>Against someone who clearly can&apos;t handle this level of humor</li>
            <li>When you&apos;re genuinely angry - roasts should come from a place of fun, not malice</li>
          </ul>

          <h3 className="text-xl font-bold text-gray-900 mb-4">The Golden Rules of Devastating Roasts</h3>
          <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-2">
            <li><strong>Know your audience:</strong> Make sure the person can handle this level of roasting</li>
            <li><strong>Be prepared for retaliation:</strong> If you dish it out, be ready to take it</li>
            <li><strong>Keep it playful:</strong> The goal is laughter, not genuine hurt</li>
            <li><strong>Know when to stop:</strong> Read the room and the person&apos;s reactions</li>
            <li><strong>Apologize if needed:</strong> If you go too far, be ready to make amends</li>
          </ol>

          <p className="text-gray-700">
            Remember, the best roasters are also the best at taking roasts. The art of devastating comedy lies not just
            in the delivery, but in knowing when to use these weapons of wit and when to keep them holstered.
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
                <p className="text-gray-600">
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
