export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  updatedAt: string;
  category: Category;
  tags: string[];
  featuredImage?: string;
  readingTime: number;
  isPublished: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  color: string;
}

export interface Tag {
  id: string;
  name: string;
  slug: string;
  count: number;
}

export interface Author {
  id: string;
  name: string;
  bio: string;
  avatar?: string;
  social?: {
    twitter?: string;
    linkedin?: string;
    website?: string;
  };
}
