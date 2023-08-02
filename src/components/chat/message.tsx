import React from "react";
import { ChatMessage } from "./types";

type Props = {
  message: ChatMessage;
  userName: string;
};

const ChatMessage: React.FC<Props> = ({ message, userName }) => {
  if (message.type === "SYSTEM") {
    return (
      <div className="mx-1 mt-1 m-auto text-gray-700 dark:text-gray-500">
        <span>{message.message}</span>
      </div>
    );
  }

  return (
    <div className="mt-1 text-black dark:text-white bg-gray-400 dark:bg-gray-600">
      <span
        className={
          message.userName === userName
            ? `text-red-500`
            : `text-slate-800 dark:text-slate-200`
        }
      >
        {message.userName === userName ? "[Me]" : `[${message.userName}]`}
      </span>
      : {message.message}
    </div>
  );
};

export default React.memo(ChatMessage);
