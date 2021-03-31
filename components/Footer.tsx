import Link from 'next/link';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__footerLeft">
        <span>© Kicu 2021</span>
        <Link href="/posts">
          <a>← blog</a>
        </Link>
      </div>
      <div className="footer__footerRight">
        <a href="https://github.com/Kicu/blog" className="footer__githubLink">
          <img
            src="/images/github-mark.png"
            alt="github-mark"
            className="footer__githubMark"
          />
          GitHub
        </a>
      </div>
    </footer>
  );
}

export default Footer;
