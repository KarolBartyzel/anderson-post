import axios from "axios";

import { ArticlesModel, PAGE_SIZE, CATEGORY } from "./newsApi.model";

const BASE_URL = `https://newsapi.org/v2/top-headlines?apiKey=${process.env.REACT_APP_NEWS_API_KEY}&country=gb&pageSize=${PAGE_SIZE}`;

const getArticles = (
  page: number,
  category?: CATEGORY
): Promise<ArticlesModel> =>
  axios
    .get(`${BASE_URL}${category ? `&category=${category}` : ""}&page=${page}`)
    .then(({ data: { articles, totalResults } }) => ({
      articles,
      hasMore: page * PAGE_SIZE < totalResults,
    }));

export { getArticles };
