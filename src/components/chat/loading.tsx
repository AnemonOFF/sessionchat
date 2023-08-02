import React from "react";

const ChatLoading: React.FC = () => {
  return (
    <div className="flex items-center p-4 mx-auto min-h-screen justify-center">
      <div className="gap-4 flex flex-col items-center justify-center w-full h-full">
        <span>Loading...</span>
      </div>
    </div>
  );
};

export default React.memo(ChatLoading);
