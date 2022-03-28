import { useEffect, useState } from "react";

import { getArticles, ArticleModel, PAGE_SIZE, CATEGORY } from "../../api";
import ArticlesItem from "../ArticlesItem";
import ArticlesLoadMore from "../ArticlesLoadMore";

import "./Articles.scss";

type Props = {
  category?: CATEGORY;
};

const Articles = ({ category }: Props) => {
  const [articles, setArticles] = useState<ArticleModel[] | null>(null);
  const [hasMore, setHasMore] = useState(true);

  const loadArticles = async (
    articles: ArticleModel[] | null,
    hasMore: boolean
  ) => {
    if (hasMore) {
      const { hasMore: newHasMore, articles: newArticles } = await getArticles(
        (articles?.length ?? 0) / PAGE_SIZE + 1,
        category
      );
      setHasMore(newHasMore);
      setArticles((prevArticles) => [...(prevArticles ?? []), ...newArticles]);
    }
  };

  useEffect(() => {
    setHasMore(true);
    setArticles(null);
    loadArticles(null, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  if (!articles) {
    return null;
  }

  if (articles.length === 0) {
    return <div className="articles">No articles in this category</div>;
  }

  const [firstArticle, ...otherArticles] = articles;

  return (
    <div className="articles">
      <h1 className="articles__category">
        {category ? `Latest ${category} news` : "Breaking news"}
      </h1>
      <ArticlesItem article={firstArticle} isFirst />
      {otherArticles.map((article, index) => (
        <ArticlesItem
          key={`${article.author} - ${article.title}`}
          article={article}
          isReversed={index % 2 === 0}
        />
      ))}
      <ArticlesLoadMore
        hasMore={hasMore}
        loadMore={() => loadArticles(articles, hasMore)}
      />
    </div>
  );
};

export default Articles;
