// import Script from "next/script";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

interface Props {
  children: any;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      {children}
      <Footer />

      {/*<Script src="https://www.googletagmanager.com/gtag/js?id=G-" />
      <Script id="google-analytics">{}</Script>*/}
    </>
  );
}
