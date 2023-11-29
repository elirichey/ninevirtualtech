"use client";
import HeaderLogo from "./components/HeaderLogo";
import DesktopMainMenu from "./components/DesktopMainMenu";
import MobileMainMenu from "./components/MobileMainMenu";

export default function Header() {
  return (
    <section id="header" className="flex1 column">
      <div id="header-body">
        <div className="container row">
          <HeaderLogo />
          <DesktopMainMenu />
          <MobileMainMenu />
        </div>
      </div>
    </section>
  );
}
