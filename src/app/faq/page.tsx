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
  const content_type = "faq";
  const client = createClient({ space, accessToken });
  const res: any = await client.getEntries({ content_type });
  return res.items[0].fields;
}

async function getListItems() {
  const space = process.env.CONTENTFUL_SPACE_ID || "";
  const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN || "";
  const content_type = "listItemFaq";
  const client = createClient({ space, accessToken });
  const res: any = await client.getEntries({ content_type });
  return res.items; // [0].fields;
}

export default async function FAQ() {
  const data = await getData();
  const listItems = await getListItems();

  const { pageTitle, heroTitle, heroBackgroundImage, pageIntro } = data;

  const placeholderImage = "images/office.jpg";
  const dataImage = heroBackgroundImage?.fields?.file?.url;
  const backgroundImage = dataImage
    ? `url(http:${dataImage})`
    : `url(${placeholderImage})`;

  return (
    <main className={`${inter.className}`}>
      <Layout>
        <div id="faq">
          <div className="hero" style={{ backgroundImage }}>
            <div className="overlay" />
            <div className="container-sm">
              <h1>Frequently Asked Questions</h1>
            </div>
          </div>

          <div className="container-sm column intro">
            <div className="overview">
              <RichText data={pageIntro} />
            </div>
          </div>

          <div className="container-xmd column">
            <div className="content column">
              {listItems.length > 0
                ? listItems.map((item: any, index: number) => {
                    const { question, answer } = item.fields;
                    return (
                      <div key={index} className="item">
                        <h3>{question}</h3>
                        <RichText data={answer} />
                      </div>
                    );
                  })
                : "No FAQs found"}
            </div>
          </div>
        </div>
      </Layout>
    </main>
  );
}
