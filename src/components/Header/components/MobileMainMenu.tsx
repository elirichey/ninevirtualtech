import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function MobileMainMenu() {
  // Click detection
  const clickRef = useRef<any>(null);

  useEffect(() => {
    const handleClickOutside = (e: any) => {
      const { current } = clickRef;
      if (current && !current.contains(e.target)) setShowMenu(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [clickRef]);

  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <div ref={clickRef} id="mobile-main-menu" className="flex">
      <span
        className="mobile-menu-indicator"
        onClick={() => setShowMenu(!showMenu)}
      >
        {showMenu ? (
          <Image
            src="/svg/close.svg"
            className="close"
            height={44}
            width={44}
            alt="menu-close"
          />
        ) : (
          <Image
            src="/svg/mobile-menu.svg"
            className="open"
            height={44}
            width={44}
            alt="menu-open"
          />
        )}
      </span>

      {showMenu ? (
        <div id="mobile-menu-dropdown">
          <ul className="mobile-menu-dropdown-container">
            <li onClick={() => setShowMenu(false)}>
              <Link href="/" className="mobile-menu-primary">
                Home
              </Link>
            </li>

            <li onClick={() => setShowMenu(false)}>
              <Link href="/office-cloud" className="mobile-menu-primary">
                Office Cloud
              </Link>
            </li>

            <li onClick={() => setShowMenu(false)}>
              <Link href="/consulting" className="mobile-menu-primary">
                Consulting
              </Link>
            </li>

            <li onClick={() => setShowMenu(false)}>
              <Link href="/about" className="mobile-menu-primary">
                About
              </Link>
            </li>

            <li onClick={() => setShowMenu(false)}>
              <Link href="/faq" className="mobile-menu-primary">
                FAQ
              </Link>
            </li>

            <li onClick={() => setShowMenu(false)}>
              <Link href="/contact" className="mobile-menu-primary">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
}
