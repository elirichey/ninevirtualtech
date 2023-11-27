import Link from "next/link";

export default function DesktopMainMenu() {
  return (
    <div id="desktop-main-menu" className="flex">
      <ul className="flex row">
        <li className="desktop-main-menu-link">
          <Link href="/">Home</Link>
        </li>

        <li className="desktop-main-menu-link">
          <Link href="/office-cloud">Office Cloud</Link>
        </li>

        <li className="desktop-main-menu-link">
          <Link href="/consulting">Consulting</Link>
        </li>

        <li className="desktop-main-menu-link">
          <Link href="/about">About</Link>
        </li>

        <li className="desktop-main-menu-link">
          <Link href="/faq">FAQ</Link>
        </li>

        <li className="desktop-main-menu-link">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}
