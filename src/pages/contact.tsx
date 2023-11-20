import Head from "next/head";
import { Inter } from "next/font/google";
import Layout from "@/layout/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Nine Virtual Technologies</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${inter.className}`}>
        <Layout>
          <div id="contact" className="header-padding-top">
            <h2>Contact</h2>
            <p>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </div>
        </Layout>
      </main>
    </>
  );
}