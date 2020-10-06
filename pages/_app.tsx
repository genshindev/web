/*
 * Copyright (c) 2020 genshin.dev
 * Licensed under the Open Software License version 3.0
 */

import Head from 'next/head';
import { AppProps } from 'next/app';
import '../styles/globals.scss';

const GenshinDevApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>genshin.dev - Coming Soon</title>
        <meta
          name="description"
          content="Dev resources for Genshin Impact. Coming Soon."
        />
        <meta
          name="keywords"
          content="Genshin Impact, Genshin, Impact, miHoYo, API, Developer, Dev"
        />
        <meta
          name="viewport"
          content="width=device-width"
          initial-scale="1.0"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default GenshinDevApp;
