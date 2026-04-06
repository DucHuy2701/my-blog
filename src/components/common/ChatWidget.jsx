import { useState } from "react";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("https://chatbot-ai-three-beryl.vercel.app/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userMsg.content }),
      });

      const data = await res.json();

      const botMsg = {
        role: "assistant",
        content: data.reply || "No response",
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      console.error("Chat error:", err);

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Error xảy ra 😢" },
      ]);
    }

    setLoading(false);
  };

  return (
    <>
      {/* BUTTON MỞ CHAT */}
      <button
        onClick={() => setOpen(!open)}
        className="z-50 fixed bottom-5 right-5 bg-black text-white px-4 py-3 rounded-full shadow-lg hover:scale-105 transition"
      >
        AI
      </button>

      {/* CHAT BOX */}
      {open && (
        <div className="z-50 fixed bottom-20 right-5 w-80 h-96 bg-white shadow-xl rounded-lg flex flex-col border">

          {/* HEADER */}
          <div className="p-3 border-b font-semibold bg-gray-100">
            AI Assistant
          </div>

          {/* MESSAGES */}
          <div className="flex-1 overflow-y-auto p-3 text-sm space-y-2">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`p-2 rounded ${
                  m.role === "user"
                    ? "bg-blue-100 text-right"
                    : "bg-gray-100 text-left"
                }`}
              >
                {m.content}
              </div>
            ))}

            {loading && (
              <div className="text-gray-400 text-sm">AI đang trả lời...</div>
            )}
          </div>

          {/* INPUT */}
          <div className="p-2 flex gap-2 border-t">
            <input
              className="border flex-1 px-2 py-1 rounded"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Nhập câu hỏi..."
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={sendMessage}
              className="bg-black text-white px-3 rounded"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}