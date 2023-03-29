import { useNews } from "./hooks";
import NewsCard from "./components/NewsCard";

export default function Good() {
  const news = useNews();

  return (
    <div>
      <h2 style={{ color: "green" }}>Good</h2>
      <h3>News</h3>
      {news.slice(0, 5).map((news) => (
        <NewsCard
          key={news.id} 
          news={news.title} 
          body={news.body}
        />
      ))}
    </div>
  );
}
