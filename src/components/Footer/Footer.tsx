import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div id="footer-main">
        <div className="container row">
          <div id="footer-logo" className="flex1 column">
            <Link href="/">
              <Image
                src="/images/logo.png"
                height={120}
                width={270}
                priority
                alt="logo"
              />
            </Link>
          </div>

          <div className="flex1 column">
            <span className="footer-title">Help</span>
            <ul>
              <li>
                <Link href="/faq">FAQ</Link>
              </li>
            </ul>
          </div>

          <div className="flex1 column">
            <span className="footer-title">Company</span>
            <ul>
              <li>
                <Link href="/about">About</Link>
              </li>

              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="flex1 column">
            <span className="footer-title">Account</span>

            <ul>
              <li>
                <Link href="https://support.ninevirtualtech.com">Support</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div id="footer-bottom">
        <div className="container row txt-center justify-center">
          <div id="footer-copyright" className="flex1 column txt-center px-15">
            © 2009 - {year} Nine Virtual Tech, All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
