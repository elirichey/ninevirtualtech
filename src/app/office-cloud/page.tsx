import { createClient } from "contentful";
import { Inter } from "next/font/google";
import Layout from "@/layout/Layout";
import RichText from "@/components/Renders/RichText";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

// Every hour = 3600 seconds
const tmout = process.env.CONTENTFUL_REVALIDATE_TIME || "3600";
export const revalidate = parseInt(tmout);

async function getData() {
  const space = process.env.CONTENTFUL_SPACE_ID || "";
  const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN || "";
  const content_type = "officeCloud";
  const client = createClient({ space, accessToken });
  const res: any = await client.getEntries({ content_type });
  return res.items[0].fields;
}

async function getHowItWorks() {
  const space = process.env.CONTENTFUL_SPACE_ID || "";
  const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN || "";
  const content_type = "listItemHowOfficeCloudWorks";
  const client = createClient({ space, accessToken });
  const res: any = await client.getEntries({ content_type });
  return res.items;
}

export default async function OfficeCloud() {
  const data = await getData();
  let howItWorks = await getHowItWorks();

  const {
    pageTitle,
    heroBackgroundImage,
    pageIntro,
    planTitle1,
    planPackage1,
    planPrice1,
    planDescription1,
    planIncludes1,
    planTitle2,
    planPackage2,
    planPrice2,
    planDescription2,
    planIncludes2,
    planTitle3,
    planPackage3,
    planPrice3,
    planDescription3,
    planIncludes3,
  } = data;

  howItWorks = howItWorks.sort((a: any, b: any) => {
    return a.fields.stepNumber - b.fields.stepNumber;
  });

  const howItWorks1 = howItWorks[0].fields;
  const howItWorks2 = howItWorks[1].fields;
  const howItWorks3 = howItWorks[2].fields;
  const howItWorks4 = howItWorks[3].fields;

  const placeholderImage = "images/office.jpg";
  const dataImage = heroBackgroundImage?.fields?.file?.url;
  const backgroundImage = dataImage
    ? `url(http:${dataImage})`
    : `url(${placeholderImage})`;

  return (
    <main className={`${inter.className}`}>
      <Layout>
        <div id="office-cloud">
          <div className="hero" style={{ backgroundImage }}>
            <div className="overlay" />
            <div className="container-sm">
              <h1>{pageTitle}</h1>
            </div>
          </div>

          <div className="container-sm column intro">
            <div className="overview">
              <RichText data={pageIntro} />
            </div>
          </div>

          <div className="container-md column how-it-works">
            <h2>How It works</h2>
            <div className="row">
              <div className="flex1 column">
                <h3>
                  <span>{howItWorks1?.stepNumber}</span>
                  {howItWorks1?.title}
                </h3>

                <RichText data={howItWorks1?.description} />
              </div>
            </div>

            <div className="row">
              <div className="flex1 column">
                <h3>
                  <span>{howItWorks2?.stepNumber}</span>
                  {howItWorks2?.title}
                </h3>
                <RichText data={howItWorks2?.description} />
              </div>
            </div>

            <div className="row">
              <div className="flex1 column">
                <h3>
                  <span>{howItWorks3?.stepNumber}</span>
                  {howItWorks3?.title}
                </h3>
                <RichText data={howItWorks3?.description} />
              </div>
            </div>

            <div className="row">
              <div className="flex1 column">
                <h3>
                  <span>{howItWorks4?.stepNumber}</span>
                  {howItWorks4?.title}
                </h3>
                <RichText data={howItWorks4?.description} />
              </div>
            </div>
          </div>

          <div className="container-xmd column list-plans">
            <h3>Plans</h3>
            <div className="plans row wrap">
              <div className="flex1 column m-15 plan">
                <h4>{planTitle1}</h4>
                <div className="package">{planPackage1}</div>
                <div className="price">{planPrice1}</div>
                {planDescription1 ? (
                  <div className="description">
                    <RichText data={planDescription1} />
                  </div>
                ) : (
                  <></>
                )}

                <div className="includes">
                  <div className="title">Includes</div>
                  <RichText data={planIncludes1} />
                </div>

                <div className="get-started">
                  <Link href="/contact">Get Started</Link>
                </div>
              </div>

              <div className="flex1 column m-15 plan">
                <h4>{planTitle2}</h4>
                <div className="package">{planPackage2}</div>
                <div className="price">{planPrice2}</div>
                {planDescription2 ? (
                  <div className="description">
                    <RichText data={planDescription2} />
                  </div>
                ) : (
                  <></>
                )}

                <div className="includes">
                  <div className="title">Includes</div>
                  <RichText data={planIncludes2} />
                </div>

                <div className="get-started">
                  <Link href="/contact">Get Started</Link>
                </div>
              </div>

              <div className="flex1 column m-15 plan">
                <h4>{planTitle3}</h4>
                <div className="package">{planPackage3}</div>
                <div className="price">{planPrice3}</div>
                {planDescription3 ? (
                  <div className="description">
                    <RichText data={planDescription3} />
                  </div>
                ) : (
                  <></>
                )}

                <div className="includes">
                  <div className="title">Includes</div>
                  <RichText data={planIncludes3} />
                </div>

                <div className="get-started">
                  <Link href="/contact">Get Started</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </main>
  );
}
