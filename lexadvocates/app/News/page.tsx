"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
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

const page = () => {
  const [items, setItems] = useState<FeedItem[]>([]);
  const [items2, setItems2] = useState<FeedItem[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const rssUrl = encodeURIComponent(
      "https://news.google.com/rss/search?q=legal+updates+India&hl=en-IN&gl=IN&ceid=IN:en"
    );
    const rssUrl2 = encodeURIComponent(
      "https://news.google.com/rss/search?q=legal+updates+India&hl=en-IN&gl=IN&ceid=IN:en"
    );

    const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${rssUrl}`;
    const apiUrl2 = `https://api.rss2json.com/v1/api.json?rss_url=${rssUrl2}`;

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

    fetch(apiUrl2)
      .then((res) => res.json())
      .then((data: FeedResponse) => {
        if (data.status === "ok") {
          setItems2(data.items);

          console.log(data);
          setError(null);
        } else {
          setError(data.message || "Failed to load news");
        }
      })
      .catch(() => setError("Failed to fetch news"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div id="NEWS">Loading news...</div>;
  if (error) return <div id="NEWS">Error: {error}</div>;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        scale: { visualDuration: 0.4, bounce: 0.5 },
      }}
      id="NEWS"
      className="news-feed w-full   p-4 flex flex-col justify-center items-center"
    >
      <h2 className="text-5xl  font-bold mb-4  text-amber-500">News</h2>

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
      <h2 className="text-5xl  font-bold mb-4 mt-16  text-amber-500">
        Top News
      </h2>
      <ul className="w-full  h-auto flex flex-wrap items-center justify-center">
        {items2.map((item) => (
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
    </motion.div>
  );
};

export default page;
