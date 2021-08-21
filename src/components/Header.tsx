import Link from 'next/link';
import Head from 'next/head';

function Header(): JSX.Element {
  return (
    <header className="header">
      <Head>
        <title>worlds in my head</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Link href="/posts">
        <h1>
          <a>worlds in my head</a>
        </h1>
      </Link>
    </header>
  );
}

export default Header;
