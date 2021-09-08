export const trendingOptions = {
  method: "GET",
  url: "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/TrendingNewsAPI",
  params: {
    pageNumber: "1",
    pageSize: "10",
    withThumbnails: "false",
    location: "us",
  },
  headers: {
    "x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
    "x-rapidapi-key": "4bb33fe4a3msh9a44028b9da3739p19c6b6jsnaaf9f21dbad5",
  },
};

export const specificOptions = (query, postsCount) => ({
  method: "GET",
  url: "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI",
  params: {
    q: query,
    pageNumber: "1",
    pageSize: postsCount,
    autoCorrect: "true",
    fromPublishedDate: "null",
    toPublishedDate: "null",
  },
  headers: {
    "x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
    "x-rapidapi-key": "4bb33fe4a3msh9a44028b9da3739p19c6b6jsnaaf9f21dbad5",
  },
});
