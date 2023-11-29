import { Inter } from "next/font/google";
import Layout from "@/layout/Layout";

const inter = Inter({ subsets: ["latin"] });

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
            <div className="overview">Overview</div>
            <div className="plans">Plans</div>
          </div>
        </div>
      </Layout>
    </main>
  );
}
