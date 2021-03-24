import { useEffect, useState } from 'react';
import { getNews } from './api/space-flight-news-api';

function SpaceFlightNews() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    getNews().then((res) => {
      setNews(res);
    });
  }, []);

  return (
    <ul className="SpaceNews-Container">
      {news.map((spaceNews) => (
        <li className="SpaceNews-List" key={spaceNews.id}>
          <div className="header">
            <p className="title">{spaceNews.title}</p>
            <span className="published">
              Published at: {spaceNews.publishedAt}
            </span>
          </div>
          <p className="summary">{spaceNews.summary}</p>
        </li>
      ))}
    </ul>
  );
}

export default SpaceFlightNews;
