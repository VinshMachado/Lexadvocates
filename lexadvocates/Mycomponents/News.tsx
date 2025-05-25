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
    <div className="news-feed w-full max-w-3xl mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Latest Legal Updates in India</h2>
      <ul>
        {items.map((item) => (
          <li key={item.guid} className="mb-4">
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {item.title}
            </a>
            <p className="text-sm text-gray-600">
              {new Date(item.pubDate).toLocaleString()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default News;
