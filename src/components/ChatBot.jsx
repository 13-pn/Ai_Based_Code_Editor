import React, { useState } from "react";

const Chatbot = ({ setAiCode }) => {
  const [chatOpen, setChatOpen] = useState(false);
  const [inputText, setInputText] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const handleSendToAI = async () => {
    if (!inputText.trim()) return;

    const userMessage = inputText;
    setChatHistory([...chatHistory, { sender: "user", text: userMessage }]);
    setInputText("");

    try {
      const res = await fetch("http://localhost:8000/gemini.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await res.json();
      const aiText = data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response";

      setChatHistory((prev) => [...prev, { sender: "ai", text: aiText }]);
      setAiCode(aiText);
    } catch (err) {
      setChatHistory((prev) => [...prev, { sender: "ai", text: "Error: " + err.message }]);
    }
  };

  return (
    <>
      <button
        onClick={() => setChatOpen(!chatOpen)}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          backgroundColor: "#4CAF50",
          color: "#fff",
          fontSize: "28px",
          border: "none",
          cursor: "pointer",
          boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
          transition: "transform 0.2s, background-color 0.3s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.15)";
          e.currentTarget.style.backgroundColor = "#45a049";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.backgroundColor = "#4CAF50";
        }}
        title="Chat with AI"
      >
        🤖
      </button>

  
      {chatOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "90px",
            right: "20px",
            width: "320px",
            height: "400px",
            border: "1px solid #ccc",
            borderRadius: "10px",
            backgroundColor: "#1e1e1e", 
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            color: "#fff",
            boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
            animation: "slideUp 0.3s ease-out",
            zIndex: 2000,
          }}
        >
          <h4 style={{ margin: "0 0 5px 0", color: "#00ffcc" }}>AI Chatbot</h4>
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              border: "1px solid #333",
              padding: "5px",
              marginBottom: "5px",
              backgroundColor: "#2e2e2e",
            }}
          >
            {chatHistory.map((msg, idx) => (
              <div
                key={idx}
                style={{
                  textAlign: msg.sender === "user" ? "right" : "left",
                  margin: "5px 0",
                  backgroundColor: msg.sender === "user" ? "#0b8457" : "#3a3a3a",
                  color: "#fff",
                  padding: "5px 8px",
                  borderRadius: "5px",
                  wordBreak: "break-word",
                }}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Ask AI..."
            style={{
              width: "100%",
              flexShrink: 0,
              resize: "none",
              padding: "5px",
              borderRadius: "5px",
              border: "1px solid #555",
              backgroundColor: "#1e1e1e",
              color: "#fff",
            }}
            onKeyDown={async (e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                await handleSendToAI();
              }
            }}
          />
        </div>
      )}

      
      <style>
        {`
          @keyframes slideUp {
            0% { transform: translateY(30px); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
          }
        `}
      </style>
    </>
  );
};

export default Chatbot;
