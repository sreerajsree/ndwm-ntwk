import Head from "next/head";
import Layout from "../components/constants/Layout";

const About = () => {
  return (
    <Layout>
      <Head>
        <title>About | Nine Day&apos;s Wonder Media Network</title>
      </Head>
     <div className="margin"></div>
      <section className="about-hero">
        <h1>
          <span>know</span>
        </h1>
        <h1>
          <span>about</span>
        </h1>
        <h1>
          <span>Nine day&apos;s</span>
        </h1>
        <h1>
          <span>wonder</span>
        </h1>
        <h1>
          <span>media</span>
        </h1>
      </section>

      <section className="about-photo full-bleed">
        <div className="about-linear-gradient-div-top"></div>
        <div className="about-linear-gradient-div-bottom"></div>
        <img className="about-image" src="/images/about.jpg" alt="Nine Day's Wonder Media Network" />
      </section>

      <section className="advertise">
         <div className="intro-text">
          <h5>
            We <span className="ndwm">Nine Day&apos;s Wonder Media Network</span> is
            a publisher of fashion trade websites for the fashion, retail and
            beauty industries.
          </h5>
          <p>
            These include{" "}
            <a href="https://thefashionenthusiast.netlify.app/" target="_blank" rel="noreferrer">
              The Fashion Enthusiast
            </a>
            .
          </p>
          <p>
            We are a media company for the future, with a remarkable past. We
            are Nine Day&apos;s Wonder Media Network.
          </p>
          <p className="italics">
            Our Mission: To be the world&apos;s premier publishing and media
            organization through delivering superior and innovative content,
            with a commitment to upholding journalistic excellence and driving
            today&apos;s media evolution, all while offering the finest opportunities
            to the industry&apos;s brightest talent.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default About;
