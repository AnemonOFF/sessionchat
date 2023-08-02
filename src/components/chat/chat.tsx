"use client";

import React, { useEffect, useState } from "react";
import ChatHistory from "./history";
import ChatLoading from "./loading";
import ChatSend from "./send";
import { ChatMessage } from "./types";
import useChat from "./useChat";
import ChatWrapper from "./wrapper";
import ChatInfo from "./chatInfo";
import ChatUserName from "./userName";

type Props = {
  room: string;
};

const Chat: React.FC<Props> = ({ room }) => {
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [userName, setUserName] = useState("");
  const { isConnected, sendEnterRoomMessage, sendMessage } =
    useChat(setChatMessages);

  useEffect((): any => {
    if (userName) {
      sendEnterRoomMessage(userName, room);
    }
  }, [userName]);

  if (!userName)
    return <ChatUserName connected={isConnected} onSet={setUserName} />;
  if (!isConnected) return <ChatLoading />;

  return (
    <ChatWrapper>
      <ChatInfo room={room} />
      <ChatHistory messages={chatMessages} userName={userName} />
      <ChatSend
        disabled={!isConnected}
        sendMessage={(msg) => sendMessage(msg, userName, room)}
      />
    </ChatWrapper>
  );
};

export default React.memo(Chat);
