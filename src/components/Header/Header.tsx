import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import HeaderLogo from "./components/HeaderLogo";
import DesktopMainMenu from "./components/DesktopMainMenu";
import MobileMainMenu from "./components/MobileMainMenu";

export default function Header() {
  const router = useRouter();

  // Trigger White Background on Scroll...
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentRoute = router.pathname;
  const isHome = currentRoute === "/" || currentRoute === "/artists";

  const triggerWhiteBg = scrollPosition < 90 && isHome;
  const sectionStyles = triggerWhiteBg
    ? "flex1 column no-border"
    : "flex1 column";

  const isTransparent = triggerWhiteBg ? "transparent" : "";

  return (
    <section id="header" className={sectionStyles}>
      <div id="header-body" className={isTransparent}>
        <div className="container row">
          <HeaderLogo />
          <DesktopMainMenu />
          <MobileMainMenu />
        </div>
      </div>
    </section>
  );
}
