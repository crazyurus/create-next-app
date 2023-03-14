import { Html, Head, Main, NextScript } from 'next/document';

function Document(): JSX.Element {
  return (
    <Html lang="zh-CN">
      <Head>
        <meta charSet="utf-8" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#4f46e5" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
