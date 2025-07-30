import { Metadata } from 'next';
import Link from 'next/link';
import { articles } from '@/data/articles';

export const metadata: Metadata = {
  title: 'Savage Roasts: The Art of Ruthless Comedy - Roasts.pro',
  description: 'Master the art of savage roasting with these expertly crafted burns that show no mercy. Learn the techniques behind the most ruthless and effective roasts in comedy history.',
  keywords: ['savage roasts', 'ruthless comedy', 'roast techniques', 'comedy mastery'],
  alternates: {
    canonical: 'https://roasts.pro/savage-roasts-art-ruthless-comedy/',
  },
  openGraph: {
    title: 'Savage Roasts: The Art of Ruthless Comedy',
    description: 'Master the art of savage roasting with these expertly crafted burns that show no mercy.',
    url: 'https://roasts.pro/savage-roasts-art-ruthless-comedy',
    type: 'article',
  },
};

export default function SavageRoastsPage() {
  const article = articles.find(a => a.slug === 'savage-roasts-art-ruthless-comedy');
  
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
          <div className="whitespace-pre-line text-gray-700">
            {article.content}
          </div>
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
            <Link href="/roasts-that-hurt-devastating-burns" className="group">
              <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h4 className="font-semibold text-gray-900 group-hover:text-amber-600 mb-2">
                  Roasts That Hurt: The Most Devastating Burns Ever
                </h4>
                <p className="text-sm text-gray-600">
                  Explore the darkest corners of roasting with these emotionally devastating burns.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
