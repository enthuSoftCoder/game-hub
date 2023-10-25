import usePlatforms, { Platform } from "../hooks/usePlatforms";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
interface Props {
  selectedPlatformId?: number;
  onSelectedPlatform: (platform: Platform) => void;
}
const PlatformList = ({ selectedPlatformId, onSelectedPlatform }: Props) => {
  const { data, error } = usePlatforms();
  const platformName =
    data.results.find((p) => p.id === selectedPlatformId)?.name || "Platform";
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {platformName}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            onClick={() => onSelectedPlatform(platform)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformList;
