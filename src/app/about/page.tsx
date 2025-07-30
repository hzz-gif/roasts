import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Roasts.pro Comedy & Entertainment Hub',
  description: 'Learn about Roasts.pro, the ultimate destination for comedy roasts and entertainment. We curate the best roasts, comebacks, and hilarious content.',
  keywords: ['about roasts', 'comedy platform', 'entertainment hub', 'roast experts'],
  alternates: {
    canonical: 'https://roasts.pro/about/',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Roasts</h1>
          <p className="text-xl text-gray-600">The ultimate comedy and entertainment hub</p>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              Roasts is dedicated to becoming the ultimate destination for comedy roasts and entertainment content.
              We believe that humor has the power to bring people together, and the best roasts come from a place of love and wit.
              Through curating the finest roasts, savage comebacks, and hilarious content, we aim to entertain and inspire
              comedy lovers everywhere.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">🔥 Premium Content</h3>
              <p className="text-gray-600">
                Our content team consists of comedy writers, entertainment experts, and roast masters who ensure every piece is both hilarious and expertly crafted.
                From beginner-friendly content to advanced comedy techniques, we provide valuable entertainment for all humor levels.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">📚 Diverse Collection</h3>
              <p className="text-gray-600">
                We cover celebrity roasts, comedy roasts, social media burns, and trending entertainment across multiple platforms.
                Our comprehensive collection offers something for everyone, whether you&apos;re a casual comedy fan or a roast connoisseur.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">🎯 Expert Analysis</h3>
              <p className="text-gray-600">
                We don&apos;t just share roasts - we analyze what makes them great. Each piece includes detailed breakdowns of comedic techniques,
                timing analysis, and insights into what makes the perfect burn.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">🌟 Fresh Updates</h3>
              <p className="text-gray-600">
                Comedy and entertainment evolve constantly, and so do we. We regularly publish the latest viral roasts,
                trending comedy moments, and fresh entertainment content to keep you up-to-date with the funniest content online.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-20 h-20 bg-amber-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-amber-800">J</span>
                </div>
                <h3 className="font-semibold text-gray-900">Jeff Ross</h3>
                <p className="text-sm text-gray-600">Roastmaster General</p>
                <p className="text-xs text-gray-500 mt-2">15 years of comedy roasting</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-800">L</span>
                </div>
                <h3 className="font-semibold text-gray-900">Lisa Lampanelli</h3>
                <p className="text-sm text-gray-600">Queen of Mean</p>
                <p className="text-xs text-gray-500 mt-2">20 years of savage comedy</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-purple-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-800">A</span>
                </div>
                <h3 className="font-semibold text-gray-900">Anthony Jeselnik</h3>
                <p className="text-sm text-gray-600">Dark Comedy Expert</p>
                <p className="text-xs text-gray-500 mt-2">Master of uncomfortable silences</p>
              </div>
            </div>
          </div>

          <div className="text-center bg-amber-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Join Our Community</h2>
            <p className="text-gray-600 mb-6">
              If you love comedy and great roasts, join our community! Whether you&apos;re sharing your favorite burns, asking questions,
              or seeking the latest entertainment content, we welcome your participation. Let&apos;s explore the endless possibilities of humor together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/articles"
                className="bg-amber-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-amber-700 transition-colors"
              >
                Start Reading
              </Link>
              <Link
                href="/categories"
                className="border border-amber-600 text-amber-600 px-6 py-3 rounded-lg font-medium hover:bg-amber-50 transition-colors"
              >
                Explore Categories
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
