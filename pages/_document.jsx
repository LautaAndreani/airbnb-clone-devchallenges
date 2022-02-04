import { Center, Text } from "@chakra-ui/react";
import { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" type="image/x-icon" href="/triangleLogo.png" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
      <Center as="footer" margin={20}>
        <Text as="small">
          Created by{" "}
          <Link href="https://www.linkedin.com/in/lautaroandreani/">
            <a target="_blank" rel="noopener noreferrer">
              <Text as="strong" borderBottom="1px solid gray">
                Lautaro
              </Text>
            </a>
          </Link>
          - devChallenges.io
        </Text>
      </Center>
    </Html>
  );
}
