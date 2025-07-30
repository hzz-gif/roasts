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
