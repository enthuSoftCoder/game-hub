import { Heading } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const { data: genres } = useGenres();
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const genreName = genres.results.find((g) => g.id === genreId)?.name;
  const { data: platforms } = usePlatforms();
  const platformName = platforms.results.find((g) => g.id === platformId)?.name;
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
