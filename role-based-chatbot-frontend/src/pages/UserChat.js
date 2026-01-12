import { useState } from "react";
import axios from "axios";

function UserChat() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const sendMessage = async () => {
    if (!message) return;

    const userMsg = { from: "user", text: message };
    setChat([...chat, userMsg]);

    const res = await axios.post(
      "http://localhost:5000/api/chat/ask",
      { message }
    );

    const botMsg = { from: "bot", text: res.data.reply };
    setChat((prev) => [...prev, botMsg]);

    setMessage("");
  };

  return (
    <div>
      <h2>User Chat</h2>

      <div>
        {chat.map((msg, i) => (
          <p key={i}>
            <b>{msg.from}:</b> {msg.text}
          </p>
        ))}
      </div>

      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default UserChat;
