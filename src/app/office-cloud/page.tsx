import { createClient } from "contentful";
import { Inter } from "next/font/google";
import Layout from "@/layout/Layout";
import RichText from "@/components/Renders/RichText";

const inter = Inter({ subsets: ["latin"] });

//async function getData() {
//  const space = process.env.CONTENTFUL_SPACE_ID || "";
//  const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN || "";
//  const content_type = "officeCloud";
//  const client = createClient({ space, accessToken });
//  const res: any = await client.getEntries({ content_type });
//  return res.items[0].fields;
//}

export default function OfficeCloud() {
  return (
    <main className={`${inter.className}`}>
      <Layout>
        <div id="office-cloud">
          <div className="hero">
            <div className="container">
              <h1>Office Cloud</h1>
            </div>
          </div>

          <div className="container column">
            <div className="overview column">Overview</div>
            <div className="plans column">Plans</div>
          </div>
        </div>
      </Layout>
    </main>
  );
}
