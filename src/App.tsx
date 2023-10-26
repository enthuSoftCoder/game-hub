import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import GameGrid from "./component/GameGrid";
import GameHeading from "./component/GameHeading";
import GenreList from "./component/GenreList";
import NavBar from "./component/NavBar";
import PlatformList from "./component/PlatformList";
import SortSelector from "./component/SortSelector";

const App = () => {
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
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={4}>
            <GenreList />
          </GridItem>
        </Show>
        <GridItem area="main">
          <Box paddingLeft={2}>
            <GameHeading />
            <Flex marginY={4}>
              <Box marginRight={4}>
                <SortSelector />
              </Box>
              <PlatformList />
            </Flex>
          </Box>
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
