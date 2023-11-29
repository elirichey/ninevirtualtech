import "@/styles/globals.sass";
import { Inter } from "next/font/google";
import Layout from "@/layout/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <Layout>
        <div id="home">
          <div className="hero">
            <div className="container">
              <h1>We Power Business Cloud</h1>
            </div>
          </div>

          <div className="container column">
            <div className="overview">Overview</div>
            <div className="services">Services</div>
            <div className="partners">Partners</div>
            <div className="values">Value Propositions</div>
            <div className="testimonials">Testimonials</div>
          </div>
        </div>
      </Layout>
    </main>
  );
}
