"use client";

import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

type Props = {
  onSet: (userName: string) => void;
  connected: boolean;
};

const ChatUserName: React.FC<Props> = ({ onSet, connected }) => {
  const [userNameInput, setUserNameInput] = useState("");

  return (
    <div className="flex items-center p-4 mx-auto min-h-screen justify-center">
      <div className="gap-4 flex flex-col items-center justify-center w-full h-full">
        <div className="bg-slate-50 dark:bg-slate-950 p-4 h-20">
          <div className="flex flex-row flex-1 h-full divide-gray-200 dark:divide-gray-800 divide-x">
            <div className="pr-2 flex-1">
              <input
                type="text"
                value={userNameInput}
                placeholder={connected ? "UserName" : "Connecting..."}
                className="w-full h-full rounded shadow border bg-transparent border-gray-600 dark:border-gray-400 px-2 text-black dark:text-white"
                disabled={!connected}
                onChange={(e) => setUserNameInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.code === "Enter") onSet(userNameInput);
                }}
              />
            </div>
            <div className="flex flex-col justify-center items-stretch pl-2">
              <button
                className="bg-slate-200 dark:bg-slate-800 rounded shadow text-sm text-black dark:text-white h-full px-2"
                onClick={() => {
                  onSet(userNameInput);
                }}
                disabled={!connected}
              >
                Enter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ChatUserName);
