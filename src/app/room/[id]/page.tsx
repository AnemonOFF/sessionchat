import Chat from "$/components/chat";

type Props = {
  params: {
    id: string;
  };
};

const RoomIdPage: React.FC<Props> = ({ params }) => {
  return <Chat room={params.id} />;
};

export default RoomIdPage;
