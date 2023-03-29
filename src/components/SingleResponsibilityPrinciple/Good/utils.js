import axios from "axios";

export async function getNews() {
  const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return data;
}