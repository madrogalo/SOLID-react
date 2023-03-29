import { useEffect, useState } from "react";
import { getNews } from "./utils";

export function useNews() {
  const [newsState, setNewsState] = useState([]);

  useEffect(() => {
    getNews().then((data) => setNewsState(data));
  }, []);

  return newsState;
};
