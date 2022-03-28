type SourceModel = {
  id: string;
  name: string;
};

type ArticleModel = {
  source: SourceModel | null;
  author: string | null;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};

type ArticlesModel = { articles: ArticleModel[]; hasMore: boolean };

enum CATEGORY {
  BUSINESS = "business",
  ENTERTAINMENT = "entertainment",
  GENERAL = "general",
  HEALTH = "health",
  SCIENCE = "science",
  SPORTS = "sports",
  TECHNOLOGY = "technology",
}

const PAGE_SIZE = 10;

export type { SourceModel, ArticleModel, ArticlesModel };
export { CATEGORY, PAGE_SIZE };
