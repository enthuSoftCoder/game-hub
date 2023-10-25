import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react";
import GameGrid from "./component/GameGrid";
import GameHeading from "./component/GameHeading";
import GenreList from "./component/GenreList";
import NavBar from "./component/NavBar";
import PlatformList from "./component/PlatformList";
import SortSelector from "./component/SortSelector";
export interface GameQuery {
  platformId?: number;
  genreId?: number;
  sortOrder: string;
  searchText: string;
}
const App = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav">
          {" "}
          <NavBar
            onSearch={(searchText) =>
              setGameQuery({ ...gameQuery, searchText })
            }
          />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={4}>
            <GenreList
              selectedGenreId={gameQuery.genreId}
              onSelectGenre={(genre) =>
                setGameQuery({ ...gameQuery, genreId: genre.id })
              }
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <Box paddingLeft={2}>
            <GameHeading gameQuery={gameQuery} />
            <Flex marginY={4}>
              <Box marginRight={4}>
                <SortSelector
                  selectedOrder={gameQuery.sortOrder}
                  onSelectedOrder={(sortOrder) =>
                    setGameQuery({ ...gameQuery, sortOrder })
                  }
                />
              </Box>
              <PlatformList
                selectedPlatformId={gameQuery.platformId}
                onSelectedPlatform={(platform) =>
                  setGameQuery({ ...gameQuery, platformId: platform.id })
                }
              />
            </Flex>
          </Box>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
