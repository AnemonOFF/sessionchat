"use client";

import React, { useCallback, useEffect, useState } from "react";
import { ChatMessage } from "./types";
import { io as ClientIO } from "socket.io-client";

const useChat = (
  setChatMessages: (value: React.SetStateAction<ChatMessage[]>) => void
) => {
  const [isConnected, setConnected] = useState(false);

  const sendApiSocketChat = useCallback(
    async (chatMessage: ChatMessage): Promise<Response> => {
      return await fetch("/api/socket/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(chatMessage),
      });
    },
    []
  );

  const sendMessage = useCallback(
    async (message: string, userName: string, room: string) => {
      if (message) {
        const chatMessage: ChatMessage = {
          userName,
          message,
          room,
          type: "USER",
        };

        const resp = await sendApiSocketChat(chatMessage);

        if (resp.ok) return true;
        return false;
      }
      return false;
    },
    [sendApiSocketChat]
  );

  const sendEnterRoomMessage = useCallback(
    async (userName: string, room: string) => {
      const chatMessage: ChatMessage = {
        userName,
        message: `${userName} enter to chat rooom`,
        room,
        type: "SYSTEM",
      };

      const resp = await sendApiSocketChat(chatMessage);
      if (!resp.ok) {
        setTimeout(() => {
          sendEnterRoomMessage(userName, room);
        }, 500);
      }
    },
    [sendApiSocketChat]
  );

  useEffect((): any => {
    const socket = new (ClientIO as any)(process.env.NEXT_PUBLIC_SITE_URL, {
      path: "/api/socket/io",
      addTrailingSlash: false,
    });

    // log socket connection
    socket.on("connect", () => {
      console.log("SOCKET CONNECTED!", socket.id);
      setConnected(true);
    });

    // update chat on new message dispatched
    socket.on("message", (message: ChatMessage) => {
      setChatMessages((v) => [...v, message]);
    });

    // socket disconnet onUnmount if exists
    if (socket) return () => socket.disconnect();
  }, []);

  return {
    isConnected,
    sendMessage,
    sendEnterRoomMessage,
  };
};

export default useChat;
