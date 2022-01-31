import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import axios from 'axios';
import {createGlobalStyle} from "styled-components";
import '../custom-antd.css';
import '../style.css'
import '@toast-ui/editor/dist/toastui-editor.css';

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Dongle';
    src: url('/static/fonts/Dongle-Light.ttf');
    src: url('/static/fonts/Dongle-Regular.ttf');
    src: url('/static/fonts/Dongle-Bold.ttf');
}
p {
  font-family: 'Dongle';
}
`;

axios.defaults.withCredentials = true

function MyApp({ Component, pageProps }: AppProps) {
  axios.defaults.baseURL="http://localhost:5000"
  return (
    <React.Fragment>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <GlobalStyle/>
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;
