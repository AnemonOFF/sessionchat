import React, { PropsWithChildren } from "react";

const JoinWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex items-center p-4 mx-auto min-h-screen justify-center">
      <div className="gap-4 flex flex-col items-center justify-center w-full h-full">
        {children}
      </div>
    </div>
  );
};

export default React.memo(JoinWrapper);
