import { Inter } from "next/font/google";
import Layout from "@/layout/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  return (
    <main className={`${inter.className}`}>
      <Layout>
        <div id="about">
          <div className="hero">
            <div className="container">
              <h1>About</h1>
            </div>
          </div>

          <div className="container column">
            <div className="content">Overview</div>
          </div>
        </div>
      </Layout>
    </main>
  );
}
