import "@/styles/globals.sass";
import { createClient } from "contentful";
import { Inter } from "next/font/google";
import Link from "next/link";
import Layout from "@/layout/Layout";
import RichText from "@/components/Renders/RichText";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

async function getData() {
  const space = process.env.CONTENTFUL_SPACE_ID || "";
  const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN || "";
  const content_type = "home";
  const client = createClient({ space, accessToken });
  const res: any = await client.getEntries({ content_type });
  return res.items[0].fields;
}

async function getPartners() {
  const space = process.env.CONTENTFUL_SPACE_ID || "";
  const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN || "";
  const content_type = "partner";
  const client = createClient({ space, accessToken });
  const res: any = await client.getEntries({ content_type });
  return res.items;
}

async function getTestimonials() {
  const space = process.env.CONTENTFUL_SPACE_ID || "";
  const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN || "";
  const content_type = "testimonial";
  const client = createClient({ space, accessToken });
  const res: any = await client.getEntries({ content_type });
  return res.items;
}

export default async function Home() {
  const data = await getData();
  const partners = await getPartners();
  const testimonials = await getTestimonials();

  const {
    heroBackgroundImage,
    heroTitle,
    introBody,
    serviceTitle1,
    serviceDescription1,
    serviceLink1,
    serviceTitle2,
    serviceDescription2,
    serviceLink2,
    valuePropositionTitle1,
    valuePropositionIcon1,
    valuePropositionDescription1,
    valuePropositionTitle2,
    valuePropositionIcon2,
    valuePropositionDescription2,
    valuePropositionTitle3,
    valuePropositionIcon3,
    valuePropositionDescription3,
    valuePropositionTitle4,
    valuePropositionIcon4,
    valuePropositionDescription4,
  } = data;

  const placeholderImage = "/images/placeholder-person.png";
  const dataImage = heroBackgroundImage?.fields?.file?.url;
  const backgroundImage = dataImage
    ? `url(http:${dataImage})`
    : placeholderImage;

  const valuePropsIcon1 = null;
  const valuePropsIcon2 = null;
  const valuePropsIcon3 = null;
  const valuePropsIcon4 = null;

  return (
    <main className={`${inter.className}`}>
      <Layout>
        <div id="home">
          <div className="hero" style={{ backgroundImage }}>
            <div className="container">
              <h1>{heroTitle}</h1>
            </div>
          </div>

          <div className="container-md column">
            <div className="overview column">
              <RichText data={introBody} />
            </div>
          </div>

          <div className="container-xmd column">
            <div className="services column">
              <h3>Services</h3>
              <div className="row">
                <div className="flex1 column p-15 align-center">
                  <Link href={serviceLink1 || "#"}>
                    <h5>{serviceTitle1}</h5>
                  </Link>

                  <RichText data={serviceDescription1} />
                </div>

                <div className="flex1 column p-15 align-center">
                  <Link href={serviceLink2 || "#"}>
                    <h5>{serviceTitle2}</h5>
                  </Link>
                  <RichText data={serviceDescription2} />
                </div>
              </div>
            </div>

            <div className="partners column">
              <h3>Partners</h3>
              <div className="row wrap">
                {partners.map((partner: any, i: number) => {
                  const { name, logo, url } = partner.fields;
                  const partnerLogoUrl = logo?.fields?.file?.url;

                  const partnerLogoImage = partnerLogoUrl
                    ? `https:${partnerLogoUrl}`
                    : undefined;

                  return (
                    <div className="flex1 w25" key={i}>
                      <a href={url || "#"}>
                        {partnerLogoImage ? (
                          <Image
                            src={partnerLogoImage}
                            alt={name}
                            height={300}
                            width={500}
                          />
                        ) : (
                          name
                        )}
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="values column">
              <h3>Value Propositions</h3>
              <div className="row">
                <div className="flex1 column p-15 align-center">
                  <h5>{valuePropositionTitle1}</h5>
                  <RichText data={valuePropositionDescription1} />
                </div>

                <div className="flex1 column p-15 align-center">
                  <h5>{valuePropositionTitle2}</h5>
                  <RichText data={valuePropositionDescription2} />
                </div>

                <div className="flex1 column p-15 align-center">
                  <h5>{valuePropositionTitle3}</h5>
                  <RichText data={valuePropositionDescription3} />
                </div>

                <div className="flex1 column p-15 align-center">
                  <h5>{valuePropositionTitle4}</h5>
                  <RichText data={valuePropositionDescription4} />
                </div>
              </div>
            </div>
          </div>

          <div className="container-sm column">
            <div className="testimonials column">
              <h3>Testimonials</h3>
              {testimonials.map((testimonial: any, i: number) => {
                const { name, company, quote } = testimonial.fields;

                return (
                  <div className="testimonial" key={i}>
                    <RichText data={quote} />
                    <div className="author">
                      <h5>- {name}</h5>
                      <span>{company}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Layout>
    </main>
  );
}
