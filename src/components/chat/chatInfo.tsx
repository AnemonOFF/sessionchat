import React from "react";

type Props = {
  room: string;
};

const ChatInfo: React.FC<Props> = ({ room }) => {
  return (
    <div className="bg-slate-300 dark:bg-slate-950 p-4 h-20 sticky top-0">
      <span className="text-black dark:text-white">{room}</span>
    </div>
  );
};

export default React.memo(ChatInfo);
