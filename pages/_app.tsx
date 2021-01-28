import { AppProps } from 'next/app';

/* eslint-disable no-unused-vars */
import '../styles/index.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
