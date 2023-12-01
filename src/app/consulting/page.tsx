import { createClient } from "contentful";
import { Inter } from "next/font/google";
import Layout from "@/layout/Layout";
import RichText from "@/components/Renders/RichText";

const inter = Inter({ subsets: ["latin"] });

// Every hour = 3600 seconds
const tmout = process.env.CONTENTFUL_REVALIDATE_TIME || "3600";
export const revalidate = parseInt(tmout);

//async function getData() {
//  const space = process.env.CONTENTFUL_SPACE_ID || "";
//  const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN || "";
//  const content_type = "consulting";
//  const client = createClient({ space, accessToken });
//  const res: any = await client.getEntries({ content_type });
//  return res.items[0].fields;
//}

export default function Consulting() {
  return (
    <main className={`${inter.className}`}>
      <Layout>
        <div id="consulting">
          <div className="hero">
            <div className="container">
              <h1>Consulting</h1>
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
