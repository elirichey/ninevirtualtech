import { createClient } from "contentful";
import { Inter } from "next/font/google";
import Layout from "@/layout/Layout";
import RichText from "@/components/Renders/RichText";
import FaqListItem from "@/components/FaqListItem/FaqListItem";

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

  const { pageTitle, heroTitle, heroBackgroundImage } = data;

  const dataImage = heroBackgroundImage?.fields?.file?.url;
  const backgroundImage = dataImage ? `url(http:${dataImage})` : undefined;

  return (
    <main className={`${inter.className}`}>
      <Layout>
        <div id="faq">
          <div className="hero" style={{ backgroundImage }}>
            <div className="overlay" />
            <div className="container-sm">
              <h1>{heroTitle}</h1>
            </div>
          </div>

          <div className="container-sm column content">
            {listItems.length > 0 ? (
              <ul>
                {listItems.map((item: any, index: number) => {
                  const { question, answer } = item.fields;
                  return (
                    <li key={index}>
                      <FaqListItem
                        question={question}
                        answer={answer}
                        index={index}
                      />
                    </li>
                  );
                })}
              </ul>
            ) : (
              "No FAQs found"
            )}
          </div>
        </div>
      </Layout>
    </main>
  );
}
