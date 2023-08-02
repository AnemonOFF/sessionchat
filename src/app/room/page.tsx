"use client";

import Join from "$/components/join";
import { useRouter } from "next/navigation";

const RoomPage: React.FC = () => {
  const router = useRouter();

  const joinRoom = (room: string) => {
    router.push(`/room/${room}`);
  };

  return <Join onSet={joinRoom} />;
};

export default RoomPage;
