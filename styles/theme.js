import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: "Montserrat",
        backgroundColor: "#fafafafa",
      },
    },
  },
  colors: {
    brand: {
      100: "#EB5757E5",
      200: "rgba(130, 130, 130, 1)",
      superHost: "rgba(79, 79, 79, 1)",
      backgroundColor: "#fafafafa",
    },
  },
});
