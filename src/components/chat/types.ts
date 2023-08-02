export type ChatMessage = {
  userName: string;
  message: string;
  room: string;
  type: MessageType;
};

export type MessageType = "USER" | "SYSTEM";
