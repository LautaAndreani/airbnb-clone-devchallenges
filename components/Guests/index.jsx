import { Box, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import Number from "../Number";

const Guests = ({ adults, kids, setAdults, setKids }) => {
  return (
    <>
      <Stack spacing={5} fontWeight={500}>
        <Box>
          <Text fontWeight={600}>Adults</Text>
          <Text as="small" color="gray">
            Ages 13 or above
          </Text>
          <Number state={adults} setState={setAdults} name="adults" />
        </Box>
        <Box>
          <Text fontWeight={600} marginBottom={1}>
            Children
          </Text>
          <Text as="small" color="gray">
            Ages 2-12
          </Text>
          <Number state={kids} setState={setKids} name="kids" />
        </Box>
      </Stack>
    </>
  );
};

export default Guests;
