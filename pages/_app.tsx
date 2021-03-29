import { AppProps } from 'next/app';
import Header from '../components/Header';
import Footer from '../components/Footer';

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
