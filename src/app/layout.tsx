const companyName = "Nine Virtual Technologies";
const siteName = companyName;
const title = "Nine Virtual Technologies";
const description =
  "Nine Virtual Technologies hosts, manages, and supports business' IT Infrastructure with Enterprise level support.";
const url = "https://www.ninevirtualtech.com";
const omgImgUrl = "/images/og-img.png";
const images = [{ url: omgImgUrl, width: 1200, height: 630, alt: siteName }];
const locale = "en_US";
const type = "website";

const keywords = [companyName, "", "", ""];
const openGraph = { title, description, url, siteName, images, locale, type };

export const metadata = {
  title,
  description,
  openGraph,
  url,
  siteName,
  type,
  locale,
  keywords,
  creator: companyName,
  publisher: companyName,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="body">{children}</body>
    </html>
  );
}

//export default function RootLayout({
//  children,
//}: {
//  children: React.ReactNode
//}) {
//  return (
//    <html lang="en">
//      <body>{children}</body>
//    </html>
//  )
//}
