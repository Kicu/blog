import Link from 'next/link';

/**
 * Absolute img url is used to solve the problem with basePath difference between local build and GH pages
 */
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
            src="https://kicu.github.io/blog/images/github-mark.png"
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
