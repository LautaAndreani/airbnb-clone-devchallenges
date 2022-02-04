import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import { theme } from "/styles/theme.js";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Windbnb</title>
      </Head>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
