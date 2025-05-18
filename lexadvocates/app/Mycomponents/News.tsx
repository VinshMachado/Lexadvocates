import React from "react";

const News = () => {
  return (
    <div className="w-full h-auto flex justify-center items-center  mt-10 mb-10">
      <iframe
        className="w-[90%] sm:h-[500px] h-[600px]"
        src="https://rss.app/embed/v1/wall/IMDvqz9QgiMZs2hd"
      ></iframe>
    </div>
  );
};

export default News;
