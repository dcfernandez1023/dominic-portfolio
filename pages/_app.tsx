import 'antd/dist/reset.css';

import type { AppProps } from 'next/app'
import { ConfigProvider, theme } from "antd";
import { useEffect } from 'react';

const { defaultAlgorithm, darkAlgorithm } = theme;

export default function App({ Component, pageProps }: AppProps) {

  return (
    <ConfigProvider theme={{ algorithm: darkAlgorithm }}>
      <Component {...pageProps} />
    </ConfigProvider>
  );
}
