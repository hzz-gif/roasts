import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { categories, articles } from '@/data/articles';

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = categories.find(c => c.slug === slug);

  if (!category) {
    return {
      title: '分类未找到 - Roasts',
      description: '抱歉，您访问的分类不存在'
    };
  }

  const categoryArticles = articles.filter(article => article.category.id === category.id);

  return {
    title: `${category.name} - Roasts 烘焙知识分享`,
    description: `${category.description}，共有${categoryArticles.length}篇相关文章`,
    keywords: [category.name, '烘焙', '烘焙技术', '烘焙知识'],
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = categories.find(c => c.slug === slug);

  if (!category) {
    notFound();
  }

  const categoryArticles = articles.filter(article => article.category.id === category.id);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li>
              <Link href="/" className="hover:text-gray-700">首页</Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/categories" className="hover:text-gray-700">分类</Link>
            </li>
            <li>/</li>
            <li className="text-gray-900">{category.name}</li>
          </ol>
        </nav>

        {/* Category Header */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-center mb-6">
            <div className={`w-16 h-16 rounded-lg ${category.color} flex items-center justify-center mr-6`}>
              <span className="text-2xl">🔥</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{category.name}</h1>
              <p className="text-gray-600">{category.description}</p>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-gray-500">{categoryArticles.length} 篇文章</span>
            <Link
              href="/categories"
              className="text-amber-600 font-medium hover:text-amber-700 transition-colors"
            >
              ← 返回所有分类
            </Link>
          </div>
        </div>

        {/* Articles Grid */}
        {categoryArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryArticles.map((article) => (
              <article key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">图片占位</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${article.category.color}`}>
                      {article.category.name}
                    </span>
                    <span className="text-gray-500 text-sm ml-3">{article.readingTime} 分钟阅读</span>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    <Link href={`/articles/${article.slug}`} className="hover:text-amber-600 transition-colors">
                      {article.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">by {article.author}</span>
                    <span className="text-sm text-gray-500">{article.publishedAt}</span>
                  </div>
                  <div className="mt-4">
                    <Link
                      href={`/articles/${article.slug}`}
                      className="text-amber-600 font-medium hover:text-amber-700 transition-colors text-sm"
                    >
                      阅读更多 →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <div className="text-gray-400 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">暂无文章</h3>
            <p className="text-gray-600 mb-6">该分类下还没有发布文章，敬请期待。</p>
            <Link
              href="/articles"
              className="inline-flex items-center px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
            >
              浏览其他文章
            </Link>
          </div>
        )}

        {/* Other Categories */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">其他分类</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories
              .filter(c => c.id !== category.id)
              .map((otherCategory) => {
                const otherCategoryArticles = articles.filter(article => article.category.id === otherCategory.id);
                return (
                  <Link
                    key={otherCategory.id}
                    href={`/categories/${otherCategory.slug}`}
                    className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow group"
                  >
                    <div className={`w-12 h-12 rounded-lg ${otherCategory.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <span className="text-xl">🔥</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{otherCategory.name}</h3>
                    <p className="text-gray-600 text-sm mb-3">{otherCategory.description}</p>
                    <span className="text-xs text-gray-500">{otherCategoryArticles.length} 篇文章</span>
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
