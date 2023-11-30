import { createClient } from "contentful";
import { Inter } from "next/font/google";
import Layout from "@/layout/Layout";
import RichText from "@/components/Renders/RichText";

const inter = Inter({ subsets: ["latin"] });

//async function getData() {
//  const space = process.env.CONTENTFUL_SPACE_ID || "";
//  const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN || "";
//  const content_type = "faq";
//  const client = createClient({ space, accessToken });
//  const res: any = await client.getEntries({ content_type });
//  return res.items[0].fields;
//}

export default function FAQ() {
  return (
    <main className={`${inter.className}`}>
      <Layout>
        <div id="faq">
          <div className="hero">
            <div className="container">
              <h1>Frequently Asked Questions</h1>
            </div>
          </div>

          <div className="container column">
            <div className="content column">Overview</div>
          </div>
        </div>
      </Layout>
    </main>
  );
}
