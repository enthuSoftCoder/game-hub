import useTrailer from "../hooks/useTrailer";

interface Props {
  gameId: number;
}

const GameTrailter = ({ gameId }: Props) => {
  const { data, isLoading, error } = useTrailer(gameId);
  if (isLoading) return null;
  if (error) throw error;
  const first = data?.results[0];
  return data ? (
    <video src={first?.data[480]} poster={first?.preview} controls />
  ) : null;
};

export default GameTrailter;
