import { Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../component/ExpandableText";
import useGame from "../hooks/useGame";
import GameAttributes from "../component/GameAttributes";
import GameTrailter from "../component/GameTrailter";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);
  if (isLoading) return <Spinner />;
  if (error || !game) throw error;
  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <GameAttributes game={game} />
      <GameTrailter gameId={game.id} />
    </>
  );
};

export default GameDetailPage;
