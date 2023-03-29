import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Bad() {
  const [newsState, setNewsState] = useState([]);
  useEffect(() => {
    async function getNews() {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setNewsState(data);
    }
    getNews();
  }, []);

  return (
    <div>
      <h2 style={{ color: 'red' }}>Bad</h2>
      <h3>News</h3>
      {newsState.slice(0, 5).map((news) => (
        <div key={news.id} style={{ border: "1px solid grey", margin: 10 }}>
          <h4>{news.title}</h4>
          <p>{news.body}</p>
        </div>
      ))}
    </div>
  );
}
