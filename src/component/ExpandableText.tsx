import { useState } from "react";
import { Button, Text } from "@chakra-ui/react";
interface Props {
  children: string;
}
const ExpandableText = ({ children }: Props) => {
  if (!children) return null;
  const [expand, setExpand] = useState(false);
  const limit = 300;
  if (children.length <= limit) return <Text>{children}</Text>;
  const summary = expand ? children : children.substring(0, limit) + "...";
  return (
    <>
      <Text>
        {summary}
        <Button
          size="xs"
          marginLeft={1}
          colorScheme="yellow"
          fontWeight="bold"
          onClick={() => setExpand(!expand)}
        >
          {expand ? "Show less" : "Show More"}
        </Button>
      </Text>
    </>
  );
};

export default ExpandableText;
