import { createClient } from "contentful";
import { Inter } from "next/font/google";
import Layout from "@/layout/Layout";
import GeneralContact from "@/components/Forms/Contact/GeneralContact";
import RichText from "@/components/Renders/RichText";

const inter = Inter({ subsets: ["latin"] });

// Every hour = 3600 seconds
const tmout = process.env.CONTENTFUL_REVALIDATE_TIME || "3600";
export const revalidate = parseInt(tmout);

async function getData() {
  const space = process.env.CONTENTFUL_SPACE_ID || "";
  const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN || "";
  const content_type = "contact";
  const client = createClient({ space, accessToken });
  const res: any = await client.getEntries({ content_type });
  return res.items[0].fields;
}

export default async function Contact() {
  const data = await getData();
  const pageTitle = data?.pageTitle || "Contact Us";
  const pageIntro = data?.pageIntro || undefined;
  const formIntro = data?.formIntro || undefined;

  return (
    <main className={`${inter.className}`}>
      <Layout>
        <div id="contact">
          <div className="contact-header">
            <h1>{pageTitle}</h1>
            {pageIntro ? (
              <RichText data={pageIntro} />
            ) : (
              <p>
                {`We're here to help you with all your cloud service needs. Whether
              you have questions, need assistance, or want to discuss how our
              cloud solutions can benefit your business, we're just a message
              away.`}
              </p>
            )}

            {formIntro ? (
              <RichText data={formIntro} />
            ) : (
              <p>
                {`Please fill out the form below, and we'll get back to you as
              soon as possible. Your satisfaction is our top priority, and we
              look forward to assisting you on your cloud journey.`}
              </p>
            )}
          </div>

          <GeneralContact />
        </div>
      </Layout>
    </main>
  );
}
