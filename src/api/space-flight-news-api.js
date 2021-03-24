import { objToUrlParams } from '../utils/obj-url-params';

const SPACE_FLIGHT_NEWS_BASE_API = `https://test.spaceflightnewsapi.net/api/v2/articles`;

export const getNews = async (options = { _limit: 40 }) => {
  const params = objToUrlParams(options);
  const response = await fetch(SPACE_FLIGHT_NEWS_BASE_API + `?${params}`);
  const news = await response.json();

  //   Sorting
  news.sort(sortNewsByProvider);

  return news;
};

function sortNewsByProvider(a, b) {
  const { launches: launchesA } = a;
  const { launches: launchesB } = b;

  const [{ provider: providerA = '' } = {}] = launchesA;
  const [{ provider: providerB = '' } = {}] = launchesB || [{}];

  if (providerA < providerB) {
    return 1;
  }

  if (providerA > providerB) {
    return -1;
  }

  return 0;
}
