import { Button, Icon, IconButton, Input, Stack } from "@chakra-ui/react";
import { BsPlusLg, BsDashLg } from "react-icons/bs";

const Number = ({ state, setState, name }) => {
  const handleUpgrade = () => {
    setState((prev) => prev - 1);
    if (state <= 0) {
      setState(0);
    }
  };
  return (
    <Stack direction="row" marginTop={2}>
      <Button w="1rem" bg="none" border="1px solid rgba(130, 130, 130, 1)" onClick={handleUpgrade}>
        <Icon as={BsDashLg} aria-label="decrecent" />
      </Button>
      <Input isRequired type="text" name={name} border="none" w="4rem" value={state} isReadOnly />
      <Button w="1rem" border="1px solid rgba(130, 130, 130, 1)" bg="none" onClick={() => setState((prev) => prev + 1)}>
        <Icon as={BsPlusLg} aria-label="decrecent" />
      </Button>
    </Stack>
  );
};

export default Number;
