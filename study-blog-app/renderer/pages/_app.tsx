import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import axios from 'axios';
import '../custom-antd.css';

function MyApp({ Component, pageProps }: AppProps) {
  axios.defaults.baseURL="http://localhost:5000"
  return (
    <React.Fragment>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;
