/*
 * Copyright (c) 2020 genshin.dev
 * Licensed under the Open Software License version 3.0
 */

import Head from 'next/head';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>genshin.dev - Coming Soon</title>
        <meta
          name='description'
          content='Dev resources for Genshin Impact. Coming Soon.'
        />
        <meta
          name='keywords'
          content='Genshin Impact, Genshin, Impact, miHoYo, API, Developer, Dev'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
