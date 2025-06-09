"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { GoogleGenAI } from "@google/genai";
import { create } from "zustand";
import { persist } from "zustand/middleware";

// Type for messages
type Message = {
  sender: "bot" | "user";
  text: string;
};

// Zustand store with persistence
const useMessageStore = create(
  persist<{
    messages: Message[];
    addMessage: (msg: Message) => void;
    clearMessages: () => void;
  }>(
    (set) => ({
      messages: [
        { sender: "bot", text: "Welcome to Ronel Lex advocates & consultants" },
      ],
      addMessage: (msg) =>
        set((state) => ({ messages: [...state.messages, msg] })),
      clearMessages: () =>
        set({
          messages: [
            {
              sender: "bot",
              text: "Welcome to Ronel Lex advocates & consultants",
            },
          ],
        }),
    }),
    {
      name: "ronel-messages", // localStorage key
    }
  )
);

export default function Page() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [api, setapikey] = useState("");
  const [input, setInput] = useState("");

  const { messages, addMessage } = useMessageStore();

  useEffect(() => {
    setapikey(`${process.env.NEXT_PUBLIC_GEMINAI}`);
  }, []);

  const ai = new GoogleGenAI({ apiKey: api });

  const SendAi = async () => {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: input,
      config: {
        systemInstruction: `You are a law consultant working at Ronel lex advocates & consultants and you have to give customers yours openion and law knowledge based on indian constitution and remember our serivces are open from  05:30pm to 07:30pm Upon Appointment. and  we are available at 2 locations Mangaluru
#4-239, Pilikula,
Nisargadhama Nagara,
Moodushedde,
Vamanjoor Post,
Mangaluru - 575028 and  Bengaluru
No. 12/69, Jetking Building, First Floor,
Opp. to MEI Polytechnic,
59th Cross, 4th Block,
Rajajinagar,
Bengaluru - 560 010ya dont give long answers keep small and cute, if anyone greets you just greet back without giving details of our locations `,
      },
    });

    setTimeout(() => {
      addMessage({
        sender: "bot",
        text: `${response.text}`,
      });
    }, 100);
  };

  const sendMessage = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    addMessage({ sender: "user", text: trimmed });
    setInput("");
    SendAi();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  };

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
      <div className=" w-full m-5 sm:w-[65%] mx-auto border shadow-md rounded-xl h-[600px] flex flex-col overflow-hidden bg-white">
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
            onClick={sendMessage}
            className="bg-amber-500 text-white px-4 py-2 text-sm rounded-xl hover:bg-amber-600 transition-colors"
          >
            Send
          </button>
        </div>
      </div>
    </motion.div>
  );
}
