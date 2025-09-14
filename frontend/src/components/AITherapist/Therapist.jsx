import React, { useState } from "react";
import Navbar from "../navbar/Navbar"; // make sure the path is correct

export default function Chat() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setLoading(true);
    setResponse("");

       try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/chat/message`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();
      setResponse(data.message || "No response from server.");
    } catch (error) {
      setResponse("Error: " + error.message);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col">
      {/* ✅ Navbar */}
      <Navbar />

      {/* Spacer to prevent content clash if Navbar is fixed */}
      <div className="mt-24 flex flex-col items-center px-4 py-10 flex-grow">
        <div className="w-full max-w-2xl bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-center mb-4 text-gray-700">
            Talk with Gemini 🤖
          </h2>

          {/* Input form */}
          <form onSubmit={sendMessage} className="flex gap-2">
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 p-3 border rounded-xl focus:ring-2 focus:ring-purple-400 outline-none"
            />
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-3 rounded-xl font-medium transition-all"
            >
              {loading ? "..." : "Send"}
            </button>
          </form>

          {/* Response box */}
          <div className="mt-6 bg-gray-50 border rounded-xl p-4 min-h-[120px] whitespace-pre-wrap text-gray-800">
            {loading ? "Thinking..." : response || "Response will appear here..."}
          </div>
        </div>
      </div>
    </div>
  );
}
