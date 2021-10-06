export const trendingOptions = (pageNumber) => ({
  method: "GET",
  url: "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/TrendingNewsAPI",
  params: {
    pageNumber,
    pageSize: "20",
    withThumbnails: "false",
    location: "us",
  },
  headers: {
    "x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
    "x-rapidapi-key": process.env.API_KEY,
  },
});

export const specificOptions = (query, postsCount, pageNumber) => ({
  method: "GET",
  url: "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI",
  params: {
    q: query,
    pageNumber,
    pageSize: postsCount,
    autoCorrect: "true",
    fromPublishedDate: "null",
    toPublishedDate: "null",
  },
  headers: {
    "x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
    "x-rapidapi-key": process.env.API_KEY,
  },
});
