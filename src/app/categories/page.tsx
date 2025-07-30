import Link from 'next/link';
import { Metadata } from 'next';
import { categories, articles } from '@/data/articles';

export const metadata: Metadata = {
  title: 'Roast Categories - Roasts.pro Comedy & Entertainment Hub',
  description: 'Explore different categories of roasts and comedy content including celebrity roasts, social media burns, and trending entertainment',
  keywords: ['roast categories', 'celebrity roasts', 'comedy roasts', 'social media', 'trending'],
  alternates: {
    canonical: 'https://roasts.pro/categories',
  },
};

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Roast Categories</h1>
          <p className="text-xl text-gray-600">Explore different categories of roasts and comedy content</p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {categories.map((category) => {
            const categoryArticles = articles.filter(article => article.category.id === category.id);
            
            return (
              <div key={category.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-8">
                  <div className={`w-16 h-16 rounded-lg ${category.color} flex items-center justify-center mb-6`}>
                    <span className="text-2xl">🔥</span>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    <Link href={`/categories/${category.slug}`} className="hover:text-amber-600 transition-colors">
                      {category.name}
                    </Link>
                  </h2>
                  
                  <p className="text-gray-600 mb-6">{category.description}</p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-sm text-gray-500">{categoryArticles.length} 篇文章</span>
                    <Link
                      href={`/categories/${category.slug}`}
                      className="text-amber-600 font-medium hover:text-amber-700 transition-colors"
                    >
                      查看全部 →
                    </Link>
                  </div>
                  
                  {/* Latest articles in this category */}
                  <div className="space-y-3">
                    {categoryArticles.slice(0, 3).map((article) => (
                      <div key={article.id} className="border-l-4 border-amber-200 pl-4">
                        <h3 className="font-medium text-gray-900 line-clamp-1">
                          <Link href={`/${article.slug}`} className="hover:text-amber-600 transition-colors">
                            {article.title}
                          </Link>
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">{article.publishedAt}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">网站统计</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600 mb-2">{articles.length}</div>
              <div className="text-gray-600">总文章数</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600 mb-2">{categories.length}</div>
              <div className="text-gray-600">分类数量</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600 mb-2">
                {Math.round(articles.reduce((sum, article) => sum + article.readingTime, 0) / articles.length)}
              </div>
              <div className="text-gray-600">平均阅读时间(分钟)</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600 mb-2">
                {new Set(articles.map(article => article.author)).size}
              </div>
              <div className="text-gray-600">作者数量</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
