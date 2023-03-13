import React, { Fragment } from 'react';
import Head from 'next/head';
import Layout from '../layouts/Basic';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';

import '../styles/global.scss';

type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: JSX.Element, props: P) => JSX.Element;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  pageProps: {
    title?: string;
  };
};

function getDefaultLayout(page: JSX.Element, pageProps: any): JSX.Element {
  return <Layout>{page}</Layout>;
}

function App({ Component, pageProps }: AppPropsWithLayout) {
  const { title } = pageProps;
  const getLayout = Component.getLayout ?? getDefaultLayout;

  return (
    <Fragment>
      <Head>{title ? <title>{title}</title> : null}</Head>
      {getLayout(<Component {...pageProps} />, pageProps)}
    </Fragment>
  );
}

export default App;
