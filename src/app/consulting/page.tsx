import { createClient } from "contentful";
import { Inter } from "next/font/google";
import Layout from "@/layout/Layout";
import RichText from "@/components/Renders/RichText";

const inter = Inter({ subsets: ["latin"] });

// Every hour = 3600 seconds
const tmout = process.env.CONTENTFUL_REVALIDATE_TIME || "3600";
export const revalidate = parseInt(tmout);

async function getData() {
  const space = process.env.CONTENTFUL_SPACE_ID || "";
  const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN || "";
  const content_type = "consulting";
  const client = createClient({ space, accessToken });
  const res: any = await client.getEntries({ content_type });
  return res.items[0].fields;
}

export default async function Consulting() {
  const data = await getData();

  const { pageTitle, heroTitle, heroBackgroundImage, pageIntro } = data;

  const placeholderImage = "images/office.jpg";
  const dataImage = heroBackgroundImage?.fields?.file?.url;
  const backgroundImage = dataImage
    ? `url(http:${dataImage})`
    : `url(${placeholderImage})`;

  return (
    <main className={`${inter.className}`}>
      <Layout>
        <div id="consulting">
          <div className="hero" style={{ backgroundImage }}>
            <div className="container-sm">
              <h1>{heroTitle}</h1>
            </div>
          </div>

          <div className="container-sm column intro">
            <div className="overview">
              <RichText data={pageIntro} />
            </div>
          </div>
        </div>
      </Layout>
    </main>
  );
}
