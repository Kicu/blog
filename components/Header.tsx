import Link from 'next/link';

function Header(): JSX.Element {
  return (
    <header className="header">
      <Link href="/posts">
        <h1>
          <a>worlds in my head</a>
        </h1>
      </Link>
    </header>
  );
}

export default Header;
