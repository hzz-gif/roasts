import Link from 'next/link';
import { Category } from '@/types';
import { Card, CardContent } from '@/components/ui/Card';

interface CategoryCardProps {
  category: Category;
  articleCount?: number;
}

export default function CategoryCard({ category, articleCount }: CategoryCardProps) {
  return (
    <Link href={`/categories/${category.slug}`}>
      <Card hover className="h-full group">
        <CardContent>
          <div className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
            <span className="text-xl">🔥</span>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.name}</h3>
          <p className="text-gray-600 text-sm mb-3">{category.description}</p>
          
          {articleCount !== undefined && (
            <span className="text-xs text-gray-500">{articleCount} 篇文章</span>
          )}
        </CardContent>
      </Card>
    </Link>
  );
}
