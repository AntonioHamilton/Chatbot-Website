import { Html, Head, Main, NextScript } from 'next/document';

function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <meta name="description" content="Blog Pessoal criado com Next.js" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Londrina+Sketch&family=Roboto:wght@400;700&family=Wendy+One&display=swap"
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

export default Document;
