import Link from 'next/link';

function Footer() {
  return (
    <footer className="footer">
      <p>© Kicu 2021</p>
      <Link href="/posts">
          <a>← blog</a>
      </Link>
    </footer>
  );
}

export default Footer;
