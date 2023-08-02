import React from "react";
import Message from "./message";
import { ChatMessage } from "./types";

type Props = {
  messages: ChatMessage[];
  userName: string;
};

const ChatHistory: React.FC<Props> = ({ messages, userName }) => {
  return (
    <div className="flex-1 p-4 font-mono">
      {messages.length ? (
        messages.map((msg, i) => (
          <Message key={i} message={msg} userName={userName} />
        ))
      ) : (
        <div className="text-sm text-center text-gray-600 dark:text-gray-400 py-6">
          No chat messages
        </div>
      )}
    </div>
  );
};

export default React.memo(ChatHistory);
