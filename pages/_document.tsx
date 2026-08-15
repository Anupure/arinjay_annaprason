import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="bn">
      <Head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#8B4513" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&family=Playfair+Display:wght@700;900&family=Tiro+Bangla:ital@0;1&family=Noto+Serif+Bengali:wght@400;600;700&family=Baloo+Da+2:wght@400;600;700&family=Hind+Siliguri:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
