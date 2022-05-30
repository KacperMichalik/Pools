/* eslint-disable @next/next/no-css-tags */
import { Html, Head, Main, NextScript } from "next/document";
const Document = () => (
  <Html>
    <Head>
      <link
        href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
        // rel="stylesheet"
        rel="preload"
        as="font"
      />
      {/* <link
        href="./public/static/fonts/SpaceGrotesk-Regular.ttf"
        // rel="stylesheet"
        as="font"
        crossOrigin=""
        rel="preload"
      /> */}
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
