"use client";

import { useEffect, useRef, useState } from "react";

const API_URL = "http://localhost:5000/api/ai-mentor";

const initialMessage = {
  sender: "ai",
  text: "Hello! I am your AI Mentor Assistant. Ask me about your pitch, business model, funding readiness, or investor preparation.",
};

export default function Chatbot({ startupId = 1 }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([initialMessage]);
  const [input, setInput] = useState("");
  const [sessionId, setSessionId] = useState(null);
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingHistory, setLoadingHistory] = useState(false);
  const [error, setError] = useState("");

  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      loadSessions();
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function loadSessions() {
    try {
      const response = await fetch(`${API_URL}/sessions/${startupId}`);
      const data = await response.json();

      if (Array.isArray(data)) {
        setSessions(data);
      }
    } catch (error) {
      console.error("Failed to load sessions:", error);
    }
  }

  async function openOldChat(selectedSessionId) {
    try {
      setLoadingHistory(true);
      setError("");

      const response = await fetch(`${API_URL}/messages/${selectedSessionId}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to load old chat");
      }

      const formattedMessages = data.map((msg) => ({
        sender: msg.sender,
        text: msg.message,
      }));

      setSessionId(selectedSessionId);
      setMessages(
        formattedMessages.length > 0 ? formattedMessages : [initialMessage]
      );
    } catch (error) {
      console.error("Failed to open old chat:", error);
      setError("Could not load old chat.");
    } finally {
      setLoadingHistory(false);
    }
  }

  function startNewChat() {
    setSessionId(null);
    setMessages([initialMessage]);
    setInput("");
    setError("");
  }

  async function sendMessage() {
    const messageToSend = input.trim();

    if (!messageToSend || loading) return;

    setMessages((prev) => [
      ...prev,
      {
        sender: "startup",
        text: messageToSend,
      },
    ]);

    setInput("");
    setLoading(true);
    setError("");

    try {
      const response = await fetch(`${API_URL}/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          startupId,
          sessionId,
          message: messageToSend,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "AI Mentor failed");
      }

      if (data.sessionId) {
        setSessionId(data.sessionId);
      }

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: data.reply,
        },
      ]);

      loadSessions();
    } catch (error) {
      console.error("AI Mentor error:", error);

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: "Sorry, the AI Mentor Assistant is currently unavailable. Please try again.",
        },
      ]);

      setError("AI Mentor Assistant is unavailable.");
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  }

  function getSessionTitle(session) {
    const title =
      session.first_message || session.title || `AI Mentor Chat #${session.id}`;

    return title.length > 24 ? title.slice(0, 24) + "..." : title;
  }

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 w-14 h-14 bg-[#0f3d32] hover:bg-[#0a2921] rounded-full shadow-lg flex items-center justify-center text-white transition hover:scale-105 z-50"
      >
        {isOpen ? (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        ) : (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            ></path>
          </svg>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-28 right-8 w-96 h-[520px] bg-white rounded-2xl shadow-2xl border border-gray-100 flex flex-col z-50 overflow-hidden">
          {/* Header */}
          <div className="bg-[#0f3d32] text-white px-4 py-3 flex justify-between items-center">
            <div>
              <h3 className="font-bold text-sm">AI Mentor Assistant</h3>
              <p className="text-[11px] text-gray-200">
                {sessionId ? `Session #${sessionId}` : "New chat"}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={startNewChat}
                className="text-[11px] bg-white/10 hover:bg-white/20 px-2 py-1 rounded-md"
              >
                New
              </button>

              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-200"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Chat History */}
          <div className="bg-white border-b border-gray-100 px-3 py-2">
            <div className="flex items-center justify-between mb-2">
              <p className="text-[11px] font-semibold text-gray-600">
                Previous Chats
              </p>

              <button
                onClick={loadSessions}
                className="text-[11px] text-[#0f3d32] hover:underline"
              >
                Refresh
              </button>
            </div>

            <div className="flex gap-2 overflow-x-auto pb-1">
              {sessions.length === 0 ? (
                <span className="text-[11px] text-gray-400">
                  No old chats yet
                </span>
              ) : (
                sessions.map((session) => (
                  <button
                    key={session.id}
                    onClick={() => openOldChat(session.id)}
                    className={`shrink-0 text-[11px] px-3 py-1.5 rounded-full border transition ${session.id === sessionId
                      ? "bg-[#0f3d32] text-white border-[#0f3d32]"
                      : "bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100"
                      }`}
                  >
                    {getSessionTitle(session)}
                  </button>
                ))
              )}
            </div>
          </div>

          {/* Error */}
          {error && (
            <div className="bg-red-50 text-red-700 text-xs px-4 py-2 border-b border-red-100">
              {error}
            </div>
          )}

          {/* Messages */}
          <div className="flex-grow p-4 bg-gray-50 flex flex-col gap-3 overflow-y-auto">
            {loadingHistory ? (
              <p className="text-xs text-gray-500 text-center mt-4">
                Loading old chat...
              </p>
            ) : (
              <>
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`text-xs px-3 py-2 rounded-lg max-w-[85%] leading-relaxed whitespace-pre-wrap ${msg.sender === "startup"
                      ? "self-end bg-[#0f3d32] text-white rounded-br-sm"
                      : "self-start bg-gray-200 text-gray-800 rounded-bl-sm"
                      }`}
                  >
                    {msg.text}
                  </div>
                ))}

                {loading && (
                  <div className="self-start bg-gray-200 text-gray-800 text-xs px-3 py-2 rounded-lg rounded-bl-sm max-w-[80%]">
                    AI Mentor is typing...
                  </div>
                )}

                <div ref={messagesEndRef} />
              </>
            )}
          </div>

          {/* Input */}
          <div className="p-3 bg-white border-t border-gray-100">
            <div className="relative">
              <input
                type="text"
                placeholder="Type a message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={loading}
                className="w-full pl-3 pr-10 py-2 bg-gray-50 border border-gray-200 rounded-lg text-xs outline-none focus:ring-1 focus:ring-[#0f3d32] disabled:opacity-60"
              />

              <button
                onClick={sendMessage}
                disabled={loading || !input.trim()}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-[#0f3d32] disabled:text-gray-300"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}