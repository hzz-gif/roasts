import Link from 'next/link';
import { Article } from '@/types';
import { Card, CardContent } from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

interface ArticleCardProps {
  article: Article;
  showImage?: boolean;
}

export default function ArticleCard({ article, showImage = true }: ArticleCardProps) {
  return (
    <Card hover className="h-full">
      {showImage && (
        <div className="h-48 bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500">图片占位</span>
        </div>
      )}
      <CardContent>
        <div className="flex items-center mb-3">
          <Badge className={article.category.color}>
            {article.category.name}
          </Badge>
          <span className="text-gray-500 text-sm ml-3">{article.readingTime} 分钟阅读</span>
        </div>
        
        <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
          <Link href={`/articles/${article.slug}`} className="hover:text-amber-600 transition-colors">
            {article.title}
          </Link>
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
        
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-gray-500">by {article.author}</span>
          <span className="text-sm text-gray-500">{article.publishedAt}</span>
        </div>
        
        <Link
          href={`/articles/${article.slug}`}
          className="text-amber-600 font-medium hover:text-amber-700 transition-colors text-sm"
        >
          阅读更多 →
        </Link>
      </CardContent>
    </Card>
  );
}
