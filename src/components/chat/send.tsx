import React, { useState } from "react";

type Props = {
  sendMessage: (message: string) => Promise<boolean>;
  disabled: boolean;
};

const ChatSend: React.FC<Props> = ({ sendMessage, disabled }) => {
  const [messageInput, setMessageInput] = useState("");

  const send = async () => {
    const res = await sendMessage(messageInput);
    if (res) setMessageInput("");
  };

  return (
    <div className="bg-slate-300 dark:bg-slate-950 p-4 h-20 sticky bottom-0">
      <div className="flex flex-row flex-1 h-full divide-gray-200 dark:divide-gray-800 divide-x">
        <div className="pr-2 flex-1">
          <input
            type="text"
            value={messageInput}
            placeholder={!disabled ? "Type a message..." : "Connecting..."}
            className="w-full h-full rounded shadow border px-2 bg-transparent border-gray-600 dark:border-gray-400 text-black dark:text-white"
            disabled={disabled}
            onChange={(e) => {
              setMessageInput(e.target.value);
            }}
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                send();
              }
            }}
          />
        </div>
        <div className="flex flex-col justify-center items-stretch pl-2">
          <button
            className="bg-slate-50 dark:bg-slate-950 rounded shadow text-sm text-black dark:text-white h-full px-2"
            onClick={() => {
              send();
            }}
            disabled={disabled}
          >
            SEND
          </button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ChatSend);
