"use client";
import React, { useEffect, useState } from "react";

interface FeedItem {
  guid: string;
  title: string;
  link: string;
  pubDate: string;
  // add more fields if needed
}

interface FeedResponse {
  status: string;
  items: FeedItem[];
  message?: string;
}

const News: React.FC = () => {
  const [items, setItems] = useState<FeedItem[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const rssUrl = encodeURIComponent(
      "https://news.google.com/rss/search?q=legal+updates+India&hl=en-IN&gl=IN&ceid=IN:en"
    );
    const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${rssUrl}`;

    fetch(apiUrl)
      .then((res) => res.json())
      .then((data: FeedResponse) => {
        if (data.status === "ok") {
          setItems(data.items);
          console.log(data);
          setError(null);
        } else {
          setError(data.message || "Failed to load news");
        }
      })
      .catch(() => setError("Failed to fetch news"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading news...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="news-feed w-full   p-4 flex flex-col justify-center items-center">
      <h2 className="sm:text-3xl text-xl font-bold mb-4 ">
        Latest Legal Updates in India
      </h2>
      <ul className="w-full  h-auto flex flex-wrap items-center justify-center">
        {items.map((item) => (
          <li key={item.guid} className="mb-4 m-5">
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              <div className="sm:w-72 w-[97%] h-64 bg-white rounded-2xl shadow-xl p-4 flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-lg font-semibold text-gray-800 line-clamp-3">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 mt-2">
                  {new Date(item.pubDate).toLocaleString()}
                </p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  Read more →
                </a>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default News;
