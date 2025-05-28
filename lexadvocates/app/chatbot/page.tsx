"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { GoogleGenAI } from "@google/genai";

export default function Page() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [api, setapikey] = useState("");
  useEffect(() => {
    setapikey(`${process.env.NEXT_PUBLIC_GEMINAI}`);
    console.log(`${process.env.NEXT_PUBLIC_GEMINAI}`);
  }, []);

  //display message thing

  const [messages, setMessages] = useState([
    { sender: "bot", text: "Welcome to Ronel Lex advocates & consultants" },
  ]);
  // users input thing
  const [input, setInput] = useState("");

  const ai = new GoogleGenAI({
    apiKey: api,
  });
  async function SendAi() {
    console.log();
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: `${input}`,

      config: {
        systemInstruction:
          "You are a law consultant working at Ronel lex advocates & consultants and you have to give customers yours openion and law knowledge based on indian constitution. and ya dont give long answers keep small and cute",
      },
    });
    console.log(response.text);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: `${response.text}`,
        },
      ]);
    }, 600);
  }

  const sendMessage = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    const newMsg = { sender: "user", text: trimmed };
    setMessages((prev) => [...prev, newMsg]);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      sendMessage();
      SendAi();
    }
  };

  // Auto-resize textarea
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = textarea.scrollHeight + "px";
    }
  }, [input]);

  return (
    <motion.div
      className="overflow-x-auto mx-5 my-6 flex flex-col justify-center items-center"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        scale: { visualDuration: 0.4, bounce: 0.5 },
      }}
      id="BOT"
    >
      <div className=" w-full m-5 sm:w-[75%] mx-auto border shadow-md rounded-xl h-[600px] flex flex-col overflow-hidden bg-white">
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
          <textarea
            ref={textareaRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            rows={1}
            placeholder="Message..."
            className="flex-1  resize-none overflow-hidden p-3 text-sm border rounded-xl outline-none focus:ring-2 ring-amber-400 transition-all"
          />
          <button
            onClick={() => {
              sendMessage();
              SendAi();
            }}
            className="bg-amber-500 text-white px-4 py-2 text-sm rounded-xl hover:bg-amber-600 transition-colors"
          >
            Send
          </button>
        </div>
      </div>
    </motion.div>
  );
}
