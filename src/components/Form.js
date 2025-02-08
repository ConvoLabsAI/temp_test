import React, { useState, useEffect } from "react";
import { FiMessageSquare } from "react-icons/fi";
import { IoSend } from "react-icons/io5";

const ChatBox = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");

  useEffect(() => {
    if (isChatOpen && messages.length === 0) {
      setMessages([
        {
          text: "Tell us what you are looking for, we are here to help.",
          sender: "bot"
        }
      ]);
    }
  }, [isChatOpen]);

  const handleSendMessage = () => {
    if (currentMessage.trim()) {
      setMessages([...messages, { text: currentMessage, sender: "user" }]);
      setCurrentMessage("");
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            text: "Thanks for your message! We'll get back to you shortly.",
            sender: "bot"
          }
        ]);
      }, 1000);
    }
  };

  const toggleChat = () => setIsChatOpen(!isChatOpen);

  return (
    <div>
      <div className="fixed bottom-8 right-8 z-50">
        <button
          onClick={toggleChat}
          className="bg-gradient-to-r from-blue-400 to-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-gradient-to-l transition-all"
        >
          <FiMessageSquare className="text-2xl" />
        </button>
      </div>
      {isChatOpen && (
        <div className="fixed bottom-20 right-8 bg-white w-80 max-w-full shadow-lg rounded-xl border border-gray-300 z-50" style={{ maxHeight: "calc(100vh - 160px)", overflow: "hidden" }}>
          <div className="bg-gradient-to-r from-blue-400 to-blue-600 text-white p-4 rounded-t-xl flex justify-between items-center">
            <h3 className="font-bold text-lg">Chat with Us</h3>
            <button onClick={toggleChat} className="text-white font-bold text-lg">
              ×
            </button>
          </div>
          <div className="p-4 h-64 overflow-y-auto" style={{ maxHeight: "calc(100vh - 240px)" }}>
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-4 flex ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`px-4 py-2 rounded-lg text-sm ${
                    message.sender === "user"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 border-t border-gray-300 flex items-center gap-2">
            <input
              type="text"
              value={currentMessage}
              onChange={(e) => setCurrentMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-400 text-black"
            />
            <button
              onClick={handleSendMessage}
              className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-all"
            >
              <IoSend />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBox;