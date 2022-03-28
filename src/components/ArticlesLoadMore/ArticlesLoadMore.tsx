import classnames from "classnames";

import "./ArticlesLoadMore.scss";

type Props = {
  hasMore: boolean;
  loadMore: () => void;
};

const ArticlesLoadMore = ({ hasMore, loadMore }: Props) => (
  <button
    title={!hasMore ? "No more articles to load" : undefined}
    className={classnames("load-more", { "load-more--disabled": !hasMore })}
    onClick={loadMore}
  >
    Load more
  </button>
);

export default ArticlesLoadMore;
