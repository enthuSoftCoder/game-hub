import usePlatforms from "./usePlatforms";

const usePlatform = (platformId?: number) => {
  const { data: platforms } = usePlatforms();
  return platforms.results.find((g) => g.id === platformId);
};
export default usePlatform;
