import classnames from "classnames";
import moment from "moment";

import { ArticleModel } from "../../api";

import "./ArticlesItem.scss";

type Props = {
  article: ArticleModel;
  isFirst?: boolean;
  isReversed?: boolean;
};

const ArticlesItem = ({
  article,
  isFirst = false,
  isReversed = false,
}: Props) => (
  <a
    href={article.url}
    className={classnames("article-item", {
      "article-item--first": isFirst,
      "article-item--reversed": !isFirst && isReversed,
    })}
  >
    <img
      className={classnames("article-item__image", {
        "article-item__image--first": isFirst,
      })}
      src={article.urlToImage}
      alt={article.title}
    />
    <div
      className={classnames("article-item__details", {
        "article-item__details--first": isFirst,
      })}
    >
      <h2 className="article-item__source">
        {article.source?.name || "No author"}
      </h2>
      <h1
        className={classnames("article-item__title", {
          "article-item__title--first": isFirst,
        })}
      >
        {article.title}
      </h1>
      {isFirst && (
        <p className="article-item__description">{article.description}</p>
      )}
      {article.author && !isFirst && (
        <span className="article-item__author">{article.author}</span>
      )}
      <time className="article-item__time">
        {isFirst
          ? moment(article.publishedAt).fromNow()
          : moment(article.publishedAt).format("LL")}
        {}
      </time>
    </div>
  </a>
);

export default ArticlesItem;
