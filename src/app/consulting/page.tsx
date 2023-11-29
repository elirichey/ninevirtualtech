import { Inter } from "next/font/google";
import Layout from "@/layout/Layout";

const inter = Inter({ subsets: ["latin"] });

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
            <div className="content">Overview</div>
          </div>
        </div>
      </Layout>
    </main>
  );
}
