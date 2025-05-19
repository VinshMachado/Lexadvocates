"use client";

import { useState } from "react";

export default function Page() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Welcome to Ronel Lex advocates & consultants" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    const newMsg = { sender: "user", text: trimmed };
    setMessages((prev) => [...prev, newMsg]);
    setInput("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Cool! I got your message.udhbwsfui 8auhbau ida8soud 8uygb8aud bsa8d",
        },
      ]);
    }, 600);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <div
      id="BOT"
      className=" w-[80%] m-10 sm:max-w-sm mx-auto border shadow-md rounded-xl h-[600px] flex flex-col overflow-hidden bg-white"
    >
      {/* Header */}
      <div className="bg-white border-b px-4 py-3 font-semibold text-gray-700">
        AI Chat
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-3 py-2 space-y-2 bg-gray-50">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`rounded-2xl px-4 py-2 max-w-[75%] text-sm ${
                msg.sender === "user"
                  ? "bg-amber-500 text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        <div />
      </div>

      {/* Input */}
      <div className="border-t bg-white p-2 flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 p-2 text-sm border rounded-full outline-none focus:ring-1 ring-amber-400"
          placeholder="Message..."
        />
        <button
          onClick={sendMessage}
          className="bg-amber-500 text-white px-4 py-2 text-sm rounded-full hover:bg-amber-600"
        >
          Send
        </button>
      </div>
    </div>
  );
}
