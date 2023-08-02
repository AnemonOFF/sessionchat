import React, { PropsWithChildren } from "react";

const ChatWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-col w-full h-screen p-10">
      <div className="flex flex-col flex-1 max-w-screen-lg w-full mx-auto bg-slate-100 dark:bg-slate-900">
        {children}
      </div>
    </div>
  );
};

export default React.memo(ChatWrapper);
