import Link from "next/link";
import Image from "next/image";

export default function HeaderLogo() {
  return (
    <div id="header-logo">
      <Link href="/">
        <Image
          src="/svg/logo.svg"
          height={120}
          width={270}
          alt="logo"
          priority
        />
      </Link>
    </div>
  );
}
