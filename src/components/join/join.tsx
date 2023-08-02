"use client";

import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import JoinWrapper from "./wrapper";

type Props = {
  onSet: (room: string) => void;
};

const ChatJoin: React.FC<Props> = ({ onSet }) => {
  const [roomInput, setRoomInput] = useState("");

  return (
    <JoinWrapper>
      <div className="bg-slate-50 dark:bg-slate-950 p-4 h-20">
        <div className="flex flex-row flex-1 h-full divide-gray-200 dark:divide-gray-800 divide-x">
          <div className="pr-2 flex-1">
            <input
              type="text"
              value={roomInput}
              placeholder="Room code"
              className="w-full h-full rounded shadow border bg-transparent border-gray-600 dark:border-gray-400 px-2 text-black dark:text-white"
              onChange={(e) => setRoomInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.code === "Enter") onSet(roomInput);
              }}
            />
          </div>
          <div className="flex flex-col justify-center items-stretch pl-2">
            <button
              className="bg-slate-200 dark:bg-slate-800 rounded shadow text-sm text-black dark:text-white h-full px-2"
              onClick={() => {
                onSet(roomInput);
              }}
            >
              Enter
            </button>
          </div>
        </div>
      </div>
      <div>
        <button
          className="bg-slate-200 dark:bg-slate-800 rounded shadow text-sm text-black dark:text-white h-full px-2"
          onClick={() => {
            onSet(uuidv4());
          }}
        >
          Create new
        </button>
      </div>
    </JoinWrapper>
  );
};

export default React.memo(ChatJoin);
