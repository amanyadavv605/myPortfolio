import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

export default function GeminiAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState(["Hi! I'm your AI assistant."]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input) return;
    setMessages((prev) => [...prev, `You: ${input}`]);
    setInput("");

    const res = await axios.post(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyCHL2BbZkYLrGwXy6W_DQWcG1F2mtHH3G4",
      {
        contents: [{ parts: [{ text: input }] }],
      }
    );

    const reply =
      res.data.candidates?.[0]?.content?.parts?.[0]?.text ||
      "🤖 I'm still learning!";
    setMessages((prev) => [...prev, `AI: ${reply}`]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={() => setOpen(!open)}
        className="bg-primary p-3 rounded-full shadow-xl"
      >
        💬
      </button>

      {open && (
        <motion.div
          className="w-80 h-96 bg-white p-4 rounded-2xl shadow-2xl flex flex-col mt-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex-1 overflow-y-auto space-y-2 mb-2">
            {messages.map((msg, i) => (
              <p key={i} className="text-sm">
                {msg}
              </p>
            ))}
          </div>
          <input
            className="border p-2 rounded w-full"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Ask me anything..."
          />
        </motion.div>
      )}
    </div>
  );
}
