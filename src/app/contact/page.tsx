"use client";
import { Inter } from "next/font/google";
import Layout from "@/layout/Layout";
import GeneralContact from "@/components/Forms/Contact/GeneralContact";

const inter = Inter({ subsets: ["latin"] });

export default function Contact({ data }: any) {
  console.log("Props::::", data);
  return (
    <main className={`${inter.className}`}>
      <Layout>
        <div id="contact">
          <div className="contact-header">
            <h1>Contact Us</h1>
            <p>
              {`We're here to help you with all your cloud service needs. Whether
              you have questions, need assistance, or want to discuss how our
              cloud solutions can benefit your business, we're just a message
              away.`}
            </p>

            <p>
              {`Please fill out the form below, and we'll get back to you as
              soon as possible. Your satisfaction is our top priority, and we
              look forward to assisting you on your cloud journey.`}
            </p>
          </div>

          <GeneralContact />
        </div>
      </Layout>
    </main>
  );
}

// This gets called on every request
//export async function getStaticProps() {
//  // Fetch data from external API
//  //const res = await fetch(`https://.../data`);
//  //const data = await res.json();
//  const data = await new Promise((resolve) =>
//    resolve({ name: "Test Passed!" })
//  );

//  // Pass data to the page via props
//  return { props: { data } };
//}
