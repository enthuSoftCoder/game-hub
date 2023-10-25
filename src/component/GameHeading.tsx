import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres();
  const genreName = genres.results.find(
    (g) => g.id === gameQuery.genreId
  )?.name;
  const { data: platforms } = usePlatforms();
  const platformName = platforms.results.find(
    (g) => g.id === gameQuery.platformId
  )?.name;
  const heading = `${platformName || ""} ${genreName || ""} Games`;
  return (
    <div>
      <Heading as="h1" fontSize="5xl" marginY={5}>
        {heading}
      </Heading>
    </div>
  );
};

export default GameHeading;
