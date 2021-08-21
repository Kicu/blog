import { AppProps } from 'next/app';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';

/* eslint-disable no-unused-vars */
import '../styles/index.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
