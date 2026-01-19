import { useState } from "react";
import { FaMessage, FaSearch, FaPaperPlane } from "react-icons/fa6";

export default function MessagesPage() {
  const [selectedChat, setSelectedChat] = useState(null);
  const [messageText, setMessageText] = useState("");
  const [chats] = useState([
    {
      id: 1,
      name: "Alina Pathan",
      avatar: "https://via.placeholder.com/40",
      lastMessage: "Hey, how are you?",
      timestamp: "2 min ago",
      unread: 2,
      messages: [
        { id: 1, sender: "other", text: "Hey, how are you?" },
        { id: 2, sender: "you", text: "I'm good, how about you?" },
      ],
    },
    {
      id: 2,
      name: "Dev Community",
      avatar: "https://via.placeholder.com/40",
      lastMessage: "Great discussion about React",
      timestamp: "1 hour ago",
      unread: 0,
      messages: [],
    },
    {
      id: 3,
      name: "Campus News",
      avatar: "https://via.placeholder.com/40",
      lastMessage: "New event announced",
      timestamp: "3 hours ago",
      unread: 1,
      messages: [],
    },
  ]);

  const handleSendMessage = () => {
    if (messageText.trim() && selectedChat) {
      setMessageText("");
    }
  };

  return (
    <div className="w-full flex h-screen">
      {/* Chats List */}
      <div className="w-80 border-r border-gray-700 flex flex-col hidden md:flex">
        {/* Header */}
        <div className="sticky top-16 z-10 bg-[#1e1e1e] border-b border-gray-700 p-4">
          <div className="flex items-center gap-3">
            <FaMessage className="text-cyan-400 text-2xl" />
            <h2 className="text-white font-bold text-xl">Messages</h2>
          </div>
        </div>

        {/* Search */}
        <div className="p-4 border-b border-gray-700">
          <div className="bg-gray-900 rounded-full px-4 py-2 flex items-center gap-2">
            <FaSearch className="text-gray-500 text-sm" />
            <input
              type="text"
              placeholder="Search conversations"
              className="bg-transparent text-white placeholder-gray-500 outline-none flex-1 text-sm"
            />
          </div>
        </div>

        {/* Chat List */}
        <div className="flex-1 overflow-y-auto">
          {chats.map((chat) => (
            <div
              key={chat.id}
              onClick={() => setSelectedChat(chat)}
              className={`p-4 border-b border-gray-700 cursor-pointer transition hover:bg-gray-900 ${
                selectedChat?.id === chat.id ? "bg-gray-900" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <img
                  src={chat.avatar}
                  alt={chat.name}
                  className="h-10 w-10 rounded-full"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center">
                    <p className="text-white font-semibold text-sm">
                      {chat.name}
                    </p>
                    <p className="text-gray-500 text-xs">{chat.timestamp}</p>
                  </div>
                  <p className="text-gray-400 text-xs truncate">
                    {chat.lastMessage}
                  </p>
                </div>
                {chat.unread > 0 && (
                  <div className="bg-cyan-500 text-black text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                    {chat.unread}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Window */}
      <div className="flex-1 flex flex-col">
        {selectedChat ? (
          <>
            {/* Chat Header */}
            <div className="sticky top-16 z-10 bg-[#1e1e1e] border-b border-gray-700 p-4 flex items-center gap-3">
              <img
                src={selectedChat.avatar}
                alt={selectedChat.name}
                className="h-10 w-10 rounded-full"
              />
              <div>
                <p className="text-white font-semibold">{selectedChat.name}</p>
                <p className="text-gray-500 text-xs">Active now</p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {selectedChat.messages.length > 0 ? (
                selectedChat.messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${
                      msg.sender === "you" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-xs px-4 py-2 rounded-2xl ${
                        msg.sender === "you"
                          ? "bg-cyan-500 text-black"
                          : "bg-gray-700 text-white"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))
              ) : (
                <div className="flex flex-col items-center justify-center h-full">
                  <p className="text-gray-500">No messages yet</p>
                </div>
              )}
            </div>

            {/* Message Input */}
            <div className="border-t border-gray-700 p-4 flex gap-2 items-center">
              <input
                type="text"
                placeholder="Type a message..."
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                className="flex-1 bg-gray-900 text-white rounded-full px-4 py-2 outline-none focus:ring-2 focus:ring-cyan-400 text-sm"
              />
              <button
                onClick={handleSendMessage}
                className="bg-cyan-500 text-black p-2 rounded-full hover:bg-cyan-400 transition"
              >
                <FaPaperPlane className="text-sm" />
              </button>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center h-full">
            <FaMessage className="text-gray-600 text-6xl mb-4" />
            <p className="text-gray-400 text-lg">Select a conversation</p>
            <p className="text-gray-500 text-sm mt-2">
              Choose from your messages to start chatting
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
